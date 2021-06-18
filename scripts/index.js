// Делаем выборку DOM элементов
const profileElement = document.querySelector('.profile')
const popupElement = document.querySelector('.popup')
const popupOpenButtonElement = profileElement.querySelector('.profile__edit-button')
const profileName = profileElement.querySelector('.profile__title')
const profileJob = profileElement.querySelector('.profile__text')
const popupElementNameInput = popupElement.querySelector('.popup__input_type_name')
const popupElementJobInput = popupElement.querySelector('.popup__input_type_job')
const popupSaveButtonElement = popupElement.querySelector('.popup__button-save')
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close')

const openpopup = function () {
    popupElement.classList.add('popup_is-opened')    
    popupElementNameInput.value = profileName.textContent;
    popupElementJobInput.value = profileJob.textContent;
}

const closepopup = function () {
    popupElement.classList.remove('popup_is-opened')
}


const formSubmitHandler = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupElementNameInput.value;
    profileJob.textContent = popupElementJobInput.value;
    closepopup();
}

//Функция, которая закрывает окошко по клику на затемненную область
const closepopupByClickOnOverlay = function (event) {
    console.log(event.target, event.currentTarget)
    if (event.target !== event.currentTarget) {
        return
    }

    closepopup()
}

// Регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', openpopup)
popupCloseButtonElement.addEventListener('click', closepopup)
popupElement.addEventListener('click', closepopupByClickOnOverlay)
popupSaveButtonElement.addEventListener('click', formSubmitHandler)

// Ффункции обратного вызова
const addEventListener = function (type, callback) {
    console.log(type)
    const event = {
        target: '',
        currentTarget: ''
    }
    callback(event)
}