export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  //Открыть
  open() {
    this._popupElement.classList.add('popup__opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  //Закрыть
  close() {
    this._popupElement.classList.remove('popup__opened');
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
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__opened') || evt.target.classList.contains('popup__close')) {
        this.close()
      }
    });
  }

}

