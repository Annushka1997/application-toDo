function DELETE (removeBtn) {
	removeBtn.forEach(btn => {
		btn.addEventListener("click", async () => {
			const fakeID = btn.parentElement.previousElementSibling.firstElementChild.textContent;
			btn.parentElement.parentElement.remove();

			await fetch(`${url}/${parseInt(fakeID)}`, {
				method: "DELETE"
			});
		});
	});
}

module.exports = DELETE;