
import {Component, Input} from "@angular/core";
import {OddEven} from "./oddeven.model";
@Component({
  selector: 'oddeven',
  templateUrl: './oddeven.component.html',
  styleUrls:[]

})
export class OddEvenComponent {

   @Input("oddEven") public data: OddEven;

}
