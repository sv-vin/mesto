export default class Api {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }
  //Профиль
  getPersonalInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    }).then(this._checkAnswer)
  }
  //Карточки
  getCard() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    }).then(this._checkAnswer)
  }

  changeUserInfo({ name, about }) {
    console.log(name)
    console.log(about)
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    }).then(this._checkAnswer)
  }

  addNewCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(this._checkAnswer)
  }

  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkAnswer)
  }

  editAvatarUser(url) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url
      })
    }).then(this._checkAnswer)
  }

  awaylikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkAnswer)
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    }).then(this._checkAnswer)
  }

  _checkAnswer(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`)
    }
    return res.json()
  }

}