/** @format */

export class DropdownItem implements IDropdownItem {
	id: number;
	text: string;
	constructor(options: IDropdownItem) {
		Object.assign(this, options);
	}
}

interface IDropdownItem {
	id: number;
	text: string;
}
