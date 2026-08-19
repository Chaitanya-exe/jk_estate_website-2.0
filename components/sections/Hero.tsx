export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-transparent to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
          Elevate Your <span className="text-red-600">Business</span> Space
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Premier commercial real estate solutions. From boutique offices to expansive retail hubs, we find the space where your ambition meets its destination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
            Explore Listings
          </button>
          <button className="px-8 py-4 border-2 border-red-600 text-red-600 font-bold rounded-full hover:bg-red-50 transition-all">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
