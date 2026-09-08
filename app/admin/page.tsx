"use client";
import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase"; 

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
}

interface GalleryImage {
    id: string;
    title: string;
    imageUrl: string;
}

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    
    const [status, setStatus] = useState({ text: "", type: "" });
    const [projects, setProjects] = useState<Project[]>([]);
    const [loadingProjects, setLoadingProjects] = useState(false);

    const [editingId, setEditingId] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");

    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
    const [loadingGallery, setLoadingGallery] = useState(false);
    const [galleryTitle, setGalleryTitle] = useState("");
    const [galleryImageUrl, setGalleryImageUrl] = useState("");
    const [galleryStatus, setGalleryStatus] = useState({ text: "", type: "" });

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

    const fetchGallery = async () => {
        setLoadingGallery(true);
        try {
            const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const fetched: GalleryImage[] = [];
            querySnapshot.forEach((document) => {
                fetched.push({ id: document.id, ...document.data() } as GalleryImage);
            });
            setGalleryImages(fetched);
        } catch (error) {
            console.error("Error fetching gallery images: ", error);
        } finally {
            setLoadingGallery(false);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            fetchProjects();
            fetchGallery();
        }
    }, [isLoggedIn]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") setIsLoggedIn(true);
        else alert("Incorrect Password! Access Denied.");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ text: editingId ? "Updating project..." : "Adding project...", type: "loading" });
        try {
            if (editingId) {
                await updateDoc(doc(db, "projects", editingId), { title, category, description, imageUrl });
                setStatus({ text: "Project updated successfully! ✏️", type: "success" });
            } else {
                await addDoc(collection(db, "projects"), { title, category, description, imageUrl, createdAt: serverTimestamp() });
                setStatus({ text: "Project added successfully! 🎉", type: "success" });
            }
            resetForm();
            fetchProjects();
            setTimeout(() => setStatus({ text: "", type: "" }), 3000);
        } catch (error) {
            console.error("Error saving project: ", error);
            setStatus({ text: "Failed to save project.", type: "error" });
        }
    };

    const handleGallerySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!galleryImageUrl.trim()) return;

        setGalleryStatus({ text: "Adding to gallery...", type: "loading" });
        
        try {
            const urls = galleryImageUrl.split('\n').map(url => url.trim()).filter(url => url !== '');
            
            const promises = urls.map((url, index) => {
                const imgTitle = urls.length > 1 ? `${galleryTitle} ${index + 1}` : galleryTitle;
                return addDoc(collection(db, "gallery"), {
                    title: imgTitle || "Gallery Image",
                    imageUrl: url,
                    createdAt: serverTimestamp()
                });
            });

            await Promise.all(promises);

            setGalleryStatus({ text: `Successfully added ${urls.length} image(s)! 🖼️`, type: "success" });
            setGalleryTitle("");
            setGalleryImageUrl("");
            fetchGallery();
            setTimeout(() => setGalleryStatus({ text: "", type: "" }), 3000);
        } catch (error) {
            console.error("Error saving gallery images: ", error);
            setGalleryStatus({ text: "Failed to add images.", type: "error" });
        }
    };

    const handleEditClick = (project: Project) => {
        setTitle(project.title); setCategory(project.category); setImageUrl(project.imageUrl); setDescription(project.description); setEditingId(project.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetForm = () => {
        setTitle(""); setCategory(""); setImageUrl(""); setDescription(""); setEditingId(null);
    };

    const handleDeleteProject = async (projectId: string) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            try {
                await deleteDoc(doc(db, "projects", projectId));
                setProjects(projects.filter(p => p.id !== projectId));
                alert("Project deleted successfully! 🗑️");
                if (editingId === projectId) resetForm();
            } catch (error) {
                console.error("Error deleting project: ", error);
                alert("Failed to delete the project.");
            }
        }
    };

    // මෙතන තමයි Gallery Delete එක හදලා තියෙන්නේ Alert එකත් එක්ක
    const handleDeleteGalleryImage = async (imageId: string) => {
        if (window.confirm("Are you sure you want to delete this image from gallery?")) {
            try {
                await deleteDoc(doc(db, "gallery", imageId));
                setGalleryImages(galleryImages.filter(img => img.id !== imageId));
                alert("Gallery image deleted successfully! 🗑️"); // අලුතින් දැම්ම Alert එක
            } catch (error) {
                console.error("Error deleting gallery image: ", error);
                alert("Failed to delete the image.");
            }
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
                <div className="relative z-10 w-full max-w-md p-10 bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.6)] mx-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-white tracking-wide">Queen Bee <span className="text-yellow-500">Admin</span></h2>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-black/50 border border-gray-600 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none" placeholder="Enter Password" required />
                        </div>
                        <button type="submit" className="w-full bg-yellow-600 text-white font-bold py-4 rounded-xl hover:bg-yellow-500 transition-all">Secure Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-6">
                    <h1 className="text-3xl font-bold">Queen Bee <span className="text-yellow-500">Dashboard</span></h1>
                    <button onClick={() => setIsLoggedIn(false)} className="px-4 py-2 bg-red-900/50 text-red-400 rounded-lg border border-red-900 hover:bg-red-900 transition font-bold">Logout</button>
                </div>

                <div className="space-y-16">
                    {/* Projects Section */}
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl h-fit transition-all duration-300" style={editingId ? { borderColor: '#ca8a04' } : {}}>
                                <h2 className="text-xl font-bold mb-6 text-yellow-500">{editingId ? "✏️ Edit Project" : "➕ Add New Project"}</h2>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div><label className="block text-sm font-semibold text-gray-400 mb-2">Project Title</label><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" /></div>
                                    <div><label className="block text-sm font-semibold text-gray-400 mb-2">Category</label><input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" /></div>
                                    <div><label className="block text-sm font-semibold text-gray-400 mb-2">Image URL</label><input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none" /></div>
                                    <div><label className="block text-sm font-semibold text-gray-400 mb-2">Description</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none"></textarea></div>
                                    <div className="flex space-x-3 pt-2">
                                        <button type="submit" className={`flex-1 text-white font-bold py-3 rounded-lg transition-colors ${editingId ? 'bg-blue-600 hover:bg-blue-500' : 'bg-yellow-600 hover:bg-yellow-500'}`}>{editingId ? "Update Project" : "Publish Project"}</button>
                                        {editingId && <button type="button" onClick={resetForm} className="px-4 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors">Cancel</button>}
                                    </div>
                                    {status.text && <p className={`mt-2 text-center font-bold ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{status.text}</p>}
                                </form>
                            </div>
                            <div className="lg:col-span-2 bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
                                <h2 className="text-xl font-bold mb-6 text-yellow-500">Manage Published Projects</h2>
                                {loadingProjects ? <div className="text-center text-gray-500 py-10">Loading projects...</div> : projects.length === 0 ? <div className="text-center text-gray-500 py-10 bg-black/30 rounded-xl border border-gray-800">No projects published yet.</div> : (
                                    <div className="space-y-4">
                                        {projects.map((project) => (
                                            <div key={project.id} className="flex flex-col sm:flex-row justify-between items-center bg-black/50 border border-gray-700 rounded-xl p-4 hover:border-gray-500 transition-colors">
                                                <div className="flex items-center space-x-4 mb-4 sm:mb-0 w-full sm:w-auto">
                                                    <div className="w-16 h-12 bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                                                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150x100?text=No+Image" }} />
                                                    </div>
                                                    <div><h3 className="font-bold text-white text-lg">{project.title}</h3><p className="text-xs text-yellow-500 font-semibold tracking-wider">{project.category}</p></div>
                                                </div>
                                                <div className="flex space-x-3 w-full sm:w-auto">
                                                    <button onClick={() => handleEditClick(project)} className="flex-1 sm:flex-none px-5 py-2 bg-blue-900/40 text-blue-400 border border-blue-900/50 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-semibold">Edit</button>
                                                    <button onClick={() => handleDeleteProject(project.id)} className="flex-1 sm:flex-none px-5 py-2 bg-red-900/40 text-red-500 border border-red-900/50 rounded-lg hover:bg-red-600 hover:text-white transition-all font-semibold">Delete</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="border-t border-gray-800 pt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl h-fit">
                                <h2 className="text-xl font-bold mb-6 text-purple-400">🖼️ Bulk Add to Gallery</h2>
                                <form onSubmit={handleGallerySubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-400 mb-2">Common Title</label>
                                        <input type="text" value={galleryTitle} onChange={(e) => setGalleryTitle(e.target.value)} required className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none" placeholder="e.g. Facebook Designs" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-400 mb-2">Direct Links (Paste all links here)</label>
                                        <textarea value={galleryImageUrl} onChange={(e) => setGalleryImageUrl(e.target.value)} required rows={5} className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:outline-none text-xs font-mono" placeholder="https://i.postimg.cc/.../1.jpg&#10;https://i.postimg.cc/.../2.jpg&#10;..."></textarea>
                                        <p className="text-xs text-gray-500 mt-2">ඔයාට එකපාර ෆොටෝස් 10ක 20ක වුණත් ලින්ක්ස් මෙතනට Paste කරන්න පුළුවන්.</p>
                                    </div>
                                    <button type="submit" className="w-full text-white font-bold py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors mt-2">Upload All to Gallery</button>
                                    {galleryStatus.text && <p className={`mt-2 text-center font-bold ${galleryStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{galleryStatus.text}</p>}
                                </form>
                            </div>
                            <div className="lg:col-span-2 bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl">
                                <h2 className="text-xl font-bold mb-6 text-purple-400">Manage Gallery Images</h2>
                                {loadingGallery ? <div className="text-center text-gray-500 py-10">Loading gallery...</div> : galleryImages.length === 0 ? <div className="text-center text-gray-500 py-10 bg-black/30 rounded-xl border border-gray-800">No images in gallery yet.</div> : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {galleryImages.map((image) => (
                                            <div key={image.id} className="bg-black/50 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all group relative">
                                                <div className="aspect-video w-full bg-gray-800">
                                                    <img src={image.imageUrl} alt={image.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300x200?text=No+Image" }} />
                                                </div>
                                                <div className="p-4 flex justify-between items-center">
                                                    <h3 className="font-semibold text-white text-sm truncate pr-2">{image.title}</h3>
                                                    {/* මෙන්න මේ රතු පාට අයිකන් එක එබුවම ඩිලීට් වෙනවා */}
                                                    <button onClick={() => handleDeleteGalleryImage(image.id)} className="p-2 bg-red-900/40 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all flex-shrink-0" title="Delete Image">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}