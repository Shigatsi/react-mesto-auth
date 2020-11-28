import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>
  </div>
  // <template id ="element-template">
  //   <div class="elements__item">
  //     <button class="elements__rbin-button" type="button"></button>
  //     <img class="elements__image" src="#"  alt=""/>
  //     <div class="elements__bar">
  //       <h2 class="elements__title"></h2>
  //       <div class="elements__like-bar">
  //         <button class="elements__like-button elements__like-button_empty" type="button"></button>
  //         <p class="elements__like-counter"></p>
  //       </div>
  //     </div>
  //   </div>
  // </template>

  );
}

export default App;
