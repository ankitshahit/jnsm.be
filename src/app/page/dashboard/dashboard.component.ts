/** @format */

import {Component, OnInit} from "@angular/core";
import {ThoughtsApiService} from "src/app/components/thoughts-new-summary/thoughts-api.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
	dashboardData: {
		alltime: {positive: number | string; negative: number | string};
		today: {positive: number | string; negative: number | string};
	};

	positive = 0;
	metadata = {
		error: {},
		loading: true,
	};
	constructor(public thoughtsApiService: ThoughtsApiService) {}

	ngOnInit() {
		if (this.dashboardData) {
			return;
		}
		this.thoughtsApiService
			.getDashboardItemsCount()
			.then((res) => {
				this.metadata.loading = false;
				this.dashboardData = res;
			})

			.catch(
				(error) =>
					(this.metadata.error = {message: error.msg, showMessage: true})
			);
		console.log(`dashboard data: ${this.dashboardData}`);
	}
}
