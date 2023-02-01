"use strict";

const input = document.querySelector("#input-todo");
const categoryContainer = document.querySelector("#category-container");
const list = document.querySelector("#list");
//récupère TOUT les emojis
const categories = document.querySelectorAll(".category");

input.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		//console.log("key !!");
		addToDo();
		input.value = ""; //remet rien dans la boite
		input.blur(); //enleve le focus sur un élément/ sélection
	}
});

//ajoute un tâche dans notre todo
const addToDo = () => {
	// Quelle catégorie est séléctionnée?
	const currentCategory = categoryContainer.querySelector(
		"[data-selected='true']"
	).dataset.category;

	const html = `<li data-category="${currentCategory}" data-done="true">
          ${input.value}
          <div class="button-done">❌</div>`;
	list.insertAdjacentHTML("afterbegin", html);
};

list.addEventListener("click", (e) => {
	//enleve une tâche de la liste
	if (e.target.classList.contains("button-done")) {
		e.target.parentElement.remove();
	} else if (e.target.dataset.done === "false") {
		//permet de séléctionner les tâches
		e.target.dataset.done = "true";
	} else if (e.target.dataset.done === "true") {
		e.target.dataset.done = "false";
	}
});

//sélectionner un seul emoji
categoryContainer.addEventListener("click", (e) => {
	if (e.target.classList.contains("category")) {
		categories.forEach((el) => {
			if (el !== e.target) {
				el.dataset.selected = "false";
			} else {
				el.dataset.selected = "true";
			}
		});
	}
});
