/** @format */

import {CompileShallowModuleMetadata} from "@angular/compiler";
import {Component, OnInit} from "@angular/core";
import {ThoughtsApiService} from "src/app/components/thoughts-new-summary/thoughts-api.service";

@Component({
	selector: "dashboard-view-items",
	templateUrl: "./dashboard-view-items.component.html",
	styleUrls: ["./dashboard-view-items.component.css"],
})
export class DashboardViewItemsComponent implements OnInit {
	tableData;

	metadata = {
		error: {},
		loading: true,
	};
	constructor(public thoughtsApiService: ThoughtsApiService) {}

	ngOnInit(): void {
		if (this.tableData) {
			return;
		}

		this.thoughtsApiService
			.getAllMoods()
			.then((res) => {
				console.log(`Inside get all moods! ${JSON.stringify(res)}`);
				this.tableData = this.parseAsTableData(res);
				this.metadata.loading = false;
			})
			.catch((error) => {
				this.metadata.error = {
					showMessage: true,
					message: error.msg,
				};
				console.error(`Error ${JSON.stringify(error)}`);
			});
	}

	parseAsTableData(res) {
		let data = [];
		res.body.forEach((item) => {
			const {datetime, type: mood, reason, category} = item;

			data.push({
				datetime,
				reason,
				mood: this.changeMoodToIcon(mood),
				category,
			});
		});

		return data;
	}

	changeMoodToIcon(mood: string) {
		let icon = "";
		console.log(`mood: ${mood}`);
		switch (mood) {
			case "positive":
				icon = "fa fa-smile-o";
				console.log(`inside positive: ${mood}`);
				break;
			case "neutral":
				icon = "fa fa-meh-o";
				console.log(`inside neutral: ${mood}`);
				break;
			case "negative":
				icon = "fa fa-frown-o";
				console.log(`inside negative: ${mood}`);
				break;
			default:
				icon = "fa fa-smile-wink";
				console.log(`inside default: ${mood}`);
				break;
		}
		return icon;
	}
}
