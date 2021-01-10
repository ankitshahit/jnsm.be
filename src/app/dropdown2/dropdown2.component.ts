/** @format */

import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { DropdownService } from "./dropdown2.service";
import { DropdownItem } from "./dropdownItem.model";

@Component({
	selector: "dropdown2",
	templateUrl: "./dropdown2.component.html",
	styleUrls: ["./dropdown2.component.css"],
})
export class Dropdown2Component implements OnInit {
	@Input("items")
	items = [];
	@Output("selectedItem") event = new EventEmitter<DropdownItem>();
	filteredItems = [];
	searchText = "";
	//constructor(public dropdownService: DropdownService) {}

	ngOnInit(): void {
		this.filteredItems = [...this.items];
	}

	onClick(item: { id: number; text: string }) {
		console.log(`Inside onclick fired`);
		this.searchText = item.text;
		this.event.emit(item);
		console.log(`Inside onclick fired: ${JSON.stringify(item)}`);
	}

	searchDropdownText(text: string) {
		console.log(`Inside search dropdowntext: ${text}`);
		if (
			this.isTextEmpty(text) &&
			this.items.length > 0 &&
			this.items.length !== (this.filteredItems || []).length
		) {
			console.log(`Inside filtered text`);
			this.filteredItems = [...this.items];
		} else if (this.isTextEmpty(text)) {
			return;
		}

		//change this to reflect or re-draw the elements!
		this.filteredItems = this.items.filter((item) =>
			item.text.toLowerCase().includes(text.toLowerCase())
		);
	}

	isTextEmpty(text: string) {
		return text === null || text === undefined || text === "";
	}
}
