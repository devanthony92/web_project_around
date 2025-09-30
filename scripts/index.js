import { FormValidator } from "./FormValidator.js";

const formEdit = new FormValidator("#formEdit");
formEdit._setEventListeners(".dialog__input");
const formAdd = new FormValidator("#formAddPlace");
formAdd._setEventListeners("#formAddPlace");

const button_edit = document.querySelector("#mainProfileEdit");
const button_add = document.querySelector("#addButton");
const button_close = document.querySelector("#formEditButtonClose");
const button_closeAdd = document.querySelector("#addPlaceButtonClose");
const button_save = document.querySelector("#formEditButtonSave");
const button_save_place = document.querySelector("#ButtonSavePlace");
const dialog = document.querySelector("#formEditPopup");
const addPLace = document.querySelector("#popupAddPlace");
const showPopupImg = document.querySelector("#containerPopupImage");
const popupImg = document.querySelector("#popupImage");
const name_profile = document.querySelector("#profileName");
const about__profile = document.querySelector("#profileProfesion");
const input_name = document.querySelector("#inputEditName");
const input_about = document.querySelector("#inputEditAbout");
const dialog__form = document.querySelector("#formEdit");
const form__addPLace = document.querySelector("#formAddPlace");
const input_title = document.querySelector("#inputAddTitle");
const input_link = document.querySelector("#inputAddlink");
const cardTemplate = document.querySelector("#templateCard");
const imageTemplate = document.querySelector("#templateImage");
const elementSection = document.querySelector("#elementsSection");

input_name.value = name_profile.textContent.trim();
input_about.value = about__profile.textContent.trim();

function createInitialCards() {
  const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "images/place1.jpg",
    },
    {
      name: "Lago Louise",
      link: "images/place2.jpg",
    },
    {
      name: "Montañas Calvas",
      link: "images/place3.jpg",
    },
    {
      name: "Latemar",
      link: "images/place4.jpg",
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "images/place5.jpg",
    },
    {
      name: "Lago di Braies",
      link: "images/place6.jpg",
    },
  ];
  initialCards.forEach((element) => {
    createCard(element.name, element.link);
  });
}
function openDialogEdit() {
  dialog.classList.add("popup__opened");
}
function openDialogAdd() {
  addPLace.classList.add("popup__opened");
}
function closeAddFuntion() {
  resetCloseAdd();
  addPLace.classList.remove("popup__opened");
}
function resetCloseAdd() {
  input_title.value = "";
  input_link.value = "";
  formAdd._hideInputError(input_title);
  formAdd._hideInputError(input_link);
  button_save_place.classList.remove("dialog__button-save-filled");
  button_save_place.disabled = true;
}
function closeEdit() {
  resetCloseEdit();
  dialog.classList.remove("popup__opened");
}
function resetCloseEdit() {
  input_name.value = name_profile.textContent.trim();
  input_about.value = about__profile.textContent.trim();
  formEdit._hideInputError(input_name);
  formEdit._hideInputError(input_about);
  button_save.disabled = true;
}
function enableButton(formElement) {
  const save_options = formElement.querySelector(".dialog__button-save");
  save_options.classList.add("dialog__button-save-filled");
  save_options.disabled = false;
}
function disabledButton(formElement) {
  const save_options = formElement.querySelector(".dialog__button-save");
  save_options.classList.remove("dialog__button-save-filled");
  save_options.disabled = true;
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
function createCard(cardTitle, cardLink) {
  const cloneCard = cardTemplate.content.cloneNode(true);

  const imgCard = cloneCard.querySelector(".card__img");
  const nameCard = cloneCard.querySelector(".card__name");

  imgCard.src = cardLink;

  nameCard.textContent = cardTitle;
  imgCard.alt = "Fotografia de " + cardTitle + ", un hermoso lugar";
  elementSection.prepend(cloneCard);

  const like = document.querySelector(".card__like");
  like.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like_active");
  });

  const deleteListener = document.querySelector(".card__delete");
  deleteListener.addEventListener("click", (evt) => {
    evt.target.parentNode.remove();
  });

  imgCard.addEventListener("click", (evt) => {
    while (popupImg.firstChild) {
      popupImg.removeChild(popupImg.firstChild);
    }
    createImgPopup(evt.target.parentNode);
    showPopupImg.classList.add("popup__opened");
  });
}
function handleAddFormSubmit() {
  if (input_title.value.trim() != "") {
    titleValue = input_title.value;
  }
  if (input_link.value.trim() != "") {
    linkValue = input_link.value;
  }
  createCard(titleValue, linkValue);
  closeAddFuntion();
  button_save_place.disabled = true;
}
function createImgPopup(nodeImagePopup) {
  const cloneImage = imageTemplate.content.cloneNode(true);
  const imgFullScr = cloneImage.querySelector(".dialog__image_full");
  const nameImage = cloneImage.querySelector(".dialog__nameImage");
  const btnClose = cloneImage.querySelector(".dialog__cerrar-img");
  const Name = nodeImagePopup.querySelector(".card__name");
  const Link = nodeImagePopup.querySelector(".card__img");
  nameImage.textContent = Name.textContent;
  imgFullScr.src = Link.src;

  popupImg.appendChild(cloneImage);
  btnClose.addEventListener("click", () => {
    showPopupImg.classList.remove("popup__opened");
  });
}
function enableCloseFunction() {
  const popUpList = Array.from(document.querySelectorAll(".popup"));

  popUpList.forEach((popUpElement) => {
    const over = popUpElement.querySelector(".dialog");

    popUpElement.addEventListener("click", (pointer) => {
      if (!over.contains(pointer.target)) {
        closeAddFuntion();
        closeEdit();
        showPopupImg.classList.remove("popup__opened");
      }
    });
  });
}
button_edit.addEventListener("click", openDialogEdit);
button_close.addEventListener("click", closeEdit);
button_save.addEventListener("click", handleProfileFormSubmit);
button_add.addEventListener("click", openDialogAdd);
button_closeAdd.addEventListener("click", closeAddFuntion);
button_save_place.addEventListener("click", handleAddFormSubmit);
document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    closeAddFuntion();
    closeEdit();
    showPopupImg.classList.remove("popup__opened");
  }
});
createInitialCards();

enableCloseFunction();

export { disabledButton, enableButton };
