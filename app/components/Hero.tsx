import Link from "next/link";

// Premium Hero Section Component
export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white min-h-screen flex items-center pt-20 overflow-hidden">
            {/* පසුබිමේ තියෙන ලස්සන Glow Effect එක */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-yellow-600/10 blur-[120px]"></div>
                <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-yellow-500/10 blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center py-12 md:py-0">
                
                {/* වම් පැත්ත: Text Content */}
                <div className="text-left">
                    <div data-aos="fade-down" className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-semibold text-sm mb-6 uppercase tracking-wider">
                        Welcome to Queen Bee
                    </div>
                    
                    <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                        Transform Your <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Digital Presence</span>
                    </h1>
                    
                    <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                        Empowering brands worldwide with data-driven marketing, innovative web solutions, and creative advertising. We combine cutting-edge technology with strategic thinking to scale your business to the next level.
                    </p> 
                    
                    <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-yellow-600/30 hover:bg-yellow-500 transition-all duration-300 text-center transform hover:-translate-y-1">
                            Start Your Project
                        </a>
                        <a href="#services" className="px-8 py-4 rounded-full font-bold border border-gray-600 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300 text-center">
                            Explore Services
                        </a>
                    </div>
                </div>

                {/* දකුණු පැත්ත: Image / Graphic */}
                <div className="flex justify-center relative mt-12 md:mt-0">
                    <div data-aos="zoom-in" data-aos-delay="200" className="relative w-full aspect-square max-w-sm md:max-w-md">
                        {/* පිටිපස්සේ තියෙන shadow/glow එක */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600 to-yellow-300 rounded-[3rem] rotate-6 opacity-20 blur-2xl"></div>
                        
                        {/* ලෝගෝ එක */}
                        <div className="relative z-10 w-full h-full bg-gray-800/40 backdrop-blur-sm rounded-[2rem] shadow-2xl border border-gray-700/50 flex items-center justify-center p-8 md:p-12">
                            <img src="/logo.png" alt="Queen Bee Logo" className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                        </div>
                        
                        {/* පින්තූරේ උඩින් පාවෙන අලුත් White Badge එක (image_adeb9a.png එකේ විදිහට) */}
                        <Link 
                            href="#portfolio" 
                            data-aos="fade-up" 
                            data-aos-delay="500" 
                            className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white px-5 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scale-90 md:scale-100 origin-bottom-left"
                        >
                            <div className="bg-[#FFF4D2] p-3 rounded-full text-yellow-600 transition-transform duration-300 group-hover:scale-110">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            
                            <div className="flex flex-col text-left">
                                <p className="font-bold text-[15px] md:text-[16px] text-gray-900 leading-tight mb-0.5 group-hover:text-yellow-600 transition-colors">Trusted Agency</p>
                                <p className="text-[11px] md:text-[13px] text-gray-500 font-medium leading-tight">100+ Projects Delivered</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}