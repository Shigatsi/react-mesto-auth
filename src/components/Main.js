function Main () {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar-conteiner">
            <img className="profile__avatar" src="./images/avatar.jpg" alt="фото Профиля"/>
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" type="button"></button>
            </div>
          </div>
            <div className="profile__info">
              <p className="profile__name">Жак-Ив Кусто </p>
              <p className="profile__lifestyle">Исследователь океана</p>
              <button className="profile__edit-button" type="button"></button>
          </div>
        </div>
          <button className="profile__add-button" type="button"></button>
      </section>
      <section className="elements">

      </section>

      <section className="popup popup_hidden"  id="edit-profile" >
        <div className="popup__content">
          <form className="popup__form" name="edit_profile" method="POST" action="#" novalidate>
            <h2 className="popup__header">Редактировать профиль</h2>
            <input type="text" id="popup_name" name="name" minlength="2" maxlength="40" pattern="[а-яёА-ЯЁA-Za-z \-]*" required placeholder="Имя, Фамилия" className="popup__input"/>
            <span className='popup__input-error popup__input-error_hidden' id='popup_name-input-error'></span>
            <input type="text" id="popup_lifestyle" name="about" minlength="2" maxlength="200" required placeholder="Род занятий/хобби" className="popup__input"/>
            <span className='popup__input-error popup__input-error_hidden' id='popup_lifestyle-input-error'></span>
            <button type="submit" id="profile-submit" className="popup__save-button">Сохранить</button>
          </form>
        <button type="button" id="profile-close"  className="popup__close-button"></button>
        </div>
      </section>
      <section className="popup popup_hidden" id="edit-place" >
        <div className="popup__content">
          <form className="popup__form" name="edit_place" method="POST" action="#" novalidate>
            <h2 class="popup__header">Новое место</h2>
            <input type="text" id="popup_place" name="place" minlength="1" maxlength="30" required placeholder="Название" class="popup__input"/>
            <span class='popup__input-error popup__input-error_hidden' id='popup_place-input-error'></span>
            <input type="url" id="popup_link"name="place_url" required placeholder="Ссылка на картинку" class="popup__input"/>
            <span class='popup__input-error' id='popup_link-input-error'></span>
            <button type="submit" id="place-submit" class="popup__save-button">Сохранить</button>
          </form>
          <button type="button" id="place-close" class="popup__close-button"></button>
        </div>
      </section>
      <section class="popup popup_hidden" id="img-fullsize">
        <div class="popup__content popup_type_image-disp" >
          <button type="button" id="img-close" class="popup__close-button"></button>
          <figure class="popup__fullsize-img-container">
          <img class = "popup__fullsize-img" src="#" alt=""/>
            <figcaption class="popup__fullsize-img-caption"></figcaption>
          </figure>
        </div>
      </section>
      <section class="popup popup_hidden" id="confirm">
        <div class="popup__content">
            <form class="popup__form" name="confirm" method="POST" action="#" novalidate>
              <h2 class="popup__header">Вы уверены?</h2>
              <button type="submit" id="confirm-submit" class="popup__save-button">Да</button>
            </form>
          <button type="button" id="confirm-close" class="popup__close-button"></button>
        </div>
      </section>
      <section class="popup  popup_hidden" id="edit-avatar">
        <form class="popup__form" name="edit_avatar" method="POST" action="#" novalidate>
          <h2 class="popup__header">Обновить аватар</h2>
          <input type="url" id="popup_link" name="avatar_url" required  placeholder="Ссылка на аватар" class="popup__input"/>
          <span class='popup__input-error' id='popup_link-input-error'></span>
          <button type="submit" id="avatar-submit" class="popup__save-button">Сохранить</button>
        </form>
        <button type="button" id="place-close" class="popup__close-button"></button>
      </section>
    </main>
  )
}

export default Main;
