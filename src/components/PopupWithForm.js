function PopupWithForm ({isOpen, onClose, isAuth, onSubmit, ...props }) {
  return (
    <section className={`popup ${isOpen ? "" : "popup_hidden"}`}  id={`edit-${props.name}`}>
    <div className="popup__content">
      <form onSubmit={onSubmit} className={`${isAuth ? "popup__form_theme_auth popup__form" : "popup__form" }`} name={`edit_${props.name}`} method="POST" action="#" noValidate>
        <h2 className={`${isAuth ?" popup__header_theme_auth popup__header" : "popup__header"}`}>{props.title}</h2>
        {props.children}s
        <button type="submit" id={`profile-${props.name} `} className={`${isAuth ? " popup__save-button_theme_auth popup__save-button":"popup__save-button"}`}> {props.submited}</button>
      </form>
        <button type="button" id={`${props.name}-close`} onClick = {onClose} className={`${isAuth ? "popup__close-button_theme_auth": "popup__close-button" }`}></button>
    </div>
  </section>
  )
}

export default PopupWithForm;
