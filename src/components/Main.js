import { render } from "@testing-library/react";



function Main ({onEditProfile, onAddPlace, onEditAvatar}) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar-conteiner">
            <img className="profile__avatar" src="./images/avatar.jpg" alt="фото Профиля"/>
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" type="button" onClick={onEditAvatar}></button>
            </div>
          </div>
            <div className="profile__info">
              <p className="profile__name">Жак-Ив Кусто </p>
              <p className="profile__lifestyle">Исследователь океана</p>
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
