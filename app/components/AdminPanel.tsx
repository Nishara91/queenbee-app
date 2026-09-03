"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default function AdminPanel() {
    const [inquiries, setInquiries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "inquiries"));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    status: "Pending", // Default status එක Pending විදිහට දෙනවා
                    ...doc.data()
                }));
                data.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
                setInquiries(data);
            } catch (error) {
                console.error("Error fetching inquiries:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInquiries();
    }, []);

    // UPDATE Operation: Status එක Pending හෝ Completed වලට මාරු කිරීම
    const handleStatusChange = async (id: string, newStatus: string) => {
        try {
            const docRef = doc(db, "inquiries", id);
            await updateDoc(docRef, { status: newStatus });
            
            // UI එකත් ඒ විදිහටම update කරනවා
            setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
        } catch (error) {
            console.error("Error updating status: ", error);
            alert("Failed to update status.");
        }
    };

    // DELETE Operation: Inquiries ඉවත් කිරීම
    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this inquiry?")) {
            try {
                await deleteDoc(doc(db, "inquiries", id));
                setInquiries(inquiries.filter(inq => inq.id !== id));
            } catch (error) {
                console.error("Error deleting document: ", error);
                alert("Failed to delete.");
            }
        }
    };

    const exportToCSV = () => {
        const headers = "Date,Name,Email,Phone,Status,Services,Products,Message\n";
        const rows = inquiries.map(inq => {
            const date = inq.createdAt ? new Date(inq.createdAt.toDate()).toLocaleDateString() : "";
            const status = inq.status || "Pending";
            const services = inq.services ? inq.services.join(" | ") : "";
            const products = inq.products ? inq.products.join(" | ") : "";
            const cleanMessage = inq.message?.replace(/(\r\n|\n|\r)/gm, " ") || "";
            return `"${date}","${inq.name}","${inq.email}","${inq.phone}","${status}","${services}","${products}","${cleanMessage}"`;
        }).join("\n");

        const csvContent = "data:text/csv;charset=utf-8," + headers + rows;
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "QueenBee_Inquiries.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#111] to-[#0a0a0a] text-white p-6 md:p-10 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 tracking-tight">
                            Inquiries Dashboard (CRUD)
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">Manage, update status, and track customer requests</p>
                    </div>
                    
                    <button 
                        onClick={exportToCSV} 
                        className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        Export to CSV
                    </button>
                </div>

                {/* Table Section */}
                <div className="bg-[#111111]/80 backdrop-blur-xl rounded-2xl border border-gray-800/60 shadow-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#1a1a1a] border-b border-gray-800">
                                    <th className="p-5 text-xs uppercase tracking-widest text-yellow-500/80 font-bold w-24">Date</th>
                                    <th className="p-5 text-xs uppercase tracking-widest text-yellow-500/80 font-bold w-48">Client Details</th>
                                    <th className="p-5 text-xs uppercase tracking-widest text-yellow-500/80 font-bold min-w-[220px]">Requirements</th>
                                    <th className="p-5 text-xs uppercase tracking-widest text-yellow-500/80 font-bold">Message</th>
                                    <th className="p-5 text-xs uppercase tracking-widest text-yellow-500/80 font-bold w-36 text-center">Status (Update)</th>
                                    <th className="p-5 text-xs uppercase tracking-widest text-yellow-500/80 font-bold text-center w-24">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/50">
                                {inquiries.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="text-center p-12 text-gray-500">
                                            <div className="flex flex-col items-center">
                                                <svg className="w-12 h-12 mb-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                                <p>No inquiries found yet.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    inquiries.map((inq) => (
                                        <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors duration-200">
                                            {/* Date */}
                                            <td className="p-5 align-top">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-300">
                                                    {inq.createdAt ? new Date(inq.createdAt.toDate()).toLocaleDateString() : "N/A"}
                                                </span>
                                            </td>

                                            {/* Client Details */}
                                            <td className="p-5 align-top">
                                                <div className="font-bold text-gray-100 text-base mb-1">{inq.name}</div>
                                                <div className="text-gray-400 text-sm flex items-center gap-2 mt-2">
                                                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                    <a href={`mailto:${inq.email}`} className="hover:text-yellow-500 transition-colors">{inq.email}</a>
                                                </div>
                                                {inq.phone && (
                                                    <div className="text-gray-400 text-sm flex items-center gap-2 mt-1.5">
                                                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                                        {inq.phone}
                                                    </div>
                                                )}
                                            </td>

                                            {/* Requirements */}
                                            <td className="p-5 align-top">
                                                {inq.services && inq.services.length > 0 && (
                                                    <div className="mb-3">
                                                        <div className="text-[10px] uppercase tracking-wider text-yellow-600/70 font-bold mb-1.5">Services</div>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {inq.services.map((srv: string, i: number) => (
                                                                <span key={i} className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded text-[11px] font-medium">
                                                                    {srv}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {inq.products && inq.products.length > 0 && (
                                                    <div>
                                                        <div className="text-[10px] uppercase tracking-wider text-blue-500/70 font-bold mb-1.5">Products</div>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {inq.products.map((prod: string, i: number) => (
                                                                <span key={i} className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[11px] font-medium">
                                                                    {prod}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </td>

                                            {/* Message */}
                                            <td className="p-5 align-top">
                                                <div className="text-gray-300 text-sm leading-relaxed max-w-sm">
                                                    {inq.message || <span className="text-gray-600 italic">No message provided</span>}
                                                </div>
                                            </td>

                                            {/* UPDATE Operation (Status Selector) */}
                                            <td className="p-5 align-top text-center">
                                                <select 
                                                    value={inq.status || "Pending"}
                                                    onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                                                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg border outline-none cursor-pointer transition-all ${
                                                        inq.status === "Completed" 
                                                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" 
                                                            : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                                                    }`}
                                                >
                                                    <option value="Pending" className="bg-gray-900 text-amber-400">Pending</option>
                                                    <option value="Completed" className="bg-gray-900 text-emerald-400">Completed</option>
                                                </select>
                                            </td>

                                            {/* DELETE Operation */}
                                            <td className="p-5 align-top text-center">
                                                <button 
                                                    onClick={() => handleDelete(inq.id)}
                                                    className="bg-red-500/10 text-red-500 hover:bg-red-600 hover:text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border border-red-500/20 shadow-sm"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}