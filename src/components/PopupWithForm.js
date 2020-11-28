function PopupWithForm (props) {
  return (
    <section className="popup popup_hidden"  id={`edit-${props.name}`} >
    <div className="popup__content">
      <form className="popup__form" name={`edit_${props.name}`} method="POST" action="#" noValidate>
  <h2 className="popup__header">{props.title}</h2>
        <input type="text" id="popup_name" name="name" minLength="2" maxLength="40" pattern="[а-яёА-ЯЁA-Za-z \-]*" required placeholder={props.firstInputPlaceholder} className="popup__input"/>
        <span className='popup__input-error popup__input-error_hidden' id='popup_name-input-error'></span>
        <input type="text" id="popup_lifestyle" name="about" minLength="2" maxLength="200" required placeholder={props.secondInputPlaceholder} className="popup__input"/>
        <span className='popup__input-error popup__input-error_hidden' id='popup_lifestyle-input-error'></span>
        <button type="submit" id={`${props.name}-submit`} className="popup__save-button">Сохранить</button>
      </form>
    <button type="button" id="${pros.name}-close"  className="popup__close-button"></button>
    </div>
  </section>

  )
}

export default PopupWithForm;


{/* <section className="popup popup_hidden" id="edit-place" >
    <div className="popup__content">
      <form className="popup__form" name="edit_place" method="POST" action="#" noValidate>
        <h2 className="popup__header">Новое место</h2>
        <input type="text" id="popup_place" name="place" minLength="1" maxLength="30" required placeholder="Название" className="popup__input"/>
        <span className='popup__input-error popup__input-error_hidden' id='popup_place-input-error'></span>
        <input type="url" id="popup_link"name="place_url" required placeholder="Ссылка на картинку" className="popup__input"/>
        <span className='popup__input-error' id='popup_link-input-error'></span>
        <button type="submit" id="place-submit" className="popup__save-button">Сохранить</button>
      </form>
      <button type="button" id="place-close" className="popup__close-button"></button>
    </div>
  </section>

  <section className="popup popup_hidden" id="confirm">
    <div className="popup__content">
        <form className="popup__form" name="confirm" method="POST" action="#" noValidate>
          <h2 className="popup__header">Вы уверены?</h2>
          <button type="submit" id="confirm-submit" className="popup__save-button">Да</button>
        </form>
      <button type="button" id="confirm-close" className="popup__close-button"></button>
    </div>
  </section>
  <section className="popup  popup_hidden" id="edit-avatar">
    <form className="popup__form" name="edit_avatar" method="POST" action="#" noValidate>
      <h2 className="popup__header">Обновить аватар</h2>
      <input type="url" id="popup_link" name="avatar_url" required  placeholder="Ссылка на аватар" className="popup__input"/>
      <span className='popup__input-error' id='popup_link-input-error'></span>
      <button type="submit" id="avatar-submit" className="popup__save-button">Сохранить</button>
    </form>
    <button type="button" id="place-close" className="popup__close-button"></button>
  </section> */}
