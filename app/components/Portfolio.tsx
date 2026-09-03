// Portfolio / Recent Works Component
export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 px-6 bg-gray-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-down" className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">Our Work</h2>
                    <h3 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-extrabold text-white">Recent Projects</h3>
                    <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">Explore some of our successful digital campaigns and web development projects.</p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Project 1 */}
                    <div data-aos="zoom-in-up" data-aos-delay="100" className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-xl">
                        <div className="aspect-video overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Project 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wider">Web Development</span>
                            <h4 className="text-xl font-bold mt-1 mb-2 text-white">E-Commerce Platform Redesign</h4>
                            <p className="text-gray-400 text-sm">A high-performance online shopping experience built for a leading retail brand.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div data-aos="zoom-in-up" data-aos-delay="200" className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-xl">
                        <div className="aspect-video overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Project 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wider">SEO & Marketing</span>
                            <h4 className="text-xl font-bold mt-1 mb-2 text-white">Global SEO Growth Campaign</h4>
                            <p className="text-gray-400 text-sm">Boosted organic traffic by 150% within 6 months through targeted keyword strategies.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div data-aos="zoom-in-up" data-aos-delay="300" className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-xl">
                        <div className="aspect-video overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1533750349077-cdcd1ec24467?q=80&w=2070&auto=format&fit=crop" alt="Project 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wider">Social Media</span>
                            <h4 className="text-xl font-bold mt-1 mb-2 text-white">Brand Identity & Social Scaling</h4>
                            <p className="text-gray-400 text-sm">Comprehensive social media management and creative ad campaigns for startups.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}