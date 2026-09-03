"use client";
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase';

export default function ContactForm() {
    const [status, setStatus] = useState({ text: '', type: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ text: "Sending inquiry...", type: "text-blue-400" });

        const form = e.currentTarget;
        const formData = new FormData(form);

        const services = formData.getAll("services");
        const products = formData.getAll("products");

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            services: services,
            products: products,
            createdAt: serverTimestamp()
        };

        try {
            // කෙලින්ම Firebase Database එකේ "inquiries" collection එකට සේව් කිරීම
            await addDoc(collection(db, "inquiries"), data);
            
            setStatus({ text: "Thank you! We have received your inquiry.", type: "text-green-400" });
            form.reset();
            
        } catch (error) {
            console.error("Firebase Error: ", error);
            setStatus({ text: "Something went wrong. Please try again.", type: "text-red-400" });
        }
    };

    return (
        <section id="contact" className="relative py-24 px-6 bg-cover bg-center bg-fixed overflow-hidden min-h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-black/90"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-gray-800/60">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Start Your Project</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-300">Name</label>
                            <input type="text" name="name" required className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-3 bg-black/50 text-white placeholder-gray-500" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-300">Email</label>
                            <input type="email" name="email" required className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-3 bg-black/50 text-white placeholder-gray-500" placeholder="you@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-300">Phone</label>
                            <input type="text" name="phone" className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-3 bg-black/50 text-white placeholder-gray-500" placeholder="07X XXX XXXX" />
                        </div>
                    </div>

                    <div className="bg-black/50 p-6 rounded-xl mt-6 border border-gray-800">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-yellow-500 mb-4 tracking-wide text-sm uppercase">Services</h3>
                                <div className="space-y-3 text-sm text-gray-300 font-medium">
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" name="services" value="Web Development" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded" /> WEB DEVELOPMENT</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" name="services" value="SEO" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded" /> SEARCH ENGINE OPTIMIZATION (SEO)</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" name="services" value="Social Media" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded" /> SOCIAL MEDIA OPTIMIZATION</label>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-yellow-500 mb-4 tracking-wide text-sm uppercase">Products</h3>
                                <div className="space-y-3 text-sm text-gray-300 font-medium">
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" name="products" value="Hotel Voucher" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded" /> ONLINE HOTEL VOUCHER SYSTEM</label>
                                    <label className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" name="products" value="E-Commerce" className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded" /> SHOPPING CART / E-COMMERCE</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-300">Any specific requirements?</label>
                        <textarea name="message" rows={4} required className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 p-3 bg-black/50 text-white placeholder-gray-500" placeholder="Tell us more about your project..."></textarea>
                    </div>
                    
                    <div>
                        <button type="submit" className="w-full bg-yellow-600 text-white font-bold py-4 px-4 rounded-md hover:bg-yellow-500 transition duration-300 shadow-[0_0_15px_rgba(202,138,4,0.4)]">
                            Submit Inquiry
                        </button>
                    </div>
                    
                    {status.text && (
                        <p className={`text-center mt-4 font-bold ${status.type}`}>
                            {status.text}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}