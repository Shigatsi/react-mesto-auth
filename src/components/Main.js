
import React from 'react';
import api from '../utils/Api';
import Card from './Card.js';


function Main ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

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



const [cards, setCards] = React.useState([]);
React.useEffect(()=>{
  api.getInitialCards()
  .then((initialCards)=>{
    const cards = initialCards.map(item =>{
      return{
        cardId:item._id,
        userId:item.owner._id,
        src:item.link,
        title:item.name,
        likes:item.likes.length,
        alt: item.name}
    })
    setCards(cards);

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
        {cards.map((card) =>
           <Card
              key={card.cardId}
              card={card}
              onCardClick ={onCardClick}
            />
        )}
      </section>
    </main>
  )
}


export default Main;
