export default class Userinfo {
  constructor({ nameSelector, infoSelector, avatar }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatar);
  }
  //Собрать
  getUserInfo() {
    const userInfo = {
      nameSelector: this._name.textContent,
      infoSelector: this._job.textContent
    }

    return userInfo
  }
  //Править
  setUserInfo({ name, about, avatar }) {
    if (name) {
      this._name.textContent = name
    }
    if (about) {
      this._job.textContent = about
    }
    if (avatar) {
      this._avatar.src = avatar
    }
  }
}


