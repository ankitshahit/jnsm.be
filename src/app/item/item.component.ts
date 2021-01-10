/** @format */

import { ThrowStmt } from "@angular/compiler";
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
	};

	constructor() {}

	ngOnInit(): void {}

	onMouseExit() {
		console.log(`Inside mouseexit ${JSON.stringify(this.metadata)}`);
		if (
			(this.metadata.isNotEditable && !this.metadata.isFirstTime) ||
			this.metadata.isNotEditable ||
			!this.titleIsNotEmpty()
		) {
			console.log(`returning back as one of the conditions matched!`);
			return;
		}
		this.metadata.isFirstTime = false;
		this.metadata.isNotEditable = true;
		this.metadata.id =
			this.metadata.id ||
			Math.ceil(Math.floor(Math.random() + 1.4) * 1.4 + Math.random());
	}
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

	cardStyles() {
		return {
			borderColor: this.metadata.type === "issues" ? "green" : "yellow",
		};
	}
}
