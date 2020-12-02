function PopupWithForm ({isOpen, onClose, ...props }) {
  return (
    <section className={`popup ${isOpen ? "" : "popup_hidden"}`}  id={`edit-${props.name}`}>
    <div className="popup__content">
      <form className="popup__form" name={`edit_${props.name}`} method="POST" action="#" noValidate>
        <h2 className="popup__header">{props.title}</h2>
        {props.children}
      </form>
    <button type="button" id={`${props.name}-close`} onClick = {onClose} className="popup__close-button"></button>
    </div>
  </section>
  )
}

export default PopupWithForm;
