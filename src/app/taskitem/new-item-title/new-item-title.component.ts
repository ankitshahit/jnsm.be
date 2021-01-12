/** @format */

import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
	selector: "new-item-title",
	templateUrl: "./new-item-title.component.html",
	styleUrls: ["./new-item-title.component.css"],
})
export class NewItemTitleComponent {
	@Output() metadataEvent = new EventEmitter();

	metadata = {
		isFirstTime: true,
		placeholder: "",
		isNotEditable: false,
		title: "",
		id: undefined,
		parent_id: undefined,
		markAsComplete: false,
	};

	onNewTitleSubmit() {
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

		this.metadataEvent.emit(this.metadata);
	}

	titleIsNotEmpty() {
		return !(
			this.metadata.title === "" ||
			this.metadata.title === undefined ||
			this.metadata.title === null
		);
	}
}
