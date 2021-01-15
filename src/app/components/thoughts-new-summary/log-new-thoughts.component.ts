/** @format */

import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ThoughtsApiService} from "./thoughts-api.service";

@Component({
	selector: "app-log-new-thoughts",
	templateUrl: "./log-new-thoughts.component.html",
	styleUrls: ["./log-new-thoughts.component.css"],
	providers: [ThoughtsApiService],
})
export class LogNewThoughtsComponent {
	readonly QUICK_LOG = {
		datetime: new Date(),
		reason: "quick-log",
		comments: "quick-log",
		category: "quick-log",
		type: "",
	};

	metadata = {
		title: "",
		message: "Please click on confirm!",
		id: "confirmMessageModal",
		quickLog: true,
		type: "",
		error: {
			caption: "Error occurred, couldn't save the details",
			text: " while executing APi",
			showMessage: false,
		},
		success: {
			showMessage: false,
		},
	};

	constructor(public thoughtsApiService: ThoughtsApiService) {}

	onLogAThought(event) {
		console.log(
			`quick-log: ${this.metadata.quickLog} ${JSON.stringify(event)}`
		);
		try {
			let item = {
				datetime: new Date(),
				type: this.metadata.type,
			};
			this.thoughtsApiService.save(item);
			this.reset();
		} catch (errorData) {
			console.log(`error occurred: ${errorData}`);
			this.metadata.error = {
				caption: "Error occured, couldn't save!",
				text: errorData.msg,
				showMessage: true,
			};
		}
	}

	hideErrorMessage() {
		this.metadata.error.showMessage = !this.metadata.error.showMessage;
	}

	updateType(currentType: string) {
		console.log(`currenttype: ${currentType}`);
		this.metadata.type = currentType;
		console.log(`type after update: ${this.metadata.type}`);
	}

	reset() {
		this.metadata.success.showMessage = !this.metadata.success.showMessage;
		this.updateType("");
	}
}
