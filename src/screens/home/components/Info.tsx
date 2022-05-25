import strings from "../../../config/localization/strings";

type InfoProps = {};

function Info({}: InfoProps) {
  return (
    <div className="info-container">
      <h2 className="info-title">{strings.screen.home.info.title}</h2>
      <h3 className="info-subtitle">{strings.screen.home.info.subtitle}</h3>

      <div className="info-content">
        <p
          className="info-content_item"
          dangerouslySetInnerHTML={{
            __html: strings.screen.home.info.paragraph_1,
          }}
        />
        <p
          className="info-content_item"
          dangerouslySetInnerHTML={{
            __html: strings.screen.home.info.paragraph_2,
          }}
        />
      </div>
    </div>
  );
}

export default Info;
