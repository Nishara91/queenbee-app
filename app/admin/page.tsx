"use client";
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// ඔයාගේ firebase.ts ෆයිල් එක තියෙන තැනට path එක හරියටම දෙන්න
import { db } from "../../firebase"; 

export default function AdminPage() {
    // Login සඳහා State
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    
    // Project Form සඳහා State
    const [status, setStatus] = useState({ text: "", type: "" });

    // Login වෙන කොටස
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // දැනට ලේසියට පාස්වර්ඩ් එක admin123 කියලා දෙමු (පස්සේ වෙනස් කරන්න පුළුවන්)
        if (password === "admin123") {
            setIsLoggedIn(true);
        } else {
            alert("Incorrect Password! Access Denied.");
        }
    };

    // අලුත් Project එකක් Firebase එකට යවන කොටස
    const handleAddProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ text: "Adding project...", type: "loading" });

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await addDoc(collection(db, "projects"), {
                title: formData.get('title'),
                category: formData.get('category'),
                description: formData.get('description'),
                imageUrl: formData.get('imageUrl'),
                createdAt: serverTimestamp()
            });

            setStatus({ text: "Project added successfully! 🎉", type: "success" });
            form.reset();
            
            // තත්පර 3කින් success මැසේජ් එක මකන්න
            setTimeout(() => setStatus({ text: "", type: "" }), 3000);
            
        } catch (error) {
            console.error("Error adding project: ", error);
            setStatus({ text: "Failed to add project.", type: "error" });
        }
    };

    // 1. ලොග් වෙලා නැත්නම් පෙන්නන්නේ මේ අලුත් Premium Login Form එකයි
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')" }}>
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
                
                {/* Login Card */}
                <div className="relative z-10 w-full max-w-md p-10 bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.6)] mx-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-white tracking-wide">
                            Queen Bee <span className="text-yellow-500">Admin</span>
                        </h2>
                        <p className="text-gray-400 text-sm mt-2">Secure access for authorized personnel</p>
                    </div>
                    
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-gray-600 rounded-xl p-4 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all outline-none"
                                placeholder="••••••••"
                                required 
                            />
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold py-4 rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-[0_0_20px_rgba(202,138,4,0.3)] transform hover:-translate-y-1">
                            Secure Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // 2. ලොග් වුණාට පස්සේ පෙන්නන්නේ මේ Admin Dashboard එකයි
    return (
        <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-6">
                    <h1 className="text-3xl font-bold">Project <span className="text-yellow-500">Dashboard</span></h1>
                    <button onClick={() => setIsLoggedIn(false)} className="px-4 py-2 bg-red-900/50 text-red-400 rounded-lg border border-red-900 hover:bg-red-900 transition">
                        Logout
                    </button>
                </div>

                <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
                    <h2 className="text-xl font-bold mb-6">Add New Project</h2>
                    
                    <form onSubmit={handleAddProject} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">Project Title</label>
                                <input type="text" name="title" required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" placeholder="e.g. Saruketha Restaurant" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">Category</label>
                                <input type="text" name="category" required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" placeholder="e.g. Local SEO & Social Media" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-400 mb-2">Image URL</label>
                            <input type="url" name="imageUrl" required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" placeholder="https://example.com/image.jpg" />
                            <p className="text-xs text-gray-500 mt-1">Copy and paste the image link here.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-400 mb-2">Short Description</label>
                            <textarea name="description" rows={3} required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" placeholder="What did you do for this project?"></textarea>
                        </div>

                        <button type="submit" className="bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-colors w-full md:w-auto">
                            Publish Project
                        </button>

                        {/* Status Message */}
                        {status.text && (
                            <p className={`mt-4 font-bold ${status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-blue-400'}`}>
                                {status.text}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}