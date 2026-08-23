const services = [
  {
    number: "01",
    title: "Portfolio Management",
    desc: "Let us handle the details while you focus on your business. From property management to tenant relations.",
    icon: "building",
  },
  {
    number: "02",
    title: "Investment Advisory",
    desc: "Data-driven insights to help you identify high-potential commercial opportunities with confidence.",
    icon: "chart",
  },
  {
    number: "03",
    title: "Leasing & Sales",
    desc: "Expert negotiation and market knowledge to help you secure the right deal in competitive markets.",
    icon: "document",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell pt-24">
      <div className="container-shell">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="eyebrow justify-center">What we do</span>

          <h2 className="section-title mx-auto mt-5">
            Expertise that goes
            <span className="text-gradient"> beyond the property.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#756464]">
            From the first search to long-term portfolio strategy, we bring
            clarity to every stage of the commercial real estate lifecycle.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="glass group rounded-[28px] p-7 transition-transform duration-300 hover:-translate-y-2 sm:p-9"
            >
              <div className="mb-16 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fdf0f0] text-[#991B1B]">
                  <ServiceIcon type={service.icon} />
                </div>

                <span className="font-display text-sm text-[#a18d8d]">
                  {service.number}
                </span>
              </div>

              <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-[#450A0A]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#756464]">
                {service.desc}
              </p>

              <div className="mt-8 h-px w-0 bg-[#991B1B] transition-all duration-500 group-hover:w-12" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "building") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M2 21h20" />
        <path d="M8 7h2M8 11h2M8 15h2M12 7h2M12 11h2M12 15h2" />
        <path d="M16 9h2a2 2 0 0 1 2 2v10" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 20h18" />
        <path d="m5 16 5-5 3 3 6-7" />
        <path d="M15 7h4v4" />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h11a2 2 0 0 1 2 2v4" />
      <path d="M4 4v16a2 2 0 0 0 2 2h12" />
      <path d="M8 8h5M8 12h5M8 16h3" />
      <path d="m15 16 2 2 4-5" />
    </svg>
  );
}