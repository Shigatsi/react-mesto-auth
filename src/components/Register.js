import React from 'react';
import PopupWithForm from './PopupWithForm';

function Register (...props) {
  const [data, setData] = React.useState({
    email: '',
    pass: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name] : value
    })
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    //here wilbe smth else handleLogin
  }

  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      submited = "Зарегистрироваться"
      isAuth = {true}
      isOpen={true}
      isRegister={true}
      onSubmit = {handleSubmit}
    >
      <input
        type="text"
        id="register_email"
        name="email"
        minLength="2"
        maxLength="40"
        pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        required
        placeholder="Email"
        className="popup__input_theme_auth popup__input"
        value={data.email}
        onChange={handleChange}
      />

      <span
        className='popup__input-error popup__input-error_hidden'
        id='register_email-input-error'></span>
      <input
        type="password"
        id="register_pass"
        name="pass"
        minLength="6"
        maxLength="200"
        required
        value = {data.pass}
        onChange={handleChange}
        placeholder="Пароль"
        className="popup__input_theme_auth popup__input"
      />
      <span
        className='popup__input-error popup__input-error_hidden'
        id='register_pass-input-error'></span>

    </PopupWithForm>
  )
}

export default Register;
