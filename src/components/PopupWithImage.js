import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupPlaceImg = this._popup.querySelector('.popup-place__img');
    this._popupPlaceTitle = this._popup.querySelector('.popup-place__title');
  }

  //Открыть попап 

  open(name, link) {

    super.open();
    this._popupPlaceImg.src = link;
    this._popupPlaceImg.alt = name;
    this._popupPlaceTitle.textContent = name;
  }
}