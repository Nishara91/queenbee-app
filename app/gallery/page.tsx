import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";

export default function GalleryPage() {
    return (
        <main className="bg-black min-h-screen text-white flex flex-col">
            <Navbar />
            
            {/* මුළු පේජ් එක පුරාම ගැලරි එක පේන්න */}
            <div className="flex-grow flex items-center justify-center pt-10 pb-20">
                <div className="w-full">
                    <Gallery />
                </div>
            </div>

            <Footer />
        </main>
    );
}