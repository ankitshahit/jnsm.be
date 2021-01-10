/** @format */

import { Injectable } from "@angular/core";
import { DropdownItem } from "./dropdownItem.model";

@Injectable()
export class DropdownService {
	private items: DropdownItem[];

	public setItems(items: DropdownItem[]) {
		this.items = items;
	}

	getItems() {
		return [...this.items];
	}
	public filterItemsOnSearchText(text: string) {
		//change this to reflect or re-draw the elements!
		return this.items.filter((item) =>
			item.text.toLowerCase().includes(text.toLowerCase())
		);
	}

	public selectedItem(item: { id: number; text: string }) {}
}
