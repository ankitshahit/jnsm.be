/** @format */

module.exports = {
	/***
	 * Assumes that a date object is passed as reference!
	 */
	getDateByISODateTime(datetime) {
		datetimeArray = datetime.toISOString().split("T");
		if (!datetimeArray || datetimeArray.length <= 0 || !datetimeArray[0]) {
			throw new Error(`Datetime ISO format is invalid!`);
		}
		return datetimeArray[0];
	},
	addDays(date, days) {
		var result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	},
};
