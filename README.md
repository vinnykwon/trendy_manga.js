# trendy_manga.js
Web-API for [trendymanga.com](https://trendymanga.com/) an website to read manga in russian language

## Example
```JavaScript
async function main() {
	const { TrendyManga } = require("./trendy_manga.js")
	const trendyManga = new TrendyManga()
	await trendyManga.login("username", "password")
}

main()
```
