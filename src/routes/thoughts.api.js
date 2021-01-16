/** @format */

const router = require(`express`).Router();
const mongoose = require(`mongoose`);
const {
	Thought,
	groupByTypeBasedOnDates,
	groupByType,
	convertDocumentByType,
} = require(`../database/model/thought.model`);

const util = require(`../../util`);

router.get("/all", async (req, res) => {
	try {
		const {limit = "50", next_page = ""} = req.query;

		const documents = await Thought.find(dbSearchParameters(next_page))
			.limit(parseInt(limit))
			.sort({datetime: -1});

		return res.status(200).json({
			metadata: {
				limit,
				next_page: "",
			},
			body: documents,
		});
	} catch (error) {
		return res.status(400).json({caption: "An error occurred!", trace: error});
	}
});
router.get(`/id/{id}`, async (req, res) => {});

router.post(`/new`, async (req, res) => {
	const {type, category, reason} = req.body;

	console.log(
		`Body: ${JSON.stringify(req.body)} category: ${JSON.stringify(
			category
		)}, reason: ${JSON.stringify(reason)}, type: ${JSON.stringify(type)}`
	);
	const thought = new Thought({
		type: type,
		category: category,
		reason: reason,
		//todo: change the random numbers to actual user from active directory or collections
	});

	thought.save((error, result) => {
		if (error) {
			return res
				.status(400)
				.json({caption: "An error occurred!", trace: error});
		} else {
			res.status(201).json({
				_id: result._id,
				reason: result.reason,
				category: result.category,
				datetime: result.datetime,
				user: result.user,
			});
		}
	});
});

router.get(`/count/all`, async (req, res) => {
	try {
		const {time = "alltime", and = "today"} = req.query;
		const allTimeDocuments = await Thought.aggregate(groupByType());
		const todayDocuments = await Thought.aggregate(
			groupByTypeBasedOnDates(new Date(), util.addDays(new Date(), 1))
		);

		return res.status(200).json({
			alltime: convertDocumentByType(allTimeDocuments),
			today: convertDocumentByType(todayDocuments),

			metadata: {time, and},
		});
	} catch (error) {
		return res.status(400).json({caption: "An error occurred!", trace: error});
	}
});

const dbSearchParameters = (next_page) => {
	if (next_page) {
		return {
			_id: {$gt: mongoose.Types.ObjectId(next_page)},
		};
	} else {
		return {};
	}
};
module.exports = router;
