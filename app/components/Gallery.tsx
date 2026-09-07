export default function Gallery() {
    // Gallery එකේ පෙන්නන්න ඕන පින්තූර ටික
    const images = [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop", // Social Media / Instagram style
        "https://images.unsplash.com/photo-1626785773579-c938fb18ba18?q=80&w=2000&auto=format&fit=crop", // UI / Creative Design
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop", // Instagram feed layout
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop", // Digital Marketing
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop", // Workspace / Agency
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop", // Branding Design
    ];

    return (
        <section id="gallery" className="py-24 px-6 bg-black text-white border-t border-gray-900">
            <div className="max-w-7xl mx-auto">
                
                {/* මාතෘකාව */}
                <div className="text-center mb-16">
                    <h4 data-aos="fade-down" className="text-yellow-500 font-bold tracking-wider text-sm mb-3 uppercase">
                        A Trusted Agency
                    </h4>
                    <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Our Creative Gallery
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Explore some of our best performing social media creatives, branding materials, and stunning graphic designs crafted for our clients.
                    </p>
                </div>

                {/* පින්තූර Grid එක */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((src, index) => (
                        <div 
                            key={index} 
                            data-aos="zoom-in" 
                            data-aos-delay={index * 100}
                            className="relative group overflow-hidden rounded-2xl aspect-square bg-gray-900 border border-gray-800"
                        >
                            <img 
                                src={src} 
                                alt={`Queen Bee Creative Work ${index + 1}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                            {/* Hover කරාම එන අඳුරු කවරය සහ ලස්සන Button එක */}
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-yellow-500 text-sm font-bold border border-yellow-500 px-5 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-yellow-500 hover:text-black cursor-pointer">
                                    View Design
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}