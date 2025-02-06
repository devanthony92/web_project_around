let button_edit = document.querySelector(".main__profile_edit");
let button_add = document.querySelector(".main__profile_add_button");
let button_close = document.querySelector(".dialog__cerrar");
let button_save = document.querySelector(".dialog__button_save");
let like = document.querySelector(".card__like");
let dialog = document.querySelector(".dialog");
let name_profile = document.querySelector(".main__profile_name");
let about__profile = document.querySelector(".main__profile_profesion");
let input_name = document.querySelector(".dialog__input_name");
let input_about = document.querySelector(".dialog__input_about");
let dialog__form = document.querySelector(".dialog__form");

input_name.placeholder = name_profile.textContent;
input_about.placeholder = about__profile.textContent;

function open_dialog() {
  dialog.classList.add("dialog_opened");
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
  dialog.classList.remove("dialog_opened");
}
function checkInputFilled() {
  if (input_name.value.trim() != "" || input_about.value.trim() != "") {
    button_save.classList.add("dialog__button_save_filled");
  } else {
    button_save.classList.remove("dialog__button_save_filled");
  }
}

button_edit.addEventListener("click", open_dialog);
input_name.addEventListener("input", checkInputFilled);
input_about.addEventListener("input", checkInputFilled);
button_close.addEventListener("click", function () {
  input_name.value = "";
  input_about.value = "";
  button_save.classList.remove("dialog__button_save_filled");
  dialog.classList.remove("dialog_opened");
});
button_save.addEventListener("click", handleProfileFormSubmit);
button_add.addEventListener("click", function () {
  console.log("add button");
});
