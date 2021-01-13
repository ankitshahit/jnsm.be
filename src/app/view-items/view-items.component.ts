/** @format */

import {Component, OnInit} from "@angular/core";
import {ItemService} from "../taskitem/item.service";

@Component({
	selector: "app-view-items",
	templateUrl: "./view-items.component.html",
	styleUrls: ["./view-items.component.css"],
})
export class ViewItemsComponent implements OnInit {
	showAddItem = false;
	constructor(public itemService: ItemService) {}

	ngOnInit(): void {}
}
