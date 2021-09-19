import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
  }
  //Открыть попап
  open(name, link) {
    super.open();
    const popupPlaceImg = this._popupElement.querySelector('.popup-place__img');
    const popupPlaceTitle = this._popupElement.querySelector('.popup-place__title');
    popupPlaceImg.src = link;
    popupPlaceImg.alt = name;
    popupPlaceTitle.textContent = name;
  }
}
