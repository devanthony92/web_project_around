import {
  openPopupClass,
  buttonCloseSelector,
  overPopupSelector,
} from "./constanst.js";

export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._buttonClose = this._popupElement.querySelector(buttonCloseSelector);
    this._overPopup = this._popupElement.querySelector(overPopupSelector);
  }
  openPopup() {
    this.setEventListeners();
    this._popupElement.classList.add(openPopupClass);
  }
  closePopup() {
    this._popupElement.classList.remove(openPopupClass);
  }
  _handleEscClose(pointer) {
    if (!this._overPopup.contains(pointer.target)) {
      this.closePopup();
    }
  }
  setEventListeners() {
    this._popupElement.addEventListener("click", (pointer) => {
      this._handleEscClose(pointer);
    });
    this._buttonClose.addEventListener("click", () => {
      this.closePopup();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key == "Escape") {
        this.closePopup();
      }
    });
  }
}

export class PopupWithImage extends Popup {
  constructor(name, link, config) {
    super(config.container);
    this._name = name;
    this._link = link;
    this._config = config;
  }
  _getTemplate() {
    this._element = document
      .querySelector(this._config.templateImg)
      .content.querySelector(this._config.popupImg)
      .cloneNode(true);
    this._generateImage();
  }
  _addFullImage() {
    this._popupElement.appendChild(this._element);
  }
  _generateImage() {
    this._popupImage = this._element.querySelector(this._config.popupImg);
    this._buttonClose = this._element.querySelector(this._config.btnClose);
    this._titleImg = this._element.querySelector(this._config.titleImg);
    this._imageFull = this._element.querySelector(this._config.selectorImg);
    this._imageFull.src = this._link;
    this._imageFull.alt = this._name;
    this._titleImg.textContent = this._name;
    this._clearImg();
    this._addFullImage();
  }
  _clearImg() {
    this._popupElement.innerHTML = "";
  }
  _openPopup() {
    this._getTemplate();
    super.openPopup();
  }
  _closePopup() {
    super.closePopup();
  }
  _handleEscClose(pointer) {
    if (!this._element.contains(pointer.target)) {
      this.closePopup();
    }
  }
}

export class PopupWithForm extends Popup {
  constructor(popupSelector, functionSubmit) {
    super(popupSelector);
    this._functionSubmit = functionSubmit;
    this._buttonSave = this._popupElement.querySelector(
      ".dialog__button-submit"
    );
    this._getInputValues();
  }

  _getInputValues() {
    this._inputValues = Array.from(
      this._popupElement.querySelectorAll(".dialog__input")
    );
    this._inputValues.forEach((input) => {
      console.log(input.value);
    });
  }
  openPopup() {
    super.openPopup();
  }
  closePopup() {
    super.closePopup;
  }
  setEventListeners() {
    this._buttonClose.addEventListener("click", () => {
      this.closePopup();
    });
    this._buttonSave;
  }
}
