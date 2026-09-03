// Footer Component
export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12 px-6 border-t border-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                
                {/* Brand Info */}
                <div data-aos="fade-up" className="md:col-span-2">
                    <span className="text-2xl font-extrabold tracking-tighter text-white">
                        Queen<span className="text-yellow-500">Bee</span>
                    </span>
                    <p className="mt-4 text-sm leading-relaxed max-w-sm">
                        Empowering businesses worldwide with state-of-the-art digital marketing solutions, custom web development, and creative advertising.
                    </p>
                </div>

                {/* Quick Links */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-yellow-500 transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-yellow-500 transition-colors">Services</a></li>
                        <li><a href="#portfolio" className="hover:text-yellow-500 transition-colors">Portfolio</a></li>
                        <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact / Location */}
                <div data-aos="fade-up" data-aos-delay="200">
                    <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Get in Touch</h4>
                    <p className="text-sm mb-2">Email: info@queenbeedigital.com</p>
                    <p className="text-sm mb-2">Phone: +94 7X XXX XXXX</p>
                    <p className="text-sm">Location: Sri Lanka / Global</p>
                </div>

            </div>

            {/* Copyright Bar */}
            <div data-aos="fade-up" data-aos-delay="300" className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center text-xs">
                <p>&copy; 2026 Queen Bee Digital Marketing. All rights reserved.</p>
                <p className="mt-2 sm:mt-0 text-gray-500">Designed with Next.js & Tailwind CSS</p>
            </div>
        </footer>
    );
}