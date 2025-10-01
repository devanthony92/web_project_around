//import { config } from "./index.js";

class FormValidator {
  constructor(config, formSelector) {
    this._config = config;
    this._form = document.querySelector(formSelector);
    this._inputList = this._form.querySelectorAll(this._config.inputSelector);
    this._buttonSave = this._form.querySelector(
      this._config.submitButtonSelector
    );
  }
  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        if (!input.validity.valid) {
          this._showInputError(input, input.validationMessage);
          this._disabledButtonSave();
        } else {
          this._hideInputError(input);
        }
        if (this._form.checkValidity()) {
          this._enabledButtonSave();
        }
      });
    });
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass); //linea roja debajo
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass); //mensaje de error visible
  }
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "Error";
  }
  _enabledButtonSave() {
    this._buttonSave.classList.remove(this._config.inactiveButtonClass);
    this._buttonSave.disabled = false;
  }
  _disabledButtonSave() {
    this._buttonSave.classList.add(this._config.inactiveButtonClass);
    this._buttonSave.disabled = true;
  }
  _resetForm() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
      this._disabledButtonSave();
    });
  }
}

export { FormValidator };
