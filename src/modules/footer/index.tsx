import strings from "../../config/localization/strings";
//
import components from "../../components";
import assets from "../../assets";

type FooterProps = {};

function Footer({}: FooterProps) {
  return (
    <div className="footer-container">
      <div className="footer-credits">
        <span className="footer-credits_text">
          {strings.formatString(strings.module.footer.copyright, {
            year: new Date().getFullYear(),
          })}
        </span>
      </div>
      <div className="footer-socials">
        <a className="footer-socials_link" href="/">
          <components.Icon src={assets.svg.twitterIcon} />
        </a>
        <a className="footer-socials_link" href="/">
          <components.Icon src={assets.svg.facebookIcon} />
        </a>
      </div>
      <div className="footer-links">
        <a className="footer-links_item" href="/">
          {strings.module.footer.links.impressum}
        </a>
        <a className="footer-links_item" href="/">
          {strings.module.footer.links.datenschutz}
        </a>
        <a className="footer-links_item" href="/">
          {strings.module.footer.links.rechtliches}
        </a>
        <a className="footer-links_item" href="/">
          {strings.module.footer.links.copyright}
        </a>
      </div>
    </div>
  );
}

export default Footer;
