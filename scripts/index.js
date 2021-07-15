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

const cardTemplate = document.querySelector('.template').content;
const cardCase = document.querySelector('.elements');

const imagePopup = document.querySelector('.popup_type_image')
const imageElement = imagePopup.querySelector('.popup__image')
const imageCaption = imagePopup.querySelector('.popup__image-title')
const popupCloseImagePopup = imagePopup.querySelector('.popup__button-close')

//наполнение элемента
function getCard(name, link) {
    const newCard = cardTemplate.querySelector('.element').cloneNode(true);
    const cardText = newCard.querySelector('.element__title');
    const cardImage = newCard.querySelector('.element__image');
    const cardDeleteButton = newCard.querySelector('.element__button-delete');
    const cardLikeButton = newCard.querySelector('.element__button-like');
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
    return newCard;
}

initialCards.forEach(function (el) {
    cardCase.append(getCard(el.name, el.link));
});

// закрытие на эскейп
const ESC_CODE = 'Escape'

function handleEsc(evt) {
    if (evt.key === ESC_CODE) {
        const activePopup = document.querySelector('.popup_is-opened');
        closePopup(activePopup);
    }
}

// Открыть попап
function openPopup(popup) {
    popup.classList.add('popup_is-opened')
    document.addEventListener('keyup', handleEsc)
}

// Закрыть попап
function closePopup(popup) {
    popup.classList.remove('popup_is-opened')
    document.removeEventListener('keyup', handleEsc);
}

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

// Открыть окно с картинкой функция
function openImagePopup(event) {
    const clickElement = event.target.closest(".element__image");
    openPopup(imagePopup);
    imageElement.src = clickElement.src;
    imageElement.alt = clickElement.alt;
    imageCaption.textContent = clickElement.alt;
};

//закрытие окона по клику на затемненную область
const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
            popup.addEventListener('click', (evt) => {
                if (evt.target.classList.contains('popup_is-opened')) {
                    closePopup(popup)
                }
            })
        })

//добавляем новую карточку 
popupSaveCardAddElement.setAttribute("disabled", true);
popupSaveCardAddElement.classList.add(validationConfig.inactiveButtonClass);

const addNewElement = (evt) => {
    evt.preventDefault()
    const newName = newNameElement.value;
    const newLink = newLinkElement.value;
    cardCase.prepend(getCard(newName, newLink));
    closePopup(popupElementAdd);
    newNameElement.value = "";
    newLinkElement.value = "";
};

// Регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', () => openProfilePopup(profilePopup));
popupCloseButtonElement.addEventListener('click', () => closePopup(profilePopup));
popupFormElement.addEventListener('submit', submitProfileForm);

popupOpenCardAddElement.addEventListener('click', () => openPopup(popupElementAdd));
popupCloseCardAddElement.addEventListener('click', () => closePopup(popupElementAdd));
popupFormElementAdd.addEventListener('submit', addNewElement);

popupCloseImagePopup.addEventListener('click', () => closePopup(imagePopup));
