// Portfolio Component
export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 px-6 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">Our Work</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white">Recent Projects</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                        <h4 className="text-xl font-bold text-white mb-2">E-Commerce Platform</h4>
                        <p className="text-gray-400 text-sm">High-performance online shopping experience.</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                        <h4 className="text-xl font-bold text-white mb-2">SEO Growth Campaign</h4>
                        <p className="text-gray-400 text-sm">Boosted organic traffic significantly.</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                        <h4 className="text-xl font-bold text-white mb-2">Brand Identity</h4>
                        <p className="text-gray-400 text-sm">Creative advertising and social scaling.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}