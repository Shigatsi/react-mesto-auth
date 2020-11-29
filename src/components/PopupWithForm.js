function PopupWithForm ({isOpen, ...props }) {
  return (
    <section className={`popup ${isOpen ? "" : "popup_hidden"}`}  id={`edit-${props.name}`} >
    <div className="popup__content">
      <form className="popup__form" name={`edit_${props.name}`} method="POST" action="#" noValidate>
        <h2 className="popup__header">{props.title}</h2>
        {props.children}
      </form>
    <button type="button" id={`${props.name}-close`} className="popup__close-button"></button>
    </div>
  </section>

  )
}

export default PopupWithForm;




  // <section className="popup popup_hidden" id="confirm">
  //   <div className="popup__content">
  //       <form className="popup__form" name="confirm" method="POST" action="#" noValidate>
  //         <h2 className="popup__header">Вы уверены?</h2>
  //         <button type="submit" id="confirm-submit" className="popup__save-button">Да</button>
  //       </form>
  //     <button type="button" id="confirm-close" className="popup__close-button"></button>
  //   </div>
  // </section>
