import './index.css';

import {
  popupProfileEdit,
  popupCardAdd,
  imagePopup,
  popupFormElement,
  popupFormElementAdd,
  cardCase,
  cardTemplate,
  popupOpenButtonEditProfile,
  popupOpenButtonAddPhoto,
  profileData,
  popupProfileNameInput,
  popupProfileJobInput,
  validationConfig,
  initialCards
} from '../utils/constants.js'
import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js'
import Section from '../scripts/Section.js'
import PopupWithForm from '../scripts/PopupWithForm.js'
import PopupWithImage from '../scripts/PopupWithImage.js'
import UserInfo from '../scripts/UserInfo.js'

//Валидация
const validationFormProfile = new FormValidator(validationConfig, popupFormElement);
validationFormProfile.enableValidation();

const validationFormCard = new FormValidator(validationConfig, popupFormElementAdd);
validationFormCard.enableValidation();

const createCard = (item) => {
  const card = new Card(item, cardTemplate, handleCardClick);
  return card
}

// Рендеринг карточек начальный
const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    const сardElement = card.renderCard();
    cardsList.addItem(сardElement);
  }
}, cardCase);

cardsList.renderItems();

// Открытие окна с картинкой 
const openImageBigPopup = new PopupWithImage(imagePopup);

function handleCardClick(name, link) {
  openImageBigPopup.open(name, link);
};

//редактирование профиля
const userInfo = new UserInfo(profileData);

//Создать экземпляр класса PopupWithForm
const popupWithUserForm = new PopupWithForm(
  popupProfileEdit, {
  handleFormSubmit: (userData) => {
    userInfo.setUserInfo(userData);
    popupWithUserForm.close();
  }
});

//Открыть редактор профиля  клик
popupOpenButtonEditProfile.addEventListener('click', () => {
  validationFormProfile.resetValidation();
  popupProfileNameInput.value = userInfo.getUserInfo().name;
  popupProfileJobInput.value = userInfo.getUserInfo().job;
  popupWithUserForm.open();
});

//добавление карточки
const popupWithPhotoForm = new PopupWithForm(
  popupCardAdd, {
  handleFormSubmit: (cardItem) => {
    const card = createCard({ name: cardItem.form_mesto, link: cardItem.form_link });
    const сardElement = card.renderCard();
    cardsList.addItem(сardElement);
    popupWithPhotoForm.close();
  }
});

//Добавление фоток клик
popupOpenButtonAddPhoto.addEventListener('click', () => {
  validationFormCard.resetValidation();
  popupWithPhotoForm.open();
});