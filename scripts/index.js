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
  hideInputError(form__addPLace, input_title);
  hideInputError(form__addPLace, input_link);
}
function closeEdit() {
  resetCloseEdit();
  button_save.classList.remove("dialog__button-save-filled");
  dialog.classList.remove("popup__opened");
}
function resetCloseEdit() {
  input_name.value = name_profile.textContent.trim();
  input_about.value = about__profile.textContent.trim();
  hideInputError(dialog__form, input_name);
  hideInputError(dialog__form, input_about);
}
function handleProfileFormSubmit() {
  if (input_name.value != "") {
    name_profile.textContent = input_name.value;
  }
  if (input_about.value != "") {
    about__profile.textContent = input_about.value;
  }
  dialog.classList.remove("popup__opened");
}
function checkInputFilled() {
  if (input_name.value.trim() != "" || input_about.value.trim() != "") {
    button_save.classList.add("dialog__button-save-filled");
  } else {
    button_save.classList.remove("dialog__button-save-filled");
  }
}
function createCard(cardTitle, cardLink) {
  const cloneCard = cardTemplate.content.cloneNode(true);

  const imgCard = cloneCard.querySelector(".card__img");
  const nameCard = cloneCard.querySelector(".card__name");

  imgCard.src = cardLink;

  nameCard.textContent = cardTitle;
  //  console.log(cardTitle);
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
    //    console.log(titleValue);
  }
  if (input_link.value.trim() != "") {
    linkValue = input_link.value;
    //    console.log(linkValue);
  }
  createCard(titleValue, linkValue);
  closeAddFuntion();
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
  //  console.log(popupImg.childNodes);
  btnClose.addEventListener("click", () => {
    showPopupImg.classList.remove("popup__opened");
  });
}
////////////////////////////////////////////////////////////////////////////////
//    VALIDATION    //
///////////////////////////////////////////////////////////////////////////////

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("dialog__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("dialog__input_error_active");
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("dialog__input_type_error");
  errorElement.classList.remove("dialog__input_error_active");
  errorElement.textContent = "";
}

function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".dialog__input"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".dialog__form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

//////////////////////////////////////////////////////////////////////////////////
button_edit.addEventListener("click", openDialogEdit);
input_name.addEventListener("input", checkInputFilled);
input_about.addEventListener("input", checkInputFilled);
button_close.addEventListener("click", closeEdit);
button_save.addEventListener("click", handleProfileFormSubmit);
button_add.addEventListener("click", openDialogAdd);
button_closeAdd.addEventListener("click", closeAddFuntion);
button_save_place.addEventListener("click", handleAddFormSubmit);

createInitialCards();
enableValidation();
