import { initialCards } from './initialCards.js'
import { Card } from './Card.js'
import { handleEsc, openPopup, closePopup } from './utils.js'
import validationConfig from './validationConfig.js'
import FormValidator from './FormValidator.js'

// Делаем выборку DOM элементов
const profileElement = document.querySelector('.profile')
const profilePopup = document.querySelector('.popup_type_edit')
const popupOpenButtonElement = profileElement.querySelector('.profile__edit-button')
const profileName = profileElement.querySelector('.profile__title')
const profileJob = profileElement.querySelector('.profile__text')
const popupElementNameInput = profilePopup.querySelector('.popup__input_type_name')
const popupElementJobInput = profilePopup.querySelector('.popup__input_type_job')
const popupFormElement = profilePopup.querySelector('.popup__form')
const popupSaveButtonElement = profilePopup.querySelector('.popup__button-save')
const popupCloseButtonElement = profilePopup.querySelector('.popup__button-close')

const popupElementAdd = document.querySelector('.popup_type_add-card')
const popupOpenCardAddElement = profileElement.querySelector('.profile__add-button')
const newNameElement = popupElementAdd.querySelector('.popup__input_type_name')
const newLinkElement = popupElementAdd.querySelector('.popup__input_type_link')
const popupFormElementAdd = popupElementAdd.querySelector('.popup__form')
const popupSaveCardAddElement = popupElementAdd.querySelector('.popup__button-save')
const popupCloseCardAddElement = popupElementAdd.querySelector('.popup__button-close')

const cardCase = document.querySelector('.elements');

const imagePopup = document.querySelector('.popup_type_image')
const popupCloseImagePopup = imagePopup.querySelector('.popup__button-close')

const viewImage = document.querySelector('.popup__image');
const viewTitle = document.querySelector('.popup__image-title');

// валидация
const formEdit = document.querySelector('.popup__form-edit');
const formAdd = document.querySelector('.popup__form-add');
const validationFormEdit = new FormValidator(validationConfig, formEdit);
const validationFormAdd = new FormValidator(validationConfig, formAdd);
validationFormEdit.enableValidation();
validationFormAdd.enableValidation();

// // Открыть окно с картинкой функция
function handleCardClick(name, link) {
    // const viewImage = document.querySelector('.popup__image');
    // const viewTitle = document.querySelector('.popup__image-title');
    viewImage.src = link;
    viewImage.alt = name;
    viewTitle.textContent = name;
    openPopup(imagePopup);
}

const createCard = (data, wrap) => {
    const card = new Card(data.name, data.link, '.template', handleCardClick)
    wrap.prepend(card.generateCard());
}

//Создание карточек
initialCards.forEach(function (el) {
    createCard(el, cardCase)
})

// Создание новой карточки
const addNewElement = (evt) => {
    evt.preventDefault()
    // popupSaveButtonElementAdd.setAttribute("disabled", true);
    createCard({
        name: newNameElement.value,
        link: newLinkElement.value
    }, cardCase);

    closePopup(popupElementAdd);
    popupFormElementAdd.reset();
    validationFormAdd.resetValidation();

};

// Открыть всплывающее окно редактирование профиля
const openProfilePopup = function () {
    openPopup(profilePopup);
    popupElementNameInput.value = profileName.textContent;
    popupElementJobInput.value = profileJob.textContent;
}

const submitProfileForm = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupElementNameInput.value;
    profileJob.textContent = popupElementJobInput.value;
    closePopup(profilePopup);
}

//закрытие окона по клику на затемненную область
const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup)
        }
    })
})

// Регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', () => openProfilePopup(profilePopup));
popupCloseButtonElement.addEventListener('click', () => closePopup(profilePopup));
popupFormElement.addEventListener('submit', submitProfileForm);

popupOpenCardAddElement.addEventListener('click', () => openPopup(popupElementAdd));
popupCloseCardAddElement.addEventListener('click', () => closePopup(popupElementAdd));
popupFormElementAdd.addEventListener('submit', addNewElement);

popupCloseImagePopup.addEventListener('click', () => closePopup(imagePopup));