import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import api from '../utils/Api';
import {CurrentUserContext, currentUser} from '../contexts/CurrentUserContext';



function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  const [isEditProfilePopupOpen, onEditProfile] = React.useState(false);
  const  [isAddPlacePopupOpen, onAddPlace] = React.useState(false);
  const  [isEditAvatarPopupOpen, onEditAvatar] = React.useState(false);

  React.useEffect(()=>{
    api.getUserData()
    .then((userData)=>{
      setCurrentUser(userData);
    })
    .catch(err => console.error(err));//выведем ошибку
  }, [])

  function closeAllPopups () {
    onAddPlace(false);
    onEditAvatar(false);
    onEditProfile(false);
    onCardClick({});
  }

   function handleEditPlaceClick () {
    onAddPlace(true);
  }

  function handleEditAvatarClick () {
    onEditAvatar(true);
   }

   function handleEditProfileClick () {
    onEditProfile(true);
  }

  const [selectedCard, onCardClick] = React.useState({});
  function handleCardClick (card) {
    onCardClick(card);
  }

  return (
    <CurrentUserContext.Provider value = {currentUser}>
      <div className="page">
        <Header/>
        <Main
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleEditPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
        />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          submited = "Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
        >

          <input type="url" id="popup_link" name="avatar_url" required  placeholder="Ссылка на аватар" className="popup__input"/>
          <span className='popup__input-error' id='popup_link-input-error'></span>
        </PopupWithForm>

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          submited = "Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose = {closeAllPopups}
        >
          <input type="text" id="popup_name" name="name" minLength="2" maxLength="40" pattern="[а-яёА-ЯЁA-Za-z \-]*" required placeholder="Имя, Фамилия" className="popup__input"/>
          <span className='popup__input-error popup__input-error_hidden' id='popup_name-input-error'></span>
          <input type="text" id="popup_lifestyle" name="about" minLength="2" maxLength="200" required placeholder="Род занятий/хобби" className="popup__input"/>
          <span className='popup__input-error popup__input-error_hidden' id='popup_lifestyle-input-error'></span>
        </PopupWithForm>

        <PopupWithForm
          name="place"
          title="Новое место"
          submited = "Сохранить"
          isOpen={isAddPlacePopupOpen}
          onClose = {closeAllPopups}
        >
          <input type="text" id="popup_place" name="place" minLength="1" maxLength="30" required placeholder="Название" className="popup__input"/>
          <span className='popup__input-error popup__input-error_hidden' id='popup_place-input-error'></span>
          <input type="url" id="popup_link"name="place_url" required placeholder="Ссылка на картинку" className="popup__input"/>
          <span className='popup__input-error' id='popup_link-input-error'></span>
        </PopupWithForm>

        <PopupWithForm
          name = "confirm"
          title="Вы уверены?"
          submited = "Да"
          isOpen={false}
          onClose = {closeAllPopups}
        >
        </PopupWithForm>

        <ImagePopup onCardClick={handleCardClick} card = {selectedCard || ''} onClose = {closeAllPopups}/> */

        <Footer/>
    </div>
  </CurrentUserContext.Provider>


  );
}


export default App;
