
import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'game',
     templateUrl: './game.component.html',
     styleUrls: [
         './game.component.css'
     ]
})
export class GameComponent{
  readonly NEVER_STARTED: number = -1;
  readonly STARTED : number = 1;
  readonly STOPPED : number = 2;
  readonly START_TIMER_TEXT : string = 'Start Timer';
  readonly STOP_TIMER_TEXT : string  = 'Stop Timer';
  @Output() lapsedEvent: EventEmitter<{'time': string, 'index': number}> = new EventEmitter<{
    time: string, index: number
  }>();

  timerStatus: number;
  buttonText: string;
  timer: string;
  hideMessage: boolean = false;
  timerInterval;
  messageInterval;
  currentMessageIndex: number = 0;
  constructor(){
    this.timerStatus = this.NEVER_STARTED;
    this.buttonText = this.START_TIMER_TEXT;

  }

  onHideMessage(){
    console.log(`Event received onHideMessage`);
    this.hideMessage = false;
    console.log(this.hideMessage);
    clearInterval(this.messageInterval);
  }
  onToggle(){

    this.buttonText = this.buttonText === this.START_TIMER_TEXT ?
    this.STOP_TIMER_TEXT  :
    this.START_TIMER_TEXT;

     if(
       this.timerStatus === this.NEVER_STARTED || this.timerStatus ===  this.STARTED
     ){
       this.timerStatus = this.STOPPED;
       this.timerInterval = setInterval(()=>{
        this.timer = this.getLocaleTime();
        this.lapsedEvent.emit({'time': this.timer, index: this.currentMessageIndex++});
       }, 1000);
     }else{
       this.timerStatus = this.STARTED;
       this.timer = this.getLocaleTime();
       clearInterval(this.timerInterval);

     }

  }
  getLocaleTime(){
    return new Date().toLocaleTimeString();
  }
}
