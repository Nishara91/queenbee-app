// Footer Component
export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12 px-6 border-t border-gray-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <span className="text-2xl font-extrabold text-white">
                        Queen<span className="text-yellow-500">Bee</span>
                    </span>
                    <p className="mt-4 text-sm max-w-sm">
                        Empowering businesses worldwide with state-of-the-art digital marketing solutions and web development.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Get in Touch</h4>
                    <p className="text-sm mb-2">Email: info@queenbeedigital.com</p>
                    <p className="text-sm">Location: Sri Lanka</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 text-xs text-center">
                <p>&copy; 2026 Queen Bee Digital Marketing. All rights reserved.</p>
            </div>
        </footer>
    );
}