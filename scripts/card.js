export default class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick(this._name, this._link)
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
