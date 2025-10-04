import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openImage } from "./utils.js";
import Section from "./Section.js";
import { formEditSelector, formAddSelector } from "./constanst.js";

// configuracion de clases para FormValidatator
const config = {
  formSelector: ".dialog__form",
  inputSelector: ".dialog__input",
  submitButtonSelector: ".dialog__button-submit",
  inactiveButtonClass: "dialog__button-submit_disabled",
  inputErrorClass: "dialog__input_type_error",
  errorClass: "dialog__input_error_active",
};
// Validación de formularios
const formEdit = new FormValidator(config, formEditSelector);
formEdit.enableValidation();
const formAdd = new FormValidator(config, formAddSelector);
formAdd.enableValidation();

// Creación de tarjetas iniciales
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
    const card = new Card(element, "#templateCard", openImage);
    const cardElement = card.generateCard();
    const addCard = new Section({ items: cardElement }, "#elementsSection");
    addCard.addItem();
  });
}

createInitialCards();

export { config };
