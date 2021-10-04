import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popup, submit) {
    super(popup)
    this._submit = submit
  }
  //сабмит
  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener('submit', (event) => {
      event.preventDefault()
      this._submit(event, this._cardElement)
    })
  }

  open(cardElement) {
    this._cardElement = cardElement
    super.open()
  }
}
