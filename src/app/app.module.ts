/** @format */

import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {DashboardLineTabComponent} from "./components/dashboard-line-tab/dashboard-line-tab.component";
import {NavbarComponent} from "./page/navbar/navbar.component";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {LogNewThoughtsComponent as NewThoughtsSummaryComponent} from "./components/thoughts-new-summary/log-new-thoughts.component";
import {HomeComponent} from "./page/home/home.component";
import {ThoughtItemDetailedComponent as NewThoughtsDetailedComponent} from "./components/thought-new-detailed/thought-item-detailed.component";
import {ConfirmQuickLogComponent} from "./components/confirm-action/confirm-action.component";
import {CommonModule} from "@angular/common";
import {CategoryComponent} from "./page/category/category.component";
import {ThoughtsApiService} from "./components/thoughts-new-summary/thoughts-api.service";
import { DashboardViewItemsComponent } from './page/dashboard-view-items/dashboard-view-items.component';

const routes = [
	{path: "", component: HomeComponent, pathMatch: "full"},
	{path: "dashboard", component: DashboardComponent},
	{path: "new", component: NewThoughtsSummaryComponent},
	{
		path: "detailed",
		component: NewThoughtsDetailedComponent,
	},
];
@NgModule({
	declarations: [
		AppComponent,
		DashboardLineTabComponent,
		NavbarComponent,
		DashboardComponent,
		NewThoughtsSummaryComponent,
		HomeComponent,
		NewThoughtsDetailedComponent,
		ConfirmQuickLogComponent,
		CategoryComponent,
		DashboardViewItemsComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		RouterModule.forRoot(routes),
	],
	providers: [ThoughtsApiService],
	bootstrap: [AppComponent],
})
export class AppModule {}
