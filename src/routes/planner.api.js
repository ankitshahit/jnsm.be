/** @format */

const planner = require("../database/model/planner.model");

const router = require(`express`).Router();

/***
 * Creates a new bucket in planner with provided details!
 */
router.post(`http://localhost:5000/planner/new`, async (req, res) => {
	const {title, type, parent_id, state, repeat} = req.body;
	try {
		const planner = new planner({
			type,
			title,
			state,
			repeat,
			parent_id: (parent_id || "").trim(),
		});
	} catch (error) {
		console.error(`${error}`);
	}
});
module.exports = router;
