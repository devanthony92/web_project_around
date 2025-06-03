let button_edit = document.querySelector("#mainProfileEdit");
let button_add = document.querySelector("#addButton");
let button_close = document.querySelector("#formEditButtonClose");
let button_closeAdd = document.querySelector("#addPlaceButtonClose");
let button_save = document.querySelector("#formEditButtonSave");
let button_save_place = document.querySelector("#ButtonSavePlace");
let like = document.querySelector(".card__like");
let dialog = document.querySelector("#formEditPopup");
let addPLace = document.querySelector("#popupAddPlace");
let name_profile = document.querySelector("#profileName");
let about__profile = document.querySelector("#profileProfesion");
let input_name = document.querySelector("#inputEditName");
let input_about = document.querySelector("#inputEditAbout");
let dialog__form = document.querySelector("#formEdit");
let form__addPLace = document.querySelector("#formAddPlace");
let input_title = document.querySelector("#inputAddTitle");
let input_link = document.querySelector("#inputAddlink");

input_name.placeholder = name_profile.textContent;
input_about.placeholder = about__profile.textContent;

function open_dialog() {
  dialog.classList.add("dialog__opened");
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  if (input_name.value != "") {
    name_profile.textContent = input_name.value;
  }
  if (input_about.value != "") {
    about__profile.textContent = input_about.value;
  }
  dialog.classList.remove("dialog__opened");
}
function checkInputFilled() {
  if (input_name.value.trim() != "" || input_about.value.trim() != "") {
    button_save.classList.add("dialog__button-save-filled");
  } else {
    button_save.classList.remove("dialog__button-save-filled");
  }
}

button_edit.addEventListener("click", open_dialog);
input_name.addEventListener("input", checkInputFilled);
input_about.addEventListener("input", checkInputFilled);
button_close.addEventListener("click", function () {
  input_name.value = "";
  input_about.value = "";
  button_save.classList.remove("dialog__button-save-filled");
  dialog.classList.remove("dialog__opened");
});
button_save.addEventListener("click", handleProfileFormSubmit);
button_add.addEventListener("click", function () {
  addPLace.classList.add("dialog__opened");
});
button_closeAdd.addEventListener("click", function () {
  addPLace.classList.remove("dialog__opened");
});
