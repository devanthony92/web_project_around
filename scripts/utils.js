import Card from "./Card.js";
import UserInfo from "./userInfo.js";
import Section from "./Section.js";
import { PopupWithForm, PopupWithImage } from "./Popup.js";
import { editPopup, addPopup } from "./constanst.js";

const buttonAdd = document.querySelector("#addButton");
const buttonEdit = document.querySelector("#editButton");

function handleEditFormSubmit(datos) {
  const userInfo = new UserInfo({
    name: datos[0].value,
    about: datos[1].value,
  });
  userInfo.setUserInfo();
}
function handleAddFormSubmit(datos) {
  const card = new Card(
    { name: datos[0].value, link: datos[1].value },
    "#templateCard",
    openImage
  );
  const addNewCard = new Section(
    { items: card.generateCard() },
    "#elementsSection"
  );
  addNewCard.addItem();
}

buttonAdd.addEventListener("click", () => {
  const editUser = new PopupWithForm(addPopup, handleAddFormSubmit);
  editUser.openPopup();
});
buttonEdit.addEventListener("click", () => {
  const editUser = new PopupWithForm(editPopup, handleEditFormSubmit);
  editUser.openPopup();
});
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
