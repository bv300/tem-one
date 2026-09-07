import { SectionTitle } from "./shared";
import { ScrollReveal } from "./ScrollReveal";
import "./Services.css";

const serviceGroups = [
  [
    {
      label: "Web Design",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=85",
      alt: "Laptop displaying a web design layout",
    },
    {
      label: "Brand Strategy",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=85",
      alt: "Creative brand design materials on a desk",
    },
    {
      label: "UI Development",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=85",
      alt: "Code editor showing a web interface",
    },
  ],
  [
    {
      label: "Creative Direction",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85",
      alt: "Team collaborating around a creative workspace",
    },
    {
      label: "Digital Strategy",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      alt: "Analytics dashboard on a laptop screen",
    },
    {
      label: "Content Systems",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=85",
      alt: "Notebook and laptop prepared for content planning",
    },
  ],
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* heading row with the annotation on the right */}
        <div className="services-header">
          <SectionTitle>my services</SectionTitle>
        </div>

        {/* stacked card swapping animation */}
        <ScrollReveal className="services-content-wrapper" variant="zoom-in">
          <div className="services-stacked-rows">
            {serviceGroups.map((group, groupIndex) => (
              <div className="stacked-deck" key={groupIndex}>
                {group.map((service, i) => (
                  <div
                    key={i}
                    className={`stacked-card stacked-card-${i + 1}`}
                    style={{ animationDelay: `${i * 3}s` }}
                  >
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="service-card-image"
                    />
                    <span className="service-card-text">{service.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
