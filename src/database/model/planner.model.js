/** @format */

const mongoose = require(`mongoose`);

const plannerSchema = mongoose.Schema({
	type: {type: String, required: true, default: "task"},
	title: {type: String, required: true},
	state: {type: String, required: true, default: "todo"},
	repeat: {type: String, required: true, default: "never"},
	start_date: {type: Date, required: false, default: Date.now},
	completed_date: {type: Date, required: false},
	parent_id: {type: String, required: false},
	created_on: {type: Date, required: true, default: Date.now},
});
module.exports = mongoose.model(`Planner`, plannerSchema);
