import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  };

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (inputElement) =>
        (this._formValues[inputElement.name] = inputElement.value)
    );

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", this._handleSubmit)
  }

  close() {
    this._formElement.removeEventListener("submit", this._handleSubmit)
    super.close();
  }
}