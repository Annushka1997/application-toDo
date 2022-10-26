const UI = {
	title: document.createElement("h1"),
	subTitle: document.createElement("p"),
	form: document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),

	elementOptions() {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Asyn Application";

		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.textContent = "ADD";
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";
	},

	appendElements() {
		root.append(this.title, this.subTitle, this.form, this.listsBlock);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
	},

	toHTML(id, value, state = false) {
		this.listsBlock.innerHTML += `
			<div class="listsBlockItem">
				<div class="listsBlockItemContent">
					<input type="checkbox" data-done class="check">
					<span>${id}</span>
					<input type="text" value="${value}" ${state ? "" : "readonly"}>
				</div>
				<div class="buttons">
					<button class="removeBtn">Remove</button>
					<button class="editBtn">Edit</button>
					<button class="saveBtn">Save</button>
				</div>
			</div>
		`;
	},

	start() {
		this.elementOptions();
		this.appendElements();
	}
};

module.exports = UI;