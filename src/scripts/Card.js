export default class Card {
  constructor({ item, handleCardClick, deleteCard, likeCard }, cardSelector, cardId, userId) {
    this._name = item.name;
    this._link = item.link;
    this._ownerId = item.owner._id;
    this._counterLike = item.likes;
    this._cardId = cardId;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
    this._likeCard = likeCard;
  }

  _getCard() {
    this._cardTemplate = document.querySelector(this._cardSelector).content;
    return this._cardTemplate.querySelector('.card').cloneNode(true);
  }

  _setEventListeners() {
    //Удалить
    this._trashButton.addEventListener('click', () => {
      this._deleteCard();
    });
    //Лайк
    this._strokeButton.addEventListener('click', () => {
      this._likeCard()
    });
    //Модальное окно
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

  }
  //Удалить ф-ция
//  _deleteImgClick() {
//    this._element.remove();
//   this._element = null;
//  }

  generateCard() {
    this._element = this._getCard();
    this._trashButton = this._element.querySelector('.card__delete-button');
    this._strokeButton = this._element.querySelector('.card__like');
    this._numberLikes = this._element.querySelector('.card__like-counter');
    this._cardImage = this._element.querySelector('.card__img');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;
    this._setEventListeners();
    if (this._ownerId !== this._userId) {
      this._trashButton.style.display = 'none'
    }

    this.renderLike()

    return this._element;
  }

  removeCard() {
    this._element.remove()
  }

  renderLike() {

    this._numberLikes.textContent = this._counterLike.length
    this.showLike(this._ownerId)
  }

  likedCard() {
    return this._counterLike.some(like => {
      return like._id === this._userId
    })
  }

  showLike() {
    if (this.likedCard(this._userId)) {
      this._strokeButton.classList.add('card__like_active')
    } else {
      this._strokeButton.classList.remove('card__like_active')
    }
  }

  setLike(list) {
    this._counterLike = list
  }

  getItemId() {
    return this._cardId
  }
}
