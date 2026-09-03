"use client";
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// ඔයාගේ firebase.ts ෆයිල් එක තියෙන තැනට path එක හරියටම දෙන්න
import { db } from "../../firebase"; 

// Contact Form Component with Pure Black Glassmorphism Design
export default function ContactForm() {
    const [status, setStatus] = useState({ text: "", type: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setStatus({ text: "Sending inquiry...", type: "loading" });

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Extracting Data
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            services: formData.getAll('services'),
            products: formData.getAll('products')
        };

        try {
            // Firebase Firestore එකට දත්ත යැවීම
            await addDoc(collection(db, "inquiries"), {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
                services: data.services,
                products: data.products,
                createdAt: serverTimestamp() // යවන වෙලාවත් සේව් වෙනවා
            });

            setStatus({ text: "Thank you! We have received your inquiry and will contact you shortly.", type: "success" });
            form.reset();
            
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus({ text: "Something went wrong. Please check your Firebase configuration.", type: "error" });
        }
    };

    return (
        <section id="contact" className="relative py-24 px-6 bg-cover bg-center bg-fixed overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop')" }}>
            
            <div className="absolute inset-0 bg-black/90"></div>
            
            <div data-aos="fade-up" data-aos-duration="1000" className="relative z-10 max-w-4xl mx-auto bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-gray-800/60">
                <h2 data-aos="fade-down" data-aos-delay="100" className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Start Your Project</h2>
                
                <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                    {/* Basic Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div data-aos="fade-up" data-aos-delay="200">
                            <label className="block text-sm font-semibold text-gray-300">Name</label>
                            <input type="text" name="name" required className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-3 bg-black/50 text-white placeholder-gray-500 transition-colors" placeholder="Your Name" />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                            <label className="block text-sm font-semibold text-gray-300">Email</label>
                            <input type="email" name="email" required className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-3 bg-black/50 text-white placeholder-gray-500 transition-colors" placeholder="you@email.com" />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <label className="block text-sm font-semibold text-gray-300">Phone</label>
                            <input type="text" name="phone" className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-3 bg-black/50 text-white placeholder-gray-500 transition-colors" placeholder="07X XXX XXXX" />
                        </div>
                    </div>

                    {/* Services & Products Checklist */}
                    <div data-aos="fade-up" data-aos-delay="500" className="bg-black/50 p-6 rounded-xl mt-6 border border-gray-800">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-yellow-500 mb-4 tracking-wide text-sm uppercase">Services</h3>
                                <div className="space-y-3 text-sm text-gray-300 font-medium">
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="Generative Engine Optimisation (GEO)" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> GENERATIVE ENGINE OPTIMISATION (GEO)</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="Web Development" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> WEB DEVELOPMENT</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="Search Engine Optimization (SEO)" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> SEARCH ENGINE OPTIMIZATION (SEO)</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="Social Media Optimization" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> SOCIAL MEDIA OPTIMIZATION</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="Pay Per Click Marketing (PPC)" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> PAY PER CLICK MARKETING (PPC)</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="Metasearch Marketing" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> METASEARCH MARKETING</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="Digital Marketing Consultancy" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> DIGITAL MARKETING CONSULTANCY</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="Content Development" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> CONTENT DEVELOPMENT</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="E-Mail Marketing" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> E-MAIL MARKETING</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="services" value="Other Service" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> OTHER</label>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-yellow-500 mb-4 tracking-wide text-sm uppercase">Products</h3>
                                <div className="space-y-3 text-sm text-gray-300 font-medium">
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="products" value="Online Hotel Voucher System" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> ONLINE HOTEL VOUCHER SYSTEM</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="products" value="Shopping Cart / E-Commerce Store" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> SHOPPING CART / E-COMMERCE STORE</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="products" value="Online Payments / Invoicing System" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> ONLINE PAYMENTS / INVOICING SYSTEM</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="products" value="Restaurantseye" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> RESTAURANTSEYE</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="products" value="Stayseye" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> STAYSEYE</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors"><input type="checkbox" name="products" value="Other Product" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500" /> OTHER</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Message Area */}
                    <div data-aos="fade-up" data-aos-delay="600">
                        <label className="block text-sm font-semibold text-gray-300">Any specific requirements?</label>
                        <textarea name="message" rows={4} required className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-3 bg-black/50 text-white placeholder-gray-500 transition-colors" placeholder="Tell us more about your project..."></textarea>
                    </div>
                    
                    <div data-aos="zoom-in" data-aos-delay="700">
                        <button type="submit" className="w-full bg-yellow-600 text-white font-bold py-4 px-4 rounded-md hover:bg-yellow-500 transition duration-300 shadow-[0_0_15px_rgba(202,138,4,0.4)] transform hover:-translate-y-1">
                            Submit Inquiry
                        </button>
                    </div>
                    
                    {/* Status Message */}
                    {status.text && (
                        <p className={`text-center mt-4 font-bold ${status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-blue-400'}`}>
                            {status.text}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}