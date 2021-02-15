import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//импорт компонентов
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Login from './Login';
import Register from './Register';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [cards, setCards] = React.useState([]);

  React.useEffect(()=>{
    api.getInitialCards()
    .then((Cards)=>{
      const cards = Cards.map(item =>{
        return{
          cardId:item._id,
          userId:item.owner._id,
          src:item.link,
          title:item.name,
          likes:item.likes,
          alt: item.name}
      })
      setCards(cards);

    })
    .catch(err => console.error(err));
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card.cardId, !isLiked)
    .then((item) => {
      const newCard = {
        cardId:item._id,
        userId:item.owner._id,
        src:item.link,
        title:item.name,
        likes:item.likes,
        alt: item.name
      }
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c.cardId === card.cardId ? newCard : c);
      // Обновляем стейт
      setCards(newCards)
    })
    .catch(err => console.error(err));//выведем ошибку;
  }


  function handleCardDelete(card){
  api.deleteCard(card.cardId)
  .then(()=>{
    // Формируем новый массив на основе имеющегося, удоляя карточку
    const newCards = cards.filter(с=>{return с.cardId!==card.cardId});
    // Обновляем стейт
    setCards(newCards)
  })
  .catch(err => console.error(err));//выведем ошибку
  }

  const [currentUser, setCurrentUser] = React.useState({});
  const [EditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const  [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const  [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  React.useEffect(()=>{
    api.getUserData()
    .then((userData)=>{
      setCurrentUser(userData);
    })
    .catch(err => console.error(err));//выведем ошибку
  }, [])

  function closeAllPopups () {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }

   function handleEditPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
   }

   function handleEditProfileClick () {
     setIsEditProfilePopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = React.useState({});
  function handleCardClick (card) {
    setSelectedCard(card);
  }


  function handleUpdateUser (currentUser) {
    api.patchUserInfo(currentUser)
    .then((updateUserInfo)=>{
      setCurrentUser(updateUserInfo);
      closeAllPopups();
    })
    .catch(err => console.error(err));//выведем ошибку

  }


  function handleUpdateAvatar (avatarUrl) {
    api.patchUserAvatar(avatarUrl)
    .then((userData)=>{
      setCurrentUser(userData)
      closeAllPopups ();
    })
    .catch(err => console.error(err));//выведем ошибку
  }


  function handleAddPlaceSubmit (popupData) {
    api.postNewCadr(popupData)
    .then((item)=>{
      const newCard = {
        cardId:item._id,
        userId:item.owner._id,
        src:item.link,
        title:item.name,
        likes:item.likes,
        alt: item.name
      }
      setCards([newCard, ...cards]);
      closeAllPopups ();
    })
    .catch(err => console.error(err));//выведем ошибку

  }

  return (
    <CurrentUserContext.Provider value = {currentUser}>
      <div className="page">
        {!loggedIn ? <h2>Another HEADER</h2> : <Header/>}
    {console.log(loggedIn)}
        <Switch>

          {/* роут для регистрации пользователя */}
          <Route path='/sign-up'>
            <Register />
          </Route>
          {/* роут для авторизации пользователя */}
          <Route path='/sign-in'>
            <Login />
          </Route>
          <Route exact path = '/'> {
            loggedIn ?
              <Main
                cards = {cards}
                onCardLike = {handleCardLike}
                onCardDelete = {handleCardDelete}
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleEditPlaceClick}
                onEditAvatar = {handleEditAvatarClick}
                setSelectedCard = {handleCardClick}
              /> : <Redirect to="/sign-in" />
            }
          </Route>
        </Switch>

        <EditProfilePopup
          isOpen={EditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose = {closeAllPopups}
          onAddPlace = {handleAddPlaceSubmit}
        />

        <PopupWithForm
          name = "confirm"
          title="Вы уверены?"
          submited = "Да"
          isOpen={false}
          onClose = {closeAllPopups}
        >
        </PopupWithForm>

        <ImagePopup setSelectedCard={handleCardClick} card = {selectedCard || ''} onClose = {closeAllPopups}/> */
        { loggedIn && <Footer/>}
    </div>
  </CurrentUserContext.Provider>


  );
}


export default App;
