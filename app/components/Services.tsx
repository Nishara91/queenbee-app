// Services Section Component
export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">What We Do</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white">Premium Digital Services</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl">
                        <h4 className="text-xl font-bold mb-3 text-yellow-400">Web Development</h4>
                        <p className="text-gray-400">Fast, responsive, and SEO-friendly websites tailored to your brand.</p>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl">
                        <h4 className="text-xl font-bold mb-3 text-yellow-400">SEO Optimization</h4>
                        <p className="text-gray-400">Rank higher on search engines and get organic traffic with proven strategies.</p>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700/50 p-8 rounded-2xl">
                        <h4 className="text-xl font-bold mb-3 text-yellow-400">Social Media Management</h4>
                        <p className="text-gray-400">Engaging content creation and community management to build your audience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}