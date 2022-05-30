import components from "../../../components";
import assets from "../../../assets";
import strings from "../../../config/localization/strings";

type CalendarProps = {};

function Calendar({}: CalendarProps) {
  return (
    <div className="calendar-container">
      <div className="calendar-dates-container">
        <div className="calendar-date">
          <div className="calendar-date_pretitle-wrap">
            <components.Icon src={assets.svg.calendar} />
            <p className="calendar-date_pretitle">
              {strings.screen.home.calendar.item.date}
            </p>
          </div>
          <h4 className="calendar-date_title">
            {strings.screen.home.calendar.item.title}
          </h4>
          <p className="calendar-date_description">
            {strings.screen.home.calendar.item.description}
          </p>
        </div>

        <div className="calendar-date dark">
          <div className="calendar-date_pretitle-wrap">
            <components.Icon src={assets.svg.calendar} />
            <p className="calendar-date_pretitle">
              {strings.screen.home.calendar.item.date}
            </p>
          </div>
          <h4 className="calendar-date_title">
            {strings.screen.home.calendar.item.title}
          </h4>
          <p className="calendar-date_description">
            {strings.screen.home.calendar.item.description}
          </p>
        </div>
      </div>

      <div className="calendar-event-container">
        <div className="calendar-event">
          <h5 className="calendar-event_date">
            {strings.screen.home.calendar.event.date}
          </h5>
          <h4 className="calendar-event_title">
            {strings.screen.home.calendar.event.title}
          </h4>
          <h6 className="calendar-event_subtitle">
            {strings.screen.home.calendar.event.subtitle}
          </h6>
          <p className="calendar-event_description">
            {strings.screen.home.calendar.event.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
