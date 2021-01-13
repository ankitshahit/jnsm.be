/** @format */

export class ItemService {
	items = [];

	public addItem(item) {
		this.items.push(item);
	}

	public getAllItemsByState(state: string) {
		return [...this.items.filter((item) => item.state.text === state)];
	}

	public getItems() {
		return [...this.items];
	}
}
