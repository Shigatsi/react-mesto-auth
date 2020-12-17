import React from 'react';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

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


  function handleUpdateUser (currentUser) {
    api.patchUserInfo(currentUser).then((updateUserInfo)=>{
      setCurrentUser(updateUserInfo)
      closeAllPopups ();
    })
  }


// Используйте реф
// На этот раз вместо управляемых компонентов используйте реф, чтобы получить прямой доступ к DOM-элементу инпута и его значению.

// В App добавьте handleUpdateAvatar, вызывающий api.setUserAvatar. Не забудьте обновлять аватар локально после завершения запроса.

  function handleUpdateAvatar (avatarUrl) {
    api.patchUserAvatar(avatarUrl).then((userData)=>{
      console.log(avatarUrl)
      console.log(currentUser)
      setCurrentUser(userData)
      closeAllPopups ();
    })
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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

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
