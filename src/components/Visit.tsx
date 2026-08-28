import { business, hours } from "../data/siteData";
import { useCurrentDayIndex } from "../hooks/useCurrentDayIndex";
import Reveal from "./Reveal";
import "./Visit.css";

export default function Visit() {
  const todayIndex = useCurrentDayIndex();

  return (
    <section className="visit section section--ivory" id="visit" aria-labelledby="visit-title">
      <div className="container visit__grid">
        <Reveal className="visit__info">
          <p className="eyebrow">Find Us</p>
          <h2 id="visit-title" className="section-title">
            Visit Canvas Salon Studio
          </h2>

          <address className="visit__address">
            {business.name}
            <br />
            {business.address.line1}
            <br />
            {business.address.line2}
            <br />
            <a href={`tel:${business.phone.tel}`}>{business.phone.display}</a>
          </address>

          <div className="visit__actions">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Now
            </a>
            <a href={`tel:${business.phone.tel}`} className="btn btn-secondary">
              Call the Salon
            </a>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Get Directions
            </a>
          </div>
        </Reveal>

        <Reveal className="visit__hours" delay={80}>
          <h3 className="visit__hours-title">Hours</h3>
          <table>
            <caption className="visually-hidden">
              Canvas Salon Studio weekly business hours
            </caption>
            <tbody>
              {hours.map((day) => {
                const isToday = todayIndex === day.dayIndex;
                return (
                  <tr
                    key={day.day}
                    className={isToday ? "is-today" : undefined}
                    aria-current={isToday ? "date" : undefined}
                  >
                    <th scope="row">
                      {day.day}
                      {isToday && <span className="visit__today-tag">Today</span>}
                    </th>
                    <td className={day.closed ? "is-closed" : undefined}>{day.hours}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
