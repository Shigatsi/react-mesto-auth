function ImagePopup () {
  return (
    <section className="popup popup_hidden" id="img-fullsize">
    <div className="popup__content popup_type_image-disp" >
      <button type="button" id="img-close" className="popup__close-button"></button>
      <figure className="popup__fullsize-img-container">
      <img className = "popup__fullsize-img" src="#" alt=""/>
        <figcaption className="popup__fullsize-img-caption"></figcaption>
      </figure>
    </div>
  </section>
  )
}

export default ImagePopup;
