export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold tracking-tighter text-red-600">ESTATE<span className="text-black">CORE</span></span>
            </div>
            <p className="text-gray-600 max-w-sm">
              Refining the standard of commercial real estate. We believe that the space you work in is the foundation of your success.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#properties" className="hover:text-red-600">Properties</a></li>
              <li><a href="#services" className="hover:text-red-600">Services</a></li>
              <li><a href="#about" className="hover:text-red-600">About</a></li>
              <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-gray-900">Contact</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>123 Commerce Way</li>
              <li>Suite 500</li>
              <li>New York, NY 10001</li>
              <li>info@estatecore.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8">
          <p className="text-center text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} EstateCore Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
