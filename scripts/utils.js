import Card from "./card.js";
import { PopupWithForm, PopupWithImage } from "./Popup.js";
import { editSelector } from "./constanst.js";

const button_save = document.querySelector("#formEditButtonSave");
const button_save_place = document.querySelector("#ButtonSavePlace");
const dialog = document.querySelector("#formEditPopup");
const input_title = document.querySelector("#inputAddTitle");
const input_link = document.querySelector("#inputAddlink");
const name_profile = document.querySelector("#profileName");
const about__profile = document.querySelector("#profileProfesion");
const input_name = document.querySelector("#inputEditName");
const input_about = document.querySelector("#inputEditAbout");
const elementSection = document.querySelector("#elementsSection");

const buttonAdd = document.querySelector("#addButton");
const buttonEdit = document.querySelector("#editButton");
input_name.value = name_profile.textContent.trim();
input_about.value = about__profile.textContent.trim();

function handleProfileFormSubmit() {
  if (input_name.value != "") {
    name_profile.textContent = input_name.value;
  }
  if (input_about.value != "") {
    about__profile.textContent = input_about.value;
  }
  dialog.classList.remove("popup__opened");
  button_save.disabled = true;
}
function handleAddFormSubmit() {
  let titleValue = "";
  let linkValue = "";
  if (input_title.value.trim() != "") {
    titleValue = input_title.value;
  }
  if (input_link.value.trim() != "") {
    linkValue = input_link.value;
  }
  const card = new Card(titleValue, linkValue, "#templateCard", openImage);
  elementSection.prepend(card.generateCard());
  closeAdd();
  button_save_place.disabled = true;
}

buttonAdd.addEventListener("click", () => {
  console.log("boton add");
});
buttonEdit.addEventListener("click", () => {
  const editUser = new PopupWithForm(editSelector);
});
button_save.addEventListener("click", handleProfileFormSubmit);
button_save_place.addEventListener("click", handleAddFormSubmit);

export function openImage(name, link) {
  const configPopupImage = {
    container: "#containerPopupImage",
    popupImg: "#popupImage",
    templateImg: "#templateImage",
    selectorImg: ".dialog__image_full",
    titleImg: ".dialog__nameImage",
    btnClose: ".dialog__cerrar",
  };
  const img = new PopupWithImage(name, link, configPopupImage);
  img._openPopup();
}
