"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
// ඔයාගේ firebase.ts එක තියෙන තැනට path එක හරියටම දෙන්න
import { db } from "../../firebase"; 

// Project එකේ හැඩය (TypeScript Type එක)
interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
}

export default function Portfolio() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // අලුත්ම Projects මුලින් එන්න order කරනවා
                const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                
                const fetchedProjects: Project[] = [];
                querySnapshot.forEach((doc) => {
                    fetchedProjects.push({ id: doc.id, ...doc.data() } as Project);
                });
                
                setProjects(fetchedProjects);
            } catch (error) {
                console.error("Error fetching projects: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="portfolio" className="py-24 px-6 bg-gray-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-down" className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">Our Work</h2>
                    <h3 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-extrabold text-white">Recent Projects</h3>
                    <p data-aos="fade-up" data-aos-delay="200" className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
                        Take a look at some of the real-world projects, businesses, and digital platforms we have successfully managed.
                    </p>
                </div>

                {/* Loading පෙන්නන කොටස */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        No projects available yet. Add some from the Admin Panel!
                    </div>
                ) : (
                    /* අලුත් Portfolio Gallery Wrapper (Horizontal Scroll) */
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 pt-4 hide-scrollbar">
                        {projects.map((project, index) => (
                            <div 
                                key={project.id} 
                                data-aos="zoom-in-up" 
                                data-aos-delay={index * 100} 
                                // මෙතන තමයි අලුත් ඩිසයින් එකට අදාල කෑලි ටික තියෙන්නේ
                                className="snap-center shrink-0 w-[85vw] md:w-[400px] h-full flex flex-col group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-xl"
                            >
                                <div className="aspect-video overflow-hidden relative bg-black">
                                    <img 
                                        src={project.imageUrl} 
                                        alt={project.title} 
                                        // පින්තූරේ වැරදි ලින්ක් එකක් නම් default පින්තූරයක් පෙන්නන්න
                                        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" }}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wider">{project.category}</span>
                                    <h4 className="text-xl font-bold mt-1 mb-2 text-white">{project.title}</h4>
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}