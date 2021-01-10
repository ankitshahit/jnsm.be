/** @format */

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GameComponent } from "./game/game.component";
import { GameLapseComponent } from "./game-lapse/game-lapse.component";
import { CommonModule } from "@angular/common";
import { OddEvenComponent } from "./oddeven/oddeven.component";
import { ItemComponent } from "./item/item.component";
import { RepeatComponent } from "./repeat/repeat.component";
import { Dropdown2Component } from './dropdown2/dropdown2.component';
@NgModule({
	declarations: [
		AppComponent,
		GameComponent,
		GameLapseComponent,
		OddEvenComponent,
		ItemComponent,
		RepeatComponent,
		Dropdown2Component,
	],
	imports: [BrowserModule, CommonModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
