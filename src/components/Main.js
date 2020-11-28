import { render } from "@testing-library/react";


function handleEditAvatarClick () {
  document.querySelector('#edit-avatar').classList.remove('popup_hidden');
}

function handleEditProfileClick () {
  document.querySelector('#edit-profile').classList.remove('popup_hidden');
}

function handleEditPlaceClick () {
  document.querySelector('#edit-place').classList.remove('popup_hidden');
}

function Main () {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar-conteiner">
            <img className="profile__avatar" src="./images/avatar.jpg" alt="фото Профиля"/>
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" type="button" onClick={handleEditAvatarClick}></button>
            </div>
          </div>
            <div className="profile__info">
              <p className="profile__name">Жак-Ив Кусто </p>
              <p className="profile__lifestyle">Исследователь океана</p>
              <button className="profile__edit-button"  onClick={handleEditProfileClick} type="button"></button>
          </div>
        </div>
          <button className="profile__add-button" type="button" onClick={handleEditPlaceClick}></button>
      </section>
      <section className="elements">

      </section>
    </main>
  )
}

Main ();



export default Main;
