/** @format */

import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
} from "@angular/core";

@Component({
	selector: "confirm-message",
	templateUrl: "./confirm-quick-log.component.html",
	styleUrls: ["./confirm-quick-log.component.css"],
})
export class ConfirmQuickLogComponent implements OnInit {
	@Input("metadata") metadata: {
		title: string;
		message: string;
		quickLog: boolean;
		id: string;
	};

	@Output("onConfirm") confirmEvent = new EventEmitter();
	@Output("onCancel") cancelEvent = new EventEmitter();

	@ViewChild("category") category: ElementRef;
	reason: string;
	constructor() {}

	ngOnInit(): void {}

	onConfirm() {
		this.confirmEvent.emit({
			metadata: this.metadata,
			confirm: true,
			data: {
				reason: this.reason,
				category: !this.metadata.quickLog
					? this.category.nativeElement.value
					: "",
			},
		});
	}
	onCancel() {
		this.cancelEvent.emit({metadata: this.metadata, confirm: false});
	}
}
