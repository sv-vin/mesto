import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupElement, submit) {
    super(popupElement)
    this._submit = submit
  }
//сабмит
  setEventListeners() {
    super.setEventListeners()
    this._popupElement.addEventListener('submit', (event) => {
      event.preventDefault()
      this._submit(event, this._cardElement)
    })
  }

  open(cardElement) {
    this._cardElement = cardElement
    super.open()
  }
}
