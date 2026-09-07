"use client";
import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
// ඔයාගේ firebase.ts ෆයිල් එක තියෙන තැනට path එක හරියටම දෙන්න
import { db } from "../../firebase"; 

// Project එකේ හැඩය 
interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
}

export default function AdminPage() {
    // Login State
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    
    // Project Forms and Lists State
    const [status, setStatus] = useState({ text: "", type: "" });
    const [projects, setProjects] = useState<Project[]>([]);
    const [loadingProjects, setLoadingProjects] = useState(false);

    // Database එකෙන් Projects ටික ඇදලා ගන්න ෆන්ක්ශන් එක
    const fetchProjects = async () => {
        setLoadingProjects(true);
        try {
            const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            
            const fetchedProjects: Project[] = [];
            querySnapshot.forEach((document) => {
                fetchedProjects.push({ id: document.id, ...document.data() } as Project);
            });
            
            setProjects(fetchedProjects);
        } catch (error) {
            console.error("Error fetching projects: ", error);
        } finally {
            setLoadingProjects(false);
        }
    };

    // ලොග් වුණාම ඉබේම Projects ටික ලෝඩ් වෙන්න
    useEffect(() => {
        if (isLoggedIn) {
            fetchProjects();
        }
    }, [isLoggedIn]);

    // Login වෙන කොටස
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsLoggedIn(true);
        } else {
            alert("Incorrect Password! Access Denied.");
        }
    };

    // අලුත් Project එකක් දාන කොටස
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
            
            // අලුත් එක දැම්මට පස්සේ ලිස්ට් එක ආයෙත් අලුත් (Refresh) කරනවා
            fetchProjects();

            setTimeout(() => setStatus({ text: "", type: "" }), 3000);
            
        } catch (error) {
            console.error("Error adding project: ", error);
            setStatus({ text: "Failed to add project.", type: "error" });
        }
    };

    // Project එකක් මකන (Delete) කොටස
    const handleDeleteProject = async (projectId: string) => {
        // මකන්න කලින් ෂුවර් ද කියලා අහනවා
        const isConfirmed = window.confirm("Are you sure you want to delete this project?");
        
        if (isConfirmed) {
            try {
                await deleteDoc(doc(db, "projects", projectId));
                
                // මැකුවට පස්සේ පේන ලිස්ට් එකෙන් ඒක අයින් කරනවා
                setProjects(projects.filter(project => project.id !== projectId));
                alert("Project deleted successfully! 🗑️");
                
            } catch (error) {
                console.error("Error deleting project: ", error);
                alert("Failed to delete the project.");
            }
        }
    };

    // 1. ලොග් වෙලා නැත්නම් පෙන්නන Login Form එක
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
                
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

    // 2. ලොග් වුණාට පස්සේ පෙන්නන Admin Dashboard එක
    return (
        <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-6">
                    <h1 className="text-3xl font-bold">Project <span className="text-yellow-500">Dashboard</span></h1>
                    <button onClick={() => setIsLoggedIn(false)} className="px-4 py-2 bg-red-900/50 text-red-400 rounded-lg border border-red-900 hover:bg-red-900 transition font-bold">
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* වම් පැත්ත: Add Project Form එක */}
                    <div className="lg:col-span-1 bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl h-fit">
                        <h2 className="text-xl font-bold mb-6 text-yellow-500">Add New Project</h2>
                        
                        <form onSubmit={handleAddProject} className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">Project Title</label>
                                <input type="text" name="title" required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" placeholder="e.g. Saruketha Restaurant" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">Category</label>
                                <input type="text" name="category" required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" placeholder="e.g. Local SEO" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">Image URL</label>
                                <input type="url" name="imageUrl" required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" placeholder="https://example.com/image.jpg" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-400 mb-2">Description</label>
                                <textarea name="description" rows={3} required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" placeholder="Short description..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-yellow-600 text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors">
                                Publish Project
                            </button>

                            {status.text && (
                                <p className={`mt-2 text-center font-bold ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                    {status.text}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* දකුණු පැත්ත: Manage & Delete Projects කොටස */}
                    <div className="lg:col-span-2 bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
                        <h2 className="text-xl font-bold mb-6 text-yellow-500">Manage Published Projects</h2>
                        
                        {loadingProjects ? (
                            <div className="text-center text-gray-500 py-10">Loading projects...</div>
                        ) : projects.length === 0 ? (
                            <div className="text-center text-gray-500 py-10 bg-black/30 rounded-xl border border-gray-800">
                                No projects published yet.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {projects.map((project) => (
                                    <div key={project.id} className="flex flex-col sm:flex-row justify-between items-center bg-black/50 border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition-colors">
                                        
                                        {/* Project Details */}
                                        <div className="flex items-center space-x-4 mb-4 sm:mb-0 w-full sm:w-auto">
                                            <div className="w-16 h-12 bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                                                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150x100?text=No+Image" }} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white text-lg">{project.title}</h3>
                                                <p className="text-xs text-yellow-500 font-semibold tracking-wider">{project.category}</p>
                                            </div>
                                        </div>

                                        {/* Delete Button */}
                                        <button 
                                            onClick={() => handleDeleteProject(project.id)}
                                            className="w-full sm:w-auto px-5 py-2 bg-red-900/40 text-red-500 border border-red-900/50 rounded-lg hover:bg-red-600 hover:text-white transition-all font-semibold"
                                        >
                                            Delete
                                        </button>

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}