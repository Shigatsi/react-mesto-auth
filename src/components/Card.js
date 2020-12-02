function Card ({card, onCardClick}) {

  return (
    <div className="elements__item">
      <button className="elements__rbin-button" type="button"></button>
      <img className="elements__image" src={card.src}  alt={card.title} onClick={_=>onCardClick(card)}/>
      <div className="elements__bar">
        <h2 className="elements__title">{card.title}</h2>
        <div className="elements__like-bar">
          <button className="elements__like-button elements__like-button_empty" type="button"></button>
          <p className="elements__like-counter">{card.likes}</p>
        </div>
        </div>
      </div>
  )
}

export default Card;
