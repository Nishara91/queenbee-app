"use client";
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase"; // මේ path එක ඔයාගේ firebase.ts තියෙන තැනට හරියන්න ඕනේ
import Link from "next/link";

interface GalleryImage {
    id: string;
    title: string;
    imageUrl: string;
}

export default function Gallery() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGalleryImages = async () => {
            try {
                const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                
                const fetchedImages: GalleryImage[] = [];
                querySnapshot.forEach((doc) => {
                    fetchedImages.push({ id: doc.id, ...doc.data() } as GalleryImage);
                });
                
                setImages(fetchedImages);
            } catch (error) {
                console.error("Error fetching gallery images: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGalleryImages();
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Our <span className="text-yellow-500">Creative</span> Gallery
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore our latest designs, projects, and creative works that help brands stand out in the digital world.
                    </p>
                </div>

                {/* Home බට්න් එක */}
                <div className="mb-10">
                    <Link href="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 font-semibold transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Home
                    </Link>
                </div>

                {/* Gallery Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20 bg-gray-900 rounded-3xl border border-gray-800">
                        <p className="text-gray-400 text-lg">New creative works are coming soon! Stay tuned.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {images.map((img) => (
                            <div key={img.id} className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 shadow-lg hover:shadow-yellow-500/10">
                                {/* Image Container */}
                                <div className="aspect-square w-full overflow-hidden">
                                    <img 
                                        src={img.imageUrl} 
                                        alt={img.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x400?text=Image+Not+Found" }}
                                    />
                                </div>
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {img.title}
                                    </h3>
                                    <div className="w-12 h-1 bg-yellow-500 mt-3 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}