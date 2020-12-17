import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {
  return(
  <PopupWithForm
    name="avatar"
    title="Обновить аватар"
    submited = "Сохранить"
    isOpen={isOpen}
    onClose = {onClose}
  >

      <input type="url" id="popup_link" name="avatar_url" required  placeholder="Ссылка на аватар" className="popup__input"/>
      <span className='popup__input-error' id='popup_link-input-error'></span>
  </PopupWithForm>
)}

export default EditAvatarPopup;
