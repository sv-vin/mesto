import { popupElement } from "../utils/constants";

export default class Popup {
  constructor(popupElement) {
    this._popup = document.querySelector(popupElement);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  //Открыть
  open() {
    this._popup.classList.add('popup__opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  //Закрыть
  close() {
    this._popup.classList.remove('popup__opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  //Закрытие на esc
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
  //Слушатель
  setEventListeners() {
    this._popup
      .addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup__opened') || evt.target.classList.contains('popup__close')) {
          this.close()
        }
      });
  }

}