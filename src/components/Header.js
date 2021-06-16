import headerLogo from '../images/header-logo.svg'; 

function Header() {
  return (
    <header className="header page__header">
      <a href="#" className="header__link" target="_blank" rel="noopener" >
        <img src={headerLogo} alt="Логотип Mesto" className="header__logo" />
      </a>
    </header> 
  );
}

export default Header;