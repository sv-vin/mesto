export default class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._inputList = Array.from(
            this._formElement.querySelectorAll(this._inputSelector)
        );
        this._buttonElement = this._formElement.querySelector(
            this._submitButtonSelector
        );

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
        // const buttonElement = this._formElement.querySelector(
        //     this._submitButtonSelector
        // );
        this._buttonElement.disabled = isDisabled;
    }

    _toggleButtonState(inputList) {
        this._setInitialButtonState(this._findInvalidInput(inputList));
    }

    // очищаем импуты
    _clearInputValue(inputElement) {
        inputElement.value = '';
    }
    //  делаем кнопку неактивной
    _resetValidation() {
        this._setInitialButtonState(true);

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
            this._clearInputValue(inputElement)
        });

    }

    // ищем слушателей событий
    _setEventListeners() {
        // const inputList = Array.from(
        //     this._formElement.querySelectorAll(this._inputSelector)
        // );
        this._toggleButtonState(this._inputList);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList);
            });
        });
    }

    // функция валидации форм 
    _setDefaultErrorState() {
        // this._inputList = Array.from(
        //     this._formElement.querySelectorAll(this._inputSelector)
        // );
        this._inputList.forEach((inputElement) => {
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