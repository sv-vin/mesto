export class Card {

  constructor(name, link, cardSelector, handleCardKlick) {
    this._name = name
    this._link = link
    this._cardSelector = cardSelector
    this._handleCardKlick = handleCardKlick
  }

  _getCard() {
    this._cardTemplate = document.querySelector(this._cardSelector).content;
    return this._cardTemplate.querySelector('.element').cloneNode(true);

  }

  _setEventListeners() {
    this._cardText = this._element.querySelector('.element__title');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardDeleteButton = this._element.querySelector('.element__button-delete');
    this._cardLikeButton = this._element.querySelector('.element__button-like');
    this._cardText.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    // лайкаем карточки
    this._cardLikeButton.addEventListener('click', () => {
      this._cardLikeButton.classList.toggle('element__button-like_active');
    });

    // // удаляем карточки
    this._cardDeleteButton.addEventListener('click', function (evt) {
      const evtTarget = evt.target
      evtTarget.closest('.element').remove();

    });

    // Открытие картинок
    this._cardImage.addEventListener('click', () => {
      this._handleCardKlick(this._name, this._link)
    });

  }

  generateCard() {
    // Запишем разметку в приватное поле _element. 
    this._element = this._getCard();
    this._element.querySelector('.element__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.element__title').textContent = this._title;

    this._setEventListeners();

    return this._element;
  }

}