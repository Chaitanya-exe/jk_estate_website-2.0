export default function Properties() {
  const listings = [
    {
      title: "Modern Tech Hub",
      type: "Office Space",
      location: "Downtown Core",
      image: "https://images.unsplash.com/photo-1497361211371-611445341081?q=80&w=1000&l=false&auto=format&fit=crop"
    },
    {
      title: "Retail Plaza",
      type: "Retail Space",
      location: "East District",
      image: "https://images.unsplash.com/photo-1563986768604-701045904b63?q=80&w=1000&l=false&auto=format&fit=crop"
    },
    {
      title: "Industrial Warehouse",
      type: "Logistics",
      location: "North Port",
      image: "https://images.unsplash.com/photo-1586509216104-0312556fe891?q=80&w=1000&l=false&auto=format&fit=crop"
    },
  ];

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600">Strategically located spaces for your growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-gray-100">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="bg-red-600 text-xs font-bold px-2 py-1 rounded mb-2 inline-block uppercase tracking-wider">
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
