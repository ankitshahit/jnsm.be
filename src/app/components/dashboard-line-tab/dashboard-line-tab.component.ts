/** @format */

import {Component, Input, OnInit} from "@angular/core";

@Component({
	selector: "dashboard-line-tab",
	templateUrl: "./dashboard-line-tab.component.html",
	styleUrls: ["./dashboard-line-tab.component.css"],
})
export class DashboardLineTabComponent implements OnInit {
	@Input() item = {
		caption: "",
		value: "",
		caption_icon: "",
		value_color: "black",
		value_bgcolor: "#fff",
		icon: "fa",
	};
	constructor() {}

	ngOnInit(): void {}
}
