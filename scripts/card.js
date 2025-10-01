export default class Card {
  constructor(name, link, templateSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
  }

  // Método privado: clona el template
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  // Método privado: agrega los listeners
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeClick());
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteClick()
    );
    this._imageElement.addEventListener("click", () =>
      this._handleImageClick(this._name, this._link)
    );
  }

  // Métodos privados para los controladores
  _handleLikeClick() {
    this._likeButton.classList.toggle("card__like_active");
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  // _handleImageClick() {
  //   const popup = document.querySelector("#containerPopupImage");
  //   const popupContent = document.querySelector("#popupImage");
  //   const template = document
  //     .querySelector("#templateImage")
  //     .content.cloneNode(true);

  //   const imgFull = template.querySelector(".dialog__image_full");
  //   const nameImage = template.querySelector(".dialog__nameImage");
  //   const btnClose = template.querySelector(".dialog__cerrar-img");

  //   imgFull.src = this._link;
  //   imgFull.alt = this._name;
  //   nameImage.textContent = this._name;

  //   popupContent.innerHTML = "";
  //   popupContent.append(template);
  //   popup.classList.add("popup__opened");

  //   btnClose.addEventListener("click", () =>
  //     popup.classList.remove("popup__opened")
  //   );
  // }
  // Método público para generar la tarjeta
  generateCard() {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector(".card__img");
    this._nameElement = this._element.querySelector(".card__name");
    this._likeButton = this._element.querySelector(".card__like");
    this._deleteButton = this._element.querySelector(".card__delete");

    this._imageElement.src = this._link;
    this._imageElement.alt = `Fotografía de ${this._name}`;
    this._nameElement.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }
}
