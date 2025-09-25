function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".dialog__form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".dialog__input"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
    });
  });
}

function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    disabledButton(formElement);
  } else {
    hideInputError(formElement, inputElement);
  }
  if (formElement.checkValidity()) {
    enableButton(formElement);
  }
}

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
  errorElement.textContent = "Error";
}

enableValidation();
