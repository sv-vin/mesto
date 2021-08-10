// закрытие на эскейп
const ESC_CODE = 'Escape'

export function handleEsc(evt) {
    if (evt.key === ESC_CODE) {
        const activePopup = document.querySelector('.popup_is-opened');
        closePopup(activePopup);
    }
}

// Открыть попап
export function openPopup(popup) {
    popup.classList.add('popup_is-opened')
    document.addEventListener('keyup', handleEsc)
}

// Закрыть попап
export function closePopup(popup) {
    popup.classList.remove('popup_is-opened')
    document.removeEventListener('keyup', handleEsc);
}