export default function Services() {
  const services = [
    {
      title: "Portfolio Management",
      desc: "Let us handle the details while you focus on your business. From property management to tenant relations.",
      icon: "🏢"
    },
    {
      title: "Investment Advisory",
      desc: "Data-driven insights to help you make high-yield investments in the commercial space.",
      icon: "📈"
    },
    {
      title: "Leasing & Sales",
      desc: "Expert negotiation to ensure you get the best deal in the most competitive markets.",
      icon: "🤝"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Expertise</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          We provide comprehensive solutions for every stage of the property lifecycle.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-red-600 transition-all duration-300 translate-y-0 hover:-translate-y-2 shadow-sm hover:shadow-xl">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
