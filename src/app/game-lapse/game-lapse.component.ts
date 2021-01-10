import { Component } from '@angular/core';

@Component({
  selector: 'game-lapse-list',
  templateUrl: `./game-lapse.component.html`,

})
export class GameLapseComponent{
  lapsedData:Array<string> = new Array<string>(0);
  data1: [string] = [''];

  public onEvent(data: {time:string}){
    this.lapsedData.push(data.time);
    console.log(`${data}`);
  }
}
