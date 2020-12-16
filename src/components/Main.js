
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card.js';


function Main ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);

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
      api.changeLikeCardStatus(card.cardId, !isLiked).then((newCard) => {
          // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
          const newCards =cards.map((c) => c.cardId === card.cardId ? newCard : c);
         // Обновляем стейт
         setCards(newCards)
      });
  }

  function handleCardDelete(card){
    console.log(card)
    api.deleteCard(card.cardId).then(()=>{
      // Формируем новый массив на основе имеющегося, удоляя карточку
      const newCards = cards.filter(с=>{return с.cardId!==card.cardId});
      // Обновляем стейт
      setCards(newCards)
    })
  }


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar-conteiner">
            <img className="profile__avatar" src={currentUser.avatar} alt="фото Профиля"/>
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" type="button" onClick={onEditAvatar}></button>
            </div>
          </div>
            <div className="profile__info">
              <p className="profile__name">{currentUser.name}</p>
              <p className="profile__lifestyle">{currentUser.about}</p>
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
              onCardLike = {handleCardLike}
              onCardDelete={handleCardDelete}
            />
        )}
      </section>
    </main>
  )
}


export default Main;
