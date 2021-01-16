/** @format */
require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`);
const mongoose = require(`mongoose`);
const app = express();
const thoughtsRoute = require(`./src/routes/thoughts.api`);
const SERVER_PORT = process.env.PORT || 5001;

app.disable("x-powered-by");

app.use(
	cors({
		origin: process.env.WHITELISTED_ORIGINS,
		optionsSuccessStatus: 200,
		credentials: true,
	})
);

app.use(express.json());
app.use(`/thoughts`, thoughtsRoute);
mongoose
	.connect(process.env.DB_MONGOOSE_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Connected to database`);
	})
	.catch((error) => {
		console.error(`Unable to connect to database! ${error}`);
	});
app.listen(SERVER_PORT, (error) => {
	if (error) {
		console.error(`Server couldn't be started due to ${error}`);
	} else {
		console.info(`Server has started at port: ${SERVER_PORT}`);
	}
});
