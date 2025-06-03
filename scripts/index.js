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
let elementSection = document.querySelector("#elementsSection");

input_name.placeholder = name_profile.textContent;
input_about.placeholder = about__profile.textContent;

function open_dialog() {
  dialog.classList.add("dialog__opened");
}
function closeAddFuntion() {
  addPLace.classList.remove("dialog__opened");
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
function createCard() {
  const divCard = document.createElement("div");
  const imgCard = document.createElement("img");
  const imgLike = document.createElement("img");
  const divInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const infoName = document.createTextNode("Hola, mundo");
  const buttonLike = document.createElement("button");

  divCard.classList.add("card");
  imgCard.classList.add("card__img");
  imgLike.classList.add("card__like-logo");
  divInfo.classList.add("card__container");
  cardName.classList.add("card__name");
  buttonLike.classList.add("card__like");
  imgCard.src = "images/place1.jpg";
  imgLike.src = "images/like.svg";
  imgLike.alt = "like logo";

  buttonLike.appendChild(imgLike);
  cardName.appendChild(infoName);
  divInfo.appendChild(cardName);
  divInfo.appendChild(buttonLike);
  divCard.appendChild(imgCard);
  divCard.appendChild(divInfo);
  elementSection.prepend(divCard);
  closeAddFuntion();
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
button_closeAdd.addEventListener("click", closeAddFuntion);
button_save_place.addEventListener("click", createCard);
