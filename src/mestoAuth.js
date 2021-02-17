export const BASE_URL = 'https://auth.nomoreparties.co';

const checkRes = (res) => res.ok ? res.json() : Promise.reject('Ошибка на сервере');
//регистрация
export const register = (email, pass) => {
  return fetch(`${BASE_URL}/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, pass})
  })
  .then(checkRes);
};

//авторизация
export const authorize = (email, pass) => {
  return fetch(`${BASE_URL}/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, pass})
  })
  .then(checkRes);
};
