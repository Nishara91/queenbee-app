// Navbar Component
export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2">
                    <span className="text-3xl font-extrabold tracking-tighter text-gray-900">
                        Queen<span className="text-yellow-600">Bee</span>
                    </span>
                </a>
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
                    <a href="#" className="hover:text-yellow-600 transition-colors">Home</a>
                    <a href="#services" className="hover:text-yellow-600 transition-colors">Services</a>
                    <a href="#portfolio" className="hover:text-yellow-600 transition-colors">Portfolio</a>
                    <a href="#contact" className="hover:text-yellow-600 transition-colors">Contact</a>
                </div>
                <div className="hidden md:block">
                    <a href="#contact" className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-600 transition-colors shadow-lg">
                        Get a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
}