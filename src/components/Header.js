import mestoLogo from '../images/logo.svg';

function Header (...props) {
  return (
    <header className="header">
        <img className="header__logo" src={mestoLogo} alt="Логотип Mesto Russia"/>
        {/* <Route exact path= "/">

        </Route> */}
    </header>
  )
};

export default Header;


{/* <header>
  <img ... />
  <Route exact path="/">
     email
     button
  </Route>
  <Route path="/signup">
    <Link to="signin>
  </Route>
  <Route path="/signin">
    <Link to="signup">
  </Route>
</header> */}
