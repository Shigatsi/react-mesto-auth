import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({

    });
 }

  return(
    <PopupWithForm
          name="place"
          title="Новое место"
          submited = "Сохранить"
          onSubmit={handleSubmit}
          isOpen={isOpen}
          onClose = {onClose}
        >
          <input type="text" id="popup_place" name="place" minLength="1" maxLength="30" required placeholder="Название" className="popup__input"/>
          <span className='popup__input-error popup__input-error_hidden' id='popup_place-input-error'></span>
          <input type="url" id="popup_link"name="place_url" required placeholder="Ссылка на картинку" className="popup__input"/>
          <span className='popup__input-error' id='popup_link-input-error'></span>
        </PopupWithForm>
  )
}

export default AddPlacePopup;
