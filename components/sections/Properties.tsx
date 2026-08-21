const listings = [
  {
    title: "Modern Tech Hub",
    type: "Office",
    location: "Downtown Core",
    image:
      "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "The Meridian",
    type: "Retail",
    location: "East District",
    image:
      "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "North Port Logistics",
    type: "Industrial",
    location: "North Port",
    image:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

export default function Properties() {
  return (
    <section id="properties" className="section-shell pt-24">
      <div className="container-shell">
        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Selected opportunities</span>

            <h2 className="section-title mt-5">
              Spaces worth
              <span className="text-gradient"> discovering.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-500">
            A curated selection of commercial spaces chosen for location,
            quality, and long-term potential.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <PropertyCard
            item={listings[0]}
            featured
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {listings.slice(1).map((item) => (
              <PropertyCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({
  item,
  featured = false,
}: {
  item: (typeof listings)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[28px] bg-[#103a37] ${
        featured ? "min-h-[650px]" : "min-h-[310px]"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#062a28] via-[#062a28]/20 to-transparent" />

      <div className="absolute left-5 top-5">
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
          {item.type}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-white/55">
              {item.location}
            </p>

            <h3
              className={`font-display font-medium leading-tight tracking-[-0.035em] text-white ${
                featured ? "text-4xl sm:text-5xl" : "text-3xl"
              }`}
            >
              {item.title}
            </h3>
          </div>

          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#134E4A] transition-transform duration-300 group-hover:-rotate-45">
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}