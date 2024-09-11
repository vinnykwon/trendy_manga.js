class TrendyManga {
	constructor() {
		this.api = "https://api.trendymanga.com"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-N9860 Build/PQ3A.190705.08211809; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/124.0.6367.82 Mobile Safari/537.36",
			"Content-Type": "application/json"
		}
	}

	async register(username, email, password) {
		const response = await fetch(
			`${this.api}/auth/register`, {
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password,
					username: username
				}),
				headers: this.headers
			})
		return response.json()
	}

	async login(username, password) {
		const response = await fetch(
			`${this.api}/auth/login`, {
				method: "POST",
				body: JSON.stringify({
					username: username,
					password: password
				}),
				headers: this.headers
			})
		const data = await response.json()
		this.accessToken = data.access_token
		this.headers["Authorization"] = this.accessToken
		return data
	}

	async getAccountInfo() {
		const response = await fetch(
			`${this.api}/auth/profile`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTitle(titleName) {
		const response = await fetch(
			`${this.api}/titles/${titleName}/basic`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTitleChapters(titleName, offset = 0, limit = 100) {
		const response = await fetch(
			`${this.api}/titles/${titleName}/chapters?offset=${offset}&limit=${limit}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async commentTitle(titleId, text) {
		const response = await fetch(
			`${this.api}/comments`, {
				method: "POST",
				body: JSON.stringify({
					titleId: titleId,
					text: text
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getTitleComments(titleId) {
		const response = await fetch(
			`${this.api}/comments/title/${titleId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async upVoteComment(commentId) {
		const response = await fetch(
			`${this.api}/comments/${commentId}/upvote`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async downVoteComment(commentId) {
		const response = await fetch(
			`${this.api}/comments/${commentId}/downvote`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async deleteComment(commentId) {
		const response = await fetch(
			`${this.api}/comments/${commentId}`, {
				method: "DELETE",
				headers: this.headers
			})
		return response.json()
	}

	async bookMarkTitle(titleId, type) {
		const response = await fetch(
			`${this.api}/titles/${titleId}/bookmark`, {
				method: "POST",
				body: JSON.stringify({
					type: type
				}),
				headers: this.headers
			})
		return response.json()
	}

	async voteTitle(titleId, value) {
		const response = await fetch(
			`${this.api}/titles/${titleId}/vote?value=${value}`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async likeTitle(titleId) {
		const response = await fetch(
			`${this.api}/titles/${titleId}/like`, {
				method: "POST",
				headers: this.headers
			})
		return response.json()
	}

	async unlikeTitle(titleId) {
		const response = await fetch(
			`${this.api}/titles/${titleId}/like`, {
				method: "DELETE",
				headers: this.headers
			})
		return response.json()
	}

	async getBlogs(limit = 10) {
		const response = await fetch(
			`${this.api}/blog?limit=${limit}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getTitles(page = 1, limit = 10, sortBy = "CREATED_AT") {
		const response = await fetch(
			`${this.api}/titles/search`, {
				method: "POST",
				body: JSON.stringify({
					page: page,
					limit: limit,
					sortBy: sortBy,
					direction: "desc",
					author: "",
					artist: "",
					name: "",
					publishers: []
				}),
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {TrendyManga}
