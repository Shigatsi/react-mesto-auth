
//конструктор API
class Api {
  constructor ({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  //приватный метод проверки ответа сервера и преобразование из json
  _transformResJson (res) {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
  }

  // публичный метод загрузки информации о пользователе
  getUserData () {
    return fetch(this.baseUrl + '/users/me', {
      headers: {
        authorization: this.headers
      }
    })

    .then(this._transformResJson)
  }

  //публичный метод загрузки карточек
  getInitialCards() {
    return fetch(this.baseUrl + '/cards', {
      headers: {
        authorization:  this.headers
      }
    })
    .then(this._transformResJson)
  }

  //публичный метод сохранения отредактированных данных профиля
  patchUserInfo(popupData) {
    return fetch(this.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization:  this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      name: popupData.name,
      about: popupData.about
     })
    })
    .then(this._transformResJson)
  }

  //публичный метод добавления новой карточки
  postNewCadr (popupData) {
   return fetch (this.baseUrl + '/cards', {
    method: 'POST',
    headers: {
      authorization: this.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: popupData.place,
      link:popupData.place_url
      })
    })
    .then(this._transformResJson)
  }

  //публичный метод удоления карточки
  deleteCard (cardId) {
    return fetch (this.baseUrl + '/cards/' + cardId, {
      method: 'DELETE',
      headers: {
        authorization: this.headers,
      }
    })
    .then(this._transformResJson)
  }

   //публичный метод постановки лайка
   putLike (cardId) {
    return fetch (this.baseUrl + '/cards/likes/' + cardId, {
      method: 'PUT',
      headers: {
        authorization: this.headers,
      }
    })
    .then(this._transformResJson)
  }

  //публичный метод удоления лайка
  deleteLike (cardId) {
    return fetch (this.baseUrl + '/cards/likes/' + cardId, {
      method: 'DELETE',
      headers: {
        authorization: this.headers,
      }
    })
    .then(this._transformResJson)
  }

  //публичный метод обновления аватара пользователя
  patchUserAvatar (userAvatarUrl) {
    return fetch (this.baseUrl + '/users/me/avatar/', {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
        authorization: this.headers,
      },
      body: JSON.stringify({
        avatar: userAvatarUrl,
      })
    })
    .then(this._transformResJson)
    .catch(err => console.error(err));//выведем ошибку
  }
}

const api = new Api  ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
  headers: 'cf883479-ba69-4170-b793-165731887c32',
})

export default api;
