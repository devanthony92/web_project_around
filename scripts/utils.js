import { formAdd, formEdit } from "./index.js";
import Card from "./card.js";

const button_close = document.querySelector("#formEditButtonClose");
const button_closeAdd = document.querySelector("#addPlaceButtonClose");
const button_edit = document.querySelector("#mainProfileEdit");
const button_add = document.querySelector("#addButton");
const button_save = document.querySelector("#formEditButtonSave");
const button_save_place = document.querySelector("#ButtonSavePlace");
const dialog = document.querySelector("#formEditPopup");
const addPLace = document.querySelector("#popupAddPlace");
const input_title = document.querySelector("#inputAddTitle");
const input_link = document.querySelector("#inputAddlink");
const name_profile = document.querySelector("#profileName");
const about__profile = document.querySelector("#profileProfesion");
const input_name = document.querySelector("#inputEditName");
const input_about = document.querySelector("#inputEditAbout");
const showPopupImg = document.querySelector("#containerPopupImage");
const elementSection = document.querySelector("#elementsSection");

input_name.value = name_profile.textContent.trim();
input_about.value = about__profile.textContent.trim();

function openDialogEdit() {
  dialog.classList.add("popup__opened");
}
function openDialogAdd() {
  addPLace.classList.add("popup__opened");
}
function closeAdd() {
  input_title.value = "";
  input_link.value = "";
  formAdd.resetForm();
  addPLace.classList.remove("popup__opened");
}
function closeEdit() {
  formEdit.resetForm();
  input_name.value = name_profile.textContent.trim();
  input_about.value = about__profile.textContent.trim();
  dialog.classList.remove("popup__opened");
}
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
function enableCloseFunction() {
  const popUpList = Array.from(document.querySelectorAll(".popup"));

  popUpList.forEach((popUpElement) => {
    const over = popUpElement.querySelector(".dialog");

    popUpElement.addEventListener("click", (pointer) => {
      if (!over.contains(pointer.target)) {
        closeAdd();
        closeEdit();
        showPopupImg.classList.remove("popup__opened");
      }
    });
  });
}

button_edit.addEventListener("click", openDialogEdit);
button_add.addEventListener("click", openDialogAdd);
button_close.addEventListener("click", closeEdit);
button_closeAdd.addEventListener("click", closeAdd);
button_save.addEventListener("click", handleProfileFormSubmit);
button_save_place.addEventListener("click", handleAddFormSubmit);
document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    closeAdd();
    closeEdit();
    showPopupImg.classList.remove("popup__opened");
  }
});
enableCloseFunction();
export function openImage(name, link) {
  const popup = document.querySelector("#containerPopupImage");
  const popupImage = document.querySelector("#popupImage");
  const imageTemplate = document
    .querySelector("#templateImage")
    .content.cloneNode(true);

  const fullImg = imageTemplate.querySelector(".dialog__image_full");
  const title = imageTemplate.querySelector(".dialog__nameImage");
  const btnClose = imageTemplate.querySelector(".dialog__cerrar-img");

  fullImg.src = link;
  fullImg.alt = name;
  title.textContent = name;

  popupImage.innerHTML = "";
  popupImage.appendChild(imageTemplate);
  popup.classList.add("popup__opened");

  btnClose.addEventListener("click", () => {
    popup.classList.remove("popup__opened");
  });
}
