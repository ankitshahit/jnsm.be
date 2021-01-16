/** @format */

const mongoose = require(`mongoose`);
const util = require(`../../../util`);
const thoughtSchema = mongoose.Schema({
	type: {type: String, required: true},
	datetime: {type: Date, required: true, default: Date.now},
	category: {type: String, required: false, default: "Quick Log"},
	reason: {type: String, required: false, default: "Category"},
	user: {type: String, required: true, default: "0"},
});

const groupByTypeBasedOnDates = function filterGroupByBasedOnDates(
	startDate = new Date(),
	endDate = new Date(startDate.getDate(), 1)
) {
	return [
		{
			$match: {
				datetime: {
					$gte: new Date(util.getDateByISODateTime(startDate)),
					$lte: new Date(util.getDateByISODateTime(endDate)),
				},
			},
		},
		{
			$group: {
				_id: "$type",
				count: {$sum: 1},
			},
		},
	];
};

const groupByType = function () {
	return [
		{
			$group: {
				_id: "$type",
				count: {$sum: 1},
			},
		},
	];
};

const convertDocumentByType = (documents) => {
	let data = {};
	documents.forEach((document) => {
		const _id = (document._id || "").toLowerCase();
		const count = document.count || 0;
		if ("positive" === _id) {
			data.positive = count;
		} else if ("negative" === _id) {
			data.negative = count;
		} else if ("neutral" === _id) {
			data.neutral = count;
		} else if ("none" === _id) {
			data.none = count;
		}
	});
	return data;
};

module.exports = {
	Thought: mongoose.model("Thought", thoughtSchema),
	groupByTypeBasedOnDates,
	groupByType,
	convertDocumentByType,
};
