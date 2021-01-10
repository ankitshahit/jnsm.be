/** @format */

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { Dropdown2Component } from "./dropdown2/dropdown2.component";
import { ItemComponent } from "./taskitem/item.component";
import { RepeatComponent } from "./repeattask/repeat.component";
import { CommonModule } from "@angular/common";
@NgModule({
	declarations: [
		AppComponent,
		ItemComponent,
		RepeatComponent,
		Dropdown2Component,
	],
	imports: [BrowserModule, CommonModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
