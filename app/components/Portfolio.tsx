// Portfolio / Recent Works Component
export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 px-6 bg-gray-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-down" className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">Our Work</h2>
                    <h3 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-extrabold text-white">Recent Projects</h3>
                    <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">Take a look at some of the real-world projects, businesses, and digital platforms we have successfully managed.</p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Project 1 */}
                    <div data-aos="zoom-in-up" data-aos-delay="100" className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-xl">
                        <div className="aspect-video overflow-hidden relative">
                            {/* පස්සේ මේකට Illukawela Walauwa එකේ පින්තූරයක් දාන්න */}
                            <img src="https://images.unsplash.com/photo-1542314831-c6a4d14248c5?q=80&w=2070&auto=format&fit=crop" alt="Hospitality Digital Presence" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wider">Hospitality & Tourism</span>
                            <h4 className="text-xl font-bold mt-1 mb-2 text-white">Illukawela Walauwa</h4>
                            <p className="text-gray-400 text-sm">Managed end-to-end social media content strategy, online listings, and booking platform integrations for a premium heritage destination.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div data-aos="zoom-in-up" data-aos-delay="200" className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-xl">
                        <div className="aspect-video overflow-hidden relative">
                            {/* පස්සේ මේකට රෙස්ටුරන්ට් එකේ පින්තූරයක් දාන්න */}
                            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Local SEO & Social Media" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wider">Local SEO & Social Media</span>
                            <h4 className="text-xl font-bold mt-1 mb-2 text-white">Saruketha Restaurant</h4>
                            <p className="text-gray-400 text-sm">Driven local foot traffic through precise Google Maps location entries, business verification, and active social media presence management.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div data-aos="zoom-in-up" data-aos-delay="300" className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-xl">
                        <div className="aspect-video overflow-hidden relative">
                             {/* පස්සේ මේකට වෙබ්සයිට් එකක පින්තූරයක් දාන්න */}
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Official Web Solutions" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wider">Web Development & Hosting</span>
                            <h4 className="text-xl font-bold mt-1 mb-2 text-white">Official Sector Web Solutions</h4>
                            <p className="text-gray-400 text-sm">Coordinated comprehensive technical requirements and evaluated specialized hosting proposals for high-level official department websites.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}