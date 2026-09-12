import type { ComponentType, SVGProps } from "react";
import { amenities } from "../data/siteData";
import Reveal from "./Reveal";
import {
  AccessibleIcon,
  CafeIcon,
  DoorIcon,
  FamilyIcon,
  ParkingIcon,
  WifiIcon,
} from "./AmenityIcons";
import "./Experience.css";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  parking: ParkingIcon,
  "walk-ins": DoorIcon,
  wifi: WifiIcon,
  "snack-bar": CafeIcon,
  accessible: AccessibleIcon,
  "kid-friendly": FamilyIcon,
};

export default function Experience() {
  return (
    <section className="experience section section--soft" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">The Visit</p>
          <h2 id="experience-title" className="section-title">
            Designed for Your Comfort
          </h2>
        </div>

        <div className="experience__grid">
          {amenities.map((amenity, i) => {
            const Icon = ICONS[amenity.id];
            return (
              <Reveal as="div" className="experience-card" delay={i * 50} key={amenity.id}>
                <span className="experience-card__icon">
                  {Icon && <Icon />}
                </span>
                <h3 className="experience-card__label">{amenity.label}</h3>
                <p className="experience-card__desc">{amenity.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
