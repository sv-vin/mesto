// export const popupElement = document.querySelector('.popup');
export const popupElement = document.querySelector('.popup');
//popups
export const popupEditProfile = '.popup_type_edit';
export const popupAddElement = '.popup_type_add';
export const popupImage = '.popup-place';
export const popupDeleteCard = '.popup-delete';
export const popupChangeAvatar = '.popup_type_avatar';


//export const popupEditProfile = document.querySelector('.popup_type_edit');
//export const popupAddElement = document.querySelector('.popup_type_add');


export const popupOpenButtonElement = document.querySelector('.profile__edit-button');
export const placeAddButtonElement = document.querySelector('.profile__add-button');




export const popupCloseButtonElement = popupElement.querySelector('.popup__close');
export const popupCloseAddElement = document.querySelector(popupAddElement).querySelector('.popup__close');
export const formAddElement = document.querySelector(popupAddElement).querySelector('.popup__form');
export const placeCard = formAddElement.querySelector('.popup__input_type_name');
export const urlCard = formAddElement.querySelector('.popup__input_type_link');
export const popupElementNameInput = popupElement.querySelector('.popup__input_type_name');
export const popupElementJobInput = popupElement.querySelector('.popup__input_type_job');
export const formElement = document.querySelector('.popup__form');
export const formSubmitButton = document.querySelector('.popup__submit-button');
export const popupSaveAddElement = document.querySelector(popupAddElement).querySelector('.popup__submit-button');

export const popupImageContainer = document.querySelector(popupImage).querySelector('.popup-place__container');
export const popupImageClose = popupImageContainer.querySelector('.popup-place__close');
export const cardCase = document.querySelector('.cards');
export const formEdit = document.querySelector('.popup__form_type_profile');
export const formAdd = document.querySelector('.popup__form_type_place');
export const formAvatar = document.querySelector('.popup__form_type_avatar');


export const profileAvatarButton = document.querySelector('.profile__avatar-button');
export const popupDeleteButton = document.querySelector('.popup-delete__submit-button');


export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_anactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error',
  errorClassActive: 'popup__input-error_active',
  sectionInput: '.popup__input-section',
}

export const userData = {
  nameSelector: '.profile__name',
  infoSelector: '.profile__profession',
  avatar: '.profile__avatar'
};
