
import React from 'react';
import api from '../utils/Api'


function Main ({onEditProfile, onAddPlace, onEditAvatar}) {

  const [userName, setUserName] = React.useState("");
  const [userDescription, setuserDescription] = React.useState("");
  const [userAvatar, setuserAvatar] = React.useState("");

  React.useEffect(()=>{
    api.getUserData()
      .then((userData)=>{
        setUserName(userData.name);
        setuserDescription(userData.about)
        setuserAvatar(userData.avatar)
      })
      .catch(err => console.error(err));//выведем ошибку
  },[])

// Из старого проекта скопируйте разметку карточки, находящуюся внутри тега template, и используйте её внутри JSX-итерации по массиву cards. Используйте подстановку данных элемента массива в JSX, чтобы вывести название карточки, количество лайков и указать URL изображения (как и прежде с помощью атрибута style).

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
// Немного подождите, пока загрузятся данные...

const [cards, setCards] = React.useState([]);
React.useEffect(()=>{
  api.getInitialCards()
  .then((initialCards)=>{

    setCards([...initialCards])
    console.log(initialCards)
  })
  .catch(err => console.error(err));
}, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar-conteiner">
            <img className="profile__avatar" src={userAvatar} alt="фото Профиля"/>
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" type="button" onClick={onEditAvatar}></button>
            </div>
          </div>
            <div className="profile__info">
              <p className="profile__name">{userName}</p>
              <p className="profile__lifestyle">{userDescription}</p>
              <button className="profile__edit-button"  type="button" onClick = {onEditProfile}></button>
          </div>
        </div>
          <button className="profile__add-button" type="button" onClick = {onAddPlace}></button>
      </section>
      <section className="elements">

      </section>
    </main>
  )
}


export default Main;
