async function GET () {
	return await fetch(url)
	.then(data => data.json())
	.then(data => data.forEach(obj => {
		UI.toHTML(obj.id, obj.title, false);
	}))
	.then(() => {
		PUT(
			document.querySelectorAll(".editBtn"),
			document.querySelectorAll(".saveBtn"),
			document.querySelectorAll(".listsBlockItemContent")
		);
		DELETE(document.querySelectorAll(".removeBtn"));
		isDone(document.querySelectorAll("[data-done]"),
			   document.querySelectorAll(".listsBlockItemContent")
		);
	});
}

module.exports = GET;
