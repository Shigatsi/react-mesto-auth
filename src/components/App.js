import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';

function App() {
  const [isEditProfilePopupOpen, onEditProfile] = React.useState(false);
  const  [isAddPlacePopupOpen, onAddPlace] = React.useState(false);
  const  [isEditAvatarPopupOpen, onEditAvatar] = React.useState(false);

   function handleEditPlaceClick () {
    onAddPlace(true);
  };

  function handleEditAvatarClick () {
    onEditAvatar(true);
   };

   function handleEditProfileClick () {
    onEditProfile(true);
  };

  return (
    <div className="page">
      <Header/>
      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleEditPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
      />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
      >
        <input type="url" id="popup_link" name="avatar_url" required  placeholder="Ссылка на аватар" className="popup__input"/>
        <span className='popup__input-error' id='popup_link-input-error'></span>
        <button type="submit" id="avatar-submit" className="popup__save-button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}>
        <input type="text" id="popup_name" name="name" minLength="2" maxLength="40" pattern="[а-яёА-ЯЁA-Za-z \-]*" required placeholder="Имя, Фамилия" className="popup__input"/>
        <span className='popup__input-error popup__input-error_hidden' id='popup_name-input-error'></span>
        <input type="text" id="popup_lifestyle" name="about" minLength="2" maxLength="200" required placeholder="Род занятий/хобби" className="popup__input"/>
        <span className='popup__input-error popup__input-error_hidden' id='popup_lifestyle-input-error'></span>
        <button type="submit" id="profile-submit" className="popup__save-button">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen}>
        <input type="text" id="popup_place" name="place" minLength="1" maxLength="30" required placeholder="Название" className="popup__input"/>
        <span className='popup__input-error popup__input-error_hidden' id='popup_place-input-error'></span>
        <input type="url" id="popup_link"name="place_url" required placeholder="Ссылка на картинку" className="popup__input"/>
        <span className='popup__input-error' id='popup_link-input-error'></span>
        <button type="submit" id="place-submit" className="popup__save-button">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name = "confirm" title="Вы уверены?" isOpen={false}>
        <button type="submit" id="confirm-submit" className="popup__save-button">Да</button>
      </PopupWithForm>

      <Footer/>
  </div>
  // <template id ="element-template">
  //   <div class="elements__item">
  //     <button class="elements__rbin-button" type="button"></button>
  //     <img class="elements__image" src="#"  alt=""/>
  //     <div class="elements__bar">
  //       <h2 class="elements__title"></h2>
  //       <div class="elements__like-bar">
  //         <button class="elements__like-button elements__like-button_empty" type="button"></button>
  //         <p class="elements__like-counter"></p>
  //       </div>
  //     </div>
  //   </div>
  // </template>

  );
};


export default App;
