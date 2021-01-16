/** @format */

export class ThoughtsApiService {
	public async save(item) {
		const data = await fetch(`http://localhost:5000/thoughts/new`, {
			method: "post",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": "true",
			},
			body: JSON.stringify(item),
		})
			.then((res) => res.json())
			.catch((error) => {
				throw error;
			});
		console.log(`${JSON.stringify(data)}`);
		//fetch({method: 'POST', url: "http://localhost:5000/thoughts/new"})
		return data;
	}

	public async getDashboardItemsCount() {
		const data = await fetch(`http://localhost:5000/thoughts/count/all`, {
			method: "get",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.catch((error) => {
				throw error;
			});
		console.log(`${JSON.stringify(data)}`);
		return data;
	}

	public async getAllMoods() {
		return await fetch(`http://localhost:5000/thoughts/all`, {
			method: "get",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.catch((error) => {
				throw error;
			});
	}
}
