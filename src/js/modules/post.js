function POST () {
	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		if (screenInput.value.trim() !== "") {
			await fetch (url, {
				method: "POST",
				headers: {
					"content-type" : "application/json"
				},
				body: JSON.stringify({title: screenInput.value.trim(), isComplete: false})
			});
		}

		e.target.reset();
	});
}

module.exports = POST;