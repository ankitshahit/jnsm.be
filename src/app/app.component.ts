import { Component, ElementRef , ViewChild} from '@angular/core';
import { GameLapseComponent } from './game-lapse/game-lapse.component';
import { OddEven } from './oddeven/oddeven.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly bufferRows: number = 6;
  title = 'angular-timer';
  @ViewChild('gamelapsed') gameLapsed: GameLapseComponent;

  oddEvenList: Array<OddEven> = new Array<OddEven>(0);
  onEvent(data:{time: string, index: number}){

    this.oddEvenList.push(new OddEven(data.index,data.index %2 !==0, data.index %2===0 ));
    if(this.oddEvenList.length > this.bufferRows){
      this.oddEvenList.splice(0,this.bufferRows);
    }
  }
}
