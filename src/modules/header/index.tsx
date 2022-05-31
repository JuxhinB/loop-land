import { useEffect, useState } from "react";
//
import strings from "../../config/localization/strings";
import components from "../../components";
import assets from "../../assets";

type HeaderProps = {};

function Header({}: HeaderProps) {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    if (isMenuActive) {
      setTimeout(() => {
        document.body.style.overflowY = "hidden";
      }, 200);
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMenuActive]);

  return (
    <div className="header-container">
      <div className={`header-menu ${isMenuActive ? "active" : ""}`}>
        <button className="header-menu-toggle lg-hidden" onClick={toggleMenu}>
          <components.Icon src={assets.svg.closeIcon} />
        </button>
        <div className="header-menu_item lg-hidden">
          <a href="/">{strings.module.header.menu.home}</a>
        </div>
        <div className="header-menu_item">
          <a href="/">{strings.module.header.menu.about}</a>
        </div>
        <div className="header-menu_item">
          <a href="/">{strings.module.header.menu.gallery}</a>
        </div>
        <div className="header-menu_item">
          <a href="/">{strings.module.header.menu.crew}</a>
        </div>
        <div className="header-menu_item">
          <a href="/">{strings.module.header.menu.contact}</a>
        </div>
      </div>

      <a href="/" className="header-logo">
        <img src={assets.images.segelTeamLogo} alt="" />
      </a>

      <button
        type="button"
        className="header-menu-toggle lg-hidden"
        onClick={toggleMenu}
      >
        <components.Icon src={assets.svg.menuIcon} />
      </button>
    </div>
  );
}

export default Header;
