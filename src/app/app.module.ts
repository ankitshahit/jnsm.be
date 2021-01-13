/** @format */

import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {AppComponent} from "./app.component";
import {Dropdown2Component} from "./dropdown2/dropdown2.component";
import {ItemComponent} from "./taskitem/item.component";
import {RepeatComponent} from "./repeattask/repeat.component";
import {NewItemTitleComponent} from "./taskitem/new-item-title/new-item-title.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ViewItemsComponent} from "./view-items/view-items.component";
import {ItemService} from "./taskitem/item.service";
@NgModule({
	declarations: [
		AppComponent,
		ItemComponent,
		RepeatComponent,
		Dropdown2Component,
		NewItemTitleComponent,
		DashboardComponent,
		ViewItemsComponent,
	],
	imports: [BrowserModule, CommonModule, FormsModule],
	providers: [ItemService],
	bootstrap: [AppComponent],
})
export class AppModule {}
