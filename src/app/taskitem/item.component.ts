/** @format */

import {Component, OnInit} from "@angular/core";
import {DropdownItem} from "../dropdown2/dropdownItem.model";
import {ItemService} from "./item.service";

@Component({
	selector: "app-item",
	templateUrl: "./item.component.html",
	styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
	readonly allItemState = [
		new DropdownItem({id: 1, text: "To do"}),
		new DropdownItem({id: 2, text: "Active"}),
		new DropdownItem({id: 3, text: "Closed"}),
	];

	constructor(public itemService: ItemService) {}
	metadata = {
		isFirstTime: true,
		placeholder: "",
		isNotEditable: false,
		title: "",
		id: undefined,
		type: "",
		child: [],
	};
	childCounter = [];
	ngOnInit(): void {}

	onMouseClick() {
		console.log(`Inside mouseclicked!`);
		if (this.metadata.isFirstTime || !this.metadata.isNotEditable) {
			return;
		}
		this.metadata.isNotEditable = this.titleIsNotEmpty();
	}

	titleIsNotEmpty() {
		return !(
			this.metadata.title === "" ||
			this.metadata.title === undefined ||
			this.metadata.title === null
		);
	}
	storeMetadata(type: string, event) {
		if (type === "main-title") {
			this.metadata = event;
			this.metadata.child = [];
		} else if (type === "child-title") {
			this.metadata.child.push(event);
		}
	}
	cardStyles() {
		return {
			borderColor: this.metadata.type === "issues" ? "green" : "yellow",
		};
	}

	createNewItem() {
		console.log(
			`inside counter: ${
				this.childCounter.length === this.metadata.child.length
			}`
		);
		if (this.childCounter.length === this.metadata.child.length) {
			this.childCounter.push(this.childCounter.length + 1);
		} else {
			return;
		}
	}

	saveItem() {
		console.log(`Saving the item!`);
		this.itemService.addItem(this.metadata);
	}

	cancelItem() {
		console.log(`Resetting the changes`);
	}
}
