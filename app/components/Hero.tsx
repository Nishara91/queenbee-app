// Premium Hero Section Component
export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-semibold text-sm mb-6 uppercase tracking-wider">
                        Welcome to Queen Bee
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                        Transform Your <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Digital Presence</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                        Empowering brands worldwide with data-driven marketing, innovative web solutions, and creative advertising.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-yellow-500 transition-all text-center">
                            Start Your Project
                        </a>
                        <a href="#services" className="px-8 py-4 rounded-full font-bold border border-gray-600 hover:border-yellow-500 hover:text-yellow-400 transition-all text-center">
                            Explore Services
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex justify-center relative">
                    <div className="relative w-full aspect-square max-w-md bg-gray-800/40 backdrop-blur-sm rounded-[2rem] shadow-2xl border border-gray-700/50 flex items-center justify-center p-12">
                        <span className="text-4xl font-extrabold text-yellow-500">Queen Bee</span>
                    </div>
                </div>
            </div>
        </section>
    );
}