import logoFb from "../../assets/logoFb.png";

import "../../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Gestão de pontos no mapa</h1>
      </div>
      <div id="img-header" className="header-img">
        <img src={logoFb} alt="" />
      </div>
    </header>
  );
};

export default Header;
