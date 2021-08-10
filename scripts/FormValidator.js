export default class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;

    }

    //ищем элемент с текстом ошибки 
    _returnErrorElement(inputElement) {
        return this._formElement.querySelector(`#${inputElement.id}-error`);
    }

    // проверяем на валидность
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    // показать ошибку
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._returnErrorElement(inputElement);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage;
    }

    // скрыть ошибку
    _hideInputError(inputElement) {
        const errorElement = this._returnErrorElement(inputElement);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    // выводим текст ошибки
    _findInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    // делаем кнопку не активной
    _setInitialButtonState(isDisabled) {
        const buttonElement = this._formElement.querySelector(
            this._submitButtonSelector
        );
        buttonElement.disabled = isDisabled;
    }

    _toggleButtonState(inputList) {
        this._setInitialButtonState(this._findInvalidInput(inputList));
    }

    // ищем слушателей событий
    _setEventListeners() {
        const inputList = Array.from(
            this._formElement.querySelectorAll(this._inputSelector)
        );
        this._toggleButtonState(inputList);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList);
            });
        });
    }

    // функция валидации форм 
    _setDefaultErrorState() {
        const inputList = Array.from(
            this._formElement.querySelectorAll(this._inputSelector)
        );
        inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }

}