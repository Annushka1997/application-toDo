function isDone (checkbox,content) {
	checkbox.forEach((check, index) => {
		check.addEventListener("click", async (e) => {
			e.preventDefault();
			const fakeID = parseInt(content[index].children[1].textContent);
			const input = content[index].children[2];
			if (check.checked) {
				input.style.color = "red";
				await fetch(`${url}/${fakeID}`, {
					method: "PUT",
					headers: {
						"content-type" : "application/json"
					},
					body: JSON.stringify({title: input.value.trim(), isComplete: true})
				});
			} else {
				input.style.color = "#000";
				await fetch(`${url}/${fakeID}`, {
					method: "PUT",
					headers: {
						"content-type" : "application/json"
					},
					body: JSON.stringify({title: input.value.trim(), isComplete: false})
				});
			}
		});
	});
}

module.exports = isDone;