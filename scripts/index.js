import { initialCards } from './initialCards.js'
import { Card } from './Card.js'
import { handleEsc, openPopup, closePopup } from './utils.js'
import validationConfig from './validationConfig.js'
import formValidator from './FormValidator.js'

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

// валидация
const formEdit = document.querySelector('.popup__form-edit');
const formAdd = document.querySelector('.popup__form-add');
const validationFormEdit = new formValidator(validationConfig, formEdit);
const validationFormAdd = new formValidator(validationConfig, formAdd);
validationFormEdit.enableValidation();
validationFormAdd.enableValidation();

// // Открыть окно с картинкой функция
function handleCardKlick(name, link) {
    const viewImage = document.querySelector('.popup__image');
    const viewTitle = document.querySelector('.popup__image-title');
    viewImage.src = link;
    viewImage.alt = name;
    viewTitle.textContent = name;
    openPopup(imagePopup);
}

initialCards.forEach(function (el) {
    const card = new Card(el.name, el.link, '.template', handleCardKlick)
    cardCase.append(card.generateCard());
})

const addNewElement = (evt) => {
    evt.preventDefault()
    popupSaveCardAddElement.setAttribute("disabled", true);
    popupSaveCardAddElement.classList.add(validationConfig.inactiveButtonClass);
    const newName = newNameElement.value;
    const newLink = newLinkElement.value;
    const newCard = new Card(newName, newLink, '.template')
    cardCase.prepend(newCard.generateCard());
    closePopup(popupElementAdd);
    newNameElement.value = "";
    newLinkElement.value = "";
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