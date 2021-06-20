// Делаем выборку DOM элементов
const profileElement = document.querySelector('.profile')
const popupElement = document.querySelector('.popup')
const popupOpenButtonElement = profileElement.querySelector('.profile__edit-button')
const profileName = profileElement.querySelector('.profile__title')
const profileJob = profileElement.querySelector('.profile__text')
const popupElementNameInput = popupElement.querySelector('.popup__input_type_name')
const popupElementJobInput = popupElement.querySelector('.popup__input_type_job')
const popupFormElement = popupElement.querySelector('.popup__form')
const popupSaveButtonElement = popupElement.querySelector('.popup__button-save')
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close')


const openPopup = function () {
    popupElement.classList.add('popup_is-opened')
    popupElementNameInput.value = profileName.textContent;
    popupElementJobInput.value = profileJob.textContent;
}

const closePopup = function () {
    popupElement.classList.remove('popup_is-opened')
}


const formSubmitHandler = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupElementNameInput.value;
    profileJob.textContent = popupElementJobInput.value;
    closePopup();
}


//Функция, которая закрывает окошко по клику на затемненную область
const closepopupByClickOnOverlay = function (event) {
    console.log(event.target, event.currentTarget)
    if (event.target !== event.currentTarget) {
        return
    }

    closePopup()
}

// Регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupElement.addEventListener('click', closepopupByClickOnOverlay)
popupFormElement.addEventListener('submit', formSubmitHandler)