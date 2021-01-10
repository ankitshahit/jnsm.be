/** @format */

import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-item",
	templateUrl: "./item.component.html",
	styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
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
	constructor() {}

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
}
