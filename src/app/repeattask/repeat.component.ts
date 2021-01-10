/** @format */

import { Component, OnInit } from "@angular/core";
import { DropdownItem } from "../dropdown2/dropdownItem.model";

@Component({
	selector: "app-repeat",
	templateUrl: "./repeat.component.html",
	styleUrls: ["./repeat.component.css"],
})
export class RepeatComponent implements OnInit {
	items = [
		new DropdownItem({ id: 0, text: "Never" }),
		new DropdownItem({ id: 1, text: "Hourly" }),
		new DropdownItem({ id: 2, text: "Daily" }),
		new DropdownItem({ id: 3, text: "monthly" }),
	];
	text = "";
	selectedItem = "";
	constructor() {}

	ngOnInit(): void {}
	onMouseEnter() {
		this.selectedItem = "";
		console.log(
			`before selected item: ${this.selectedItem}, selected text: ${this.text}`
		);
		if (!(this.text === "" || this.text === undefined || this.text === null)) {
			this.text = "";
			this.selectedItem = "";
		}
		console.log(
			`after selected item: ${this.selectedItem}, selected text: ${this.text}`
		);
	}
}
