import assets from "../../../assets";
import strings from "../../../config/localization/strings";

type HeroProps = {};

function Hero({}: HeroProps) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2 className="hero-title">{strings.screen.home.hero.title}</h2>
        <h3 className="hero-subtitle">{strings.screen.home.hero.subtitle}</h3>
      </div>
      <img className="hero-bg" src={assets.images.homeHero} alt="" />
    </div>
  );
}

export default Hero;
