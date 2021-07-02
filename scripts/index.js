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
const popupElementAdd = document.querySelector('.popup_type_add-card')
const popupOpenCardAddElement = profileElement.querySelector('.profile__add-button')
const newNameElement = popupElementAdd.querySelector('.popup__input_type_name')
const newLinkElement = popupElementAdd.querySelector('.popup__input_type_link')
const popupFormElementAdd = popupElementAdd.querySelector('.popup__form')
const popupSaveCardAddElement = popupElementAdd.querySelector('.popup__button-save')
const popupCloseCardAddElement = popupElementAdd.querySelector('.popup__button-close')

const openPopup = function (selectPopup) {
    selectPopup.classList.add('popup_is-opened')
    popupElementNameInput.value = profileName.textContent;
    popupElementJobInput.value = profileJob.textContent;
}

const closePopup = function (selectPopup) {
    selectPopup.classList.remove('popup_is-opened')
}


const formSubmitHandler = function (evt) {
    evt.preventDefault();
    profileName.textContent = popupElementNameInput.value;
    profileJob.textContent = popupElementJobInput.value;
    closePopup(popupElement);
}


//Функция, которая закрывает окошко по клику на затемненную область
const closePopupByClickOnOverlay = function (event) {
    // console.log(event.target, event.currentTarget)
    if (event.target !== event.currentTarget) {
        return
    }

    closePopup(popupElement);
}

closePopup(popupElement)

// переносим карточки в скрипт
const initialCards = [
    {
        name: 'Хибины, Мурманская область',
        link: './images/хибины.jpeg'
    },
    {
        name: 'Кижи, Карелия',
        link: './images/кижи.jpeg'
    },
    {
        name: 'Петергоф, Санкт-Петербург',
        link: './images/петергоф.jpeg'
    },
    {
        name: 'Шиханы, Башкортостан',
        link: './images/шиханы.jpeg'
    },
    {
        name: 'Чусовая, Пермский край',
        link: './images/чусовая.jpeg'
    },
    {
        name: 'Кучерлинские озера, Алтай',
        link: './images/кучерлинские-озера.jpeg'
    }
];

//получение элемента
const cardTemplate = document.querySelector('.template').content;
const cardCase = document.querySelector('.elements');
const imagePopup = document.querySelector('.popup_type_image') 
const  imageElement = imagePopup.querySelector('.popup__image')
const  imageCaption = imagePopup.querySelector('.popup__image-title')
const popupCloseimagePopup = imagePopup.querySelector('.popup__button-close')
// Открыть окно с картинкой функция
function openImagePopup(event) {
    const clickElement = event.target.closest(".element__image");
    imagePopup.classList.add('popup_is-opened');
    imageElement.src = clickElement.src;
    imageElement.alt = clickElement.alt;
    imageCaption.textContent = clickElement.alt;
};
// Закрыть окно с картинкой
const closeImagePopup = function () {
    imagePopup.classList.remove('popup_is-opened')
}
const closeImagePopupByClickOnOverlay = function (event) {
    console.log(event.target, event.currentTarget)
    if (event.target !== event.currentTarget) {
        return
    }
    closeImagePopup()
}
//Закрытие окна добавления обработчики
popupCloseimagePopup.addEventListener('click', () => closeImagePopup(imagePopup));
imagePopup.addEventListener('click', closeImagePopupByClickOnOverlay);

//наполнение элемента
function getCard(name, link) {
    const createCard = cardTemplate.querySelector('.element').cloneNode(true);
    const cardText = createCard.querySelector('.element__title');
    const cardImage = createCard.querySelector('.element__image');
    const cardDeleteButton = createCard.querySelector('.element__button-delete');
    const cardLikeButton = createCard.querySelector('.element__button-like');
    cardText.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;

    // лайкаем карточки
    cardLikeButton.addEventListener('click', () => {
        cardLikeButton.classList.toggle('element__button-like_active');
    });

    // // удаляем карточки
    cardDeleteButton.addEventListener('click', function (evt) {
        const evtTarget = evt.target
        evtTarget.closest('.element').remove();
    });

   // Открытие картинок
   cardImage.addEventListener('click', openImagePopup);
   return createCard;
}

initialCards.forEach(function (el) {
    cardCase.append(getCard(el.name, el.link));
});

//добавляем новую карточку 
const addNewElement = (evt) => {
    evt.preventDefault();
    if (newNameElement.value !== "" || newLinkElement.value !== "") {
        const newName = newNameElement.value;
        const newLink = newLinkElement.value;
        cardCase.prepend(getCard(newName, newLink));
        closePopup(popupElementAdd);
        newNameElement.value = "";
        newLinkElement.value = "";
    } else {
        closePopup(popupElementAdd);
    }
};

// Регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', () => openPopup(popupElement));
popupCloseButtonElement.addEventListener('click', () => closePopup(popupElement));
popupElement.addEventListener('click', closePopupByClickOnOverlay)
popupFormElement.addEventListener('submit', formSubmitHandler);
popupOpenCardAddElement.addEventListener('click', () => openPopup(popupElementAdd));
popupCloseCardAddElement.addEventListener('click', () => closePopup(popupElementAdd));
popupFormElementAdd.addEventListener('submit', addNewElement);