import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, handleFormSubmit) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._handleSubmit = (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    };
    this._submitButton = this._popupElement.querySelector('.popup__submit-button')
    this._defaultSubmitButton = this._submitButton.textContent
  }

  //Ожидание загрузки
  renderLoading(isLoading, message = 'Сохранение...') {
    if (isLoading) {
      this._submitButton.textContent = message
    } else {
      this._submitButton.textContent = this._defaultSubmitButton
    }
  }

  //Собираем данные
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) =>
        this._formValues[input.name] = input.value
    );
    return this._formValues;
  }
  //Слушатель
  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', this._handleSubmit)
  }
  //Закрыть
  close() {
    this._formElement.reset();
    super.close();
  }
}
