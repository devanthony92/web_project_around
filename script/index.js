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

function open_popup() {
  popup.classList.add("popup_opened");
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  if (input_name.value != "") {
    name_profile.textContent = input_name.value;
    console.log("prueba");
  }
  if (input_about.value != "") {
    about__profile.textContent = input_about.value;
  }
  popup.classList.remove("popup_opened");
}
function checkInputFilled() {
  if (input_name.value.trim() != "" || input_about.value.trim() != "") {
    button_save.classList.add("popup__button_save_filled");
  } else {
    button_save.classList.remove("popup__button_save_filled");
  }
}

button_edit.addEventListener("click", open_popup);
input_name.addEventListener("input", checkInputFilled);
input_about.addEventListener("input", checkInputFilled);
button_close.addEventListener("click", function () {
  input_name.value = "";
  input_about.value = "";
  button_save.classList.remove("popup__button_save_filled");
  popup.classList.remove("popup_opened");
});
button_save.addEventListener("click", handleProfileFormSubmit);
button_add.addEventListener("click", function () {
  console.log("add button");
});
