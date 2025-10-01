import { FormValidator } from "./FormValidator.js";

const config = {
  formSelector: ".dialog__form",
  inputSelector: ".dialog__input",
  submitButtonSelector: ".dialog__button_submit",
  inactiveButtonClass: "dialog__button_submit_disabled",
  inputErrorClass: "dialog__input_type_error",
  errorClass: "dialog__input_error_active",
};

const formEdit = new FormValidator(config, "#formEdit");
formEdit._setEventListeners();
const formAdd = new FormValidator(config, "#formAddPlace");
formAdd._setEventListeners();

const showPopupImg = document.querySelector("#containerPopupImage");
const popupImg = document.querySelector("#popupImage");

const cardTemplate = document.querySelector("#templateCard");
const imageTemplate = document.querySelector("#templateImage");
const elementSection = document.querySelector("#elementsSection");

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

createInitialCards();

export { config, formAdd, formEdit };
