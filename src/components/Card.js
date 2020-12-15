import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card ({card, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.userId === currentUser._id;

  //Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardRBinButtonClassName = (
    `${isOwn ? 'elements__rbin-button' : 'elements__rbin-button elements__rbin-button_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `elements__like-button ${isLiked ? 'elements__like-button_active' : 'elements__like-button_empty'}`
  );;

  return (
    <div className="elements__item">
      <button className={cardRBinButtonClassName} type="button"></button>
      <img className="elements__image" src={card.src}  alt={card.title} onClick={_=>onCardClick(card)}/>
      <div className="elements__bar">
        <h2 className="elements__title">{card.title}</h2>
        <div className="elements__like-bar">
          <button className={cardLikeButtonClassName} type="button"></button>
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
        </div>
      </div>
  )
}

export default Card;
