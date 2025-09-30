import { enableButton, disabledButton } from "./index.js";
class FormValidator {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
  }
  _setEventListeners(inputSelector) {
    const inputList = this.form.querySelectorAll(inputSelector);
    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        if (!input.validity.valid) {
          this._showInputError(input, input.validationMessage);
          disabledButton(this.form);
        } else {
          this._hideInputError(input);
        }
        if (this.form.checkValidity()) {
          enableButton(this.form);
        }
      });
    });
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("dialog__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("dialog__input_error_active");
  }
  _hideInputError(inputElement) {
    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("dialog__input_type_error");
    errorElement.classList.remove("dialog__input_error_active");
    errorElement.textContent = "Error";
  }
}

export { FormValidator };
