// Массив карточек
import hibini from '../images/hibini.jpg';
import kigi from '../images/kigi.jpg';
import petergof from '../images/petergof.jpg';
import shihani from '../images/shihani.jpg';
import chysovaia from '../images/chysovaia.jpg';
import kycherlinskie from '../images/kycherlinskie_ozera.jpg';

// Делаем выборку DOM элементов
// Popups
const popupProfileEdit = '.popup_type_edit'
const popupCardAdd = '.popup_type_add-card'
const imagePopup = '.popup_type_image'

// формы Popup
const popupFormElement = document.querySelector(popupProfileEdit).querySelector('.popup__form')
const popupFormElementAdd = document.querySelector(popupCardAdd).querySelector('.popup__form')

// Карточки
const cardCase = '.elements';
const cardTemplate = '.template';

// Кнопки редактирование и добавление
const profileElement = document.querySelector('.profile')
const popupOpenButtonEditProfile = profileElement.querySelector('.profile__edit-button')
const popupOpenButtonAddPhoto = profileElement.querySelector('.profile__add-button')

// Данные профиля
const profileData = {
    nameSelector: '.profile__title',
    jobSelector: '.profile__text'
};

const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_visible',
};

// инпуты редактирования профиля
const popupProfileNameInput = document.querySelector(popupProfileEdit).querySelector('.popup__input_type_name')
const popupProfileJobInput = document.querySelector(popupProfileEdit).querySelector('.popup__input_type_job')

const newMestoInput = document.querySelector(popupCardAdd).querySelector('.popup__input_type_name')
const newLinkInput = document.querySelector(popupCardAdd).querySelector('.popup__input_type_link')

const initialCards = [
    {
        name: 'Хибины, Мурманская область',
        link: hibini
    },
    {
        name: 'Кижи, Карелия',
        link: kigi
    },
    {
        name: 'Петергоф, Санкт-Петербург',
        link: petergof
    },
    {
        name: 'Шиханы, Башкортостан',
        link: shihani
    },
    {
        name: 'Чусовая, Пермский край',
        link: chysovaia
    },
    {
        name: 'Кучерлинские озера, Алтай',
        link: kycherlinskie
    }
];

export {
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
}

