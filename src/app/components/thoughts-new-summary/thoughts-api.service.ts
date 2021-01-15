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
			.catch((error) => error);
		console.log(`${JSON.stringify(data)}`);
		//fetch({method: 'POST', url: "http://localhost:5000/thoughts/new"})
		return data;
	}
}
