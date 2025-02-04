let button_edit = document.querySelector(".profile__edit");
let button_add = document.querySelector(".profile__add_button");
let button_close = document.querySelector(".popup__cerrar");
let button_save = document.querySelector(".popup__button_save");
let like = document.querySelector(".card__like");
let popup = document.querySelector(".popup");
let name_profile = document.querySelector(".profile__name");
let about__profile = document.querySelector(".profile__profesion");
let input_name = document.querySelector(".popup__input_name");
let input_about = document.querySelector(".popup__input_about");
let popup__form = document.querySelector(".popup__form");

input_name.placeholder = name_profile.textContent;
input_about.placeholder = about__profile.textContent;
console.log(`${name_profile.textContent}`);
function open_popup() {
  popup.classList.add("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  if (input_name.value != "") {
    name_profile.textContent = input_name.value;
  }
  if (input_about.value != "") {
    about__profile.textContent = input_about.value;
  }
  popup.classList.remove("popup_opened");
}

button_edit.addEventListener("click", open_popup);

button_add.addEventListener("click", function () {
  console.log("add button");
});
button_close.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});
button_save.addEventListener("click", handleProfileFormSubmit);
