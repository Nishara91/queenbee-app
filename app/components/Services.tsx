// Services Section Component
export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-down" className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">What We Do</h2>
                    <h3 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-extrabold text-white">Premium Digital Services</h3>
                    <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">We provide end-to-end digital marketing solutions to help your business grow and dominate the digital space.</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Service Card 1 */}
                    <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:bg-gray-800 hover:border-yellow-500/50 transition-all duration-300 group transform hover:-translate-y-2">
                        <div className="bg-gray-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                            <svg className="w-7 h-7 text-yellow-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">Web Development</h4>
                        <p className="text-gray-400 leading-relaxed">Fast, responsive, and SEO-friendly websites tailored to your brand's unique needs.</p>
                    </div>

                    {/* Service Card 2 */}
                    <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:bg-gray-800 hover:border-yellow-500/50 transition-all duration-300 group transform hover:-translate-y-2">
                        <div className="bg-gray-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                            <svg className="w-7 h-7 text-yellow-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">SEO Optimization</h4>
                        <p className="text-gray-400 leading-relaxed">Rank higher on search engines and get organic traffic with our proven SEO strategies.</p>
                    </div>

                    {/* Service Card 3 */}
                    <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:bg-gray-800 hover:border-yellow-500/50 transition-all duration-300 group transform hover:-translate-y-2">
                        <div className="bg-gray-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                            <svg className="w-7 h-7 text-yellow-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">Digital Marketing</h4>
                        <p className="text-gray-400 leading-relaxed">Data-driven campaigns across platforms to maximize your ROI and brand awareness.</p>
                    </div>

                    {/* Service Card 4 */}
                    <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:bg-gray-800 hover:border-yellow-500/50 transition-all duration-300 group transform hover:-translate-y-2">
                        <div className="bg-gray-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                            <svg className="w-7 h-7 text-yellow-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">Social Media Management</h4>
                        <p className="text-gray-400 leading-relaxed">Engaging content creation and community management to build your loyal audience.</p>
                    </div>

                    {/* Service Card 5 */}
                    <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:bg-gray-800 hover:border-yellow-500/50 transition-all duration-300 group transform hover:-translate-y-2">
                        <div className="bg-gray-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                            <svg className="w-7 h-7 text-yellow-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">E-Mail Marketing</h4>
                        <p className="text-gray-400 leading-relaxed">Targeted email campaigns that convert leads into loyal, paying customers.</p>
                    </div>

                    {/* Service Card 6 */}
                    <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl hover:bg-gray-800 hover:border-yellow-500/50 transition-all duration-300 group transform hover:-translate-y-2">
                        <div className="bg-gray-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                            <svg className="w-7 h-7 text-yellow-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">Creative Strategy</h4>
                        <p className="text-gray-400 leading-relaxed">Innovative branding and design solutions that make your business stand out.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}