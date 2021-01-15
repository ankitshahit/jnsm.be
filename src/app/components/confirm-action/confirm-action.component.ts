/** @format */

import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
	selector: "confirm-message",
	templateUrl: "./confirm-quick-log.component.html",
	styleUrls: ["./confirm-quick-log.component.css"],
})
export class ConfirmQuickLogComponent implements OnInit {
	@Input("metadata") metadata: {
		title: string;
		message: string;

		id: string;
	};

	@Output("onConfirm") confirmEvent = new EventEmitter();
	@Output("onCancel") cancelEvent = new EventEmitter();
	constructor() {}

	ngOnInit(): void {}

	onConfirm() {
		this.confirmEvent.emit({metadata: this.metadata, confirm: true});
	}
	onCancel() {
		this.cancelEvent.emit({metadata: this.metadata, confirm: false});
	}
}
