import Link from "next/link";
// ෆේස්බුක් අයිකන් එකට (react-icons)

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400 border-t border-gray-900 pt-16 pb-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                
                {/* 1st Column: Brand Info & Socials */}
                <div>
                    <h3 className="text-2xl font-extrabold text-white mb-4">
                        Queen<span className="text-yellow-500">Bee</span>
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 text-gray-400">
                        Empowering businesses worldwide with state-of-the-art digital marketing solutions, custom web development, and creative advertising.
                    </p>
                    
                    {/* Social Media Link */}
                    <div className="flex items-center space-x-4">
                        <a 
                            href="https://www.facebook.com/profile.php?id=61550809588901" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-gray-950 transition-all duration-300"
                            title="Facebook"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* 2nd Column: Quick Links */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="#home" className="hover:text-yellow-500 transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link href="#services" className="hover:text-yellow-500 transition-colors">Services</Link>
                        </li>
                        <li>
                            <Link href="#portfolio" className="hover:text-yellow-500 transition-colors">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="#contact" className="hover:text-yellow-500 transition-colors">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* 3rd Column: Get In Touch (Real Info) */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Get In Touch</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <span className="text-gray-500 block text-xs">Email:</span>
                            <a href="mailto:advertisingqueenbee@gmail.com" className="text-white hover:text-yellow-500 transition-colors">
                                advertisingqueenbee@gmail.com
                            </a>
                        </li>
                        <li>
                            <span className="text-gray-500 block text-xs">Phone / WhatsApp:</span>
                            <a href="https://wa.me/94766620226" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition-colors">
                                +94 76 662 0226
                            </a>
                        </li>
                        <li>
                            <span className="text-gray-500 block text-xs">Location:</span>
                            <span className="text-white">Sri Lanka / Global</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Copyright (Designed by අයින් කළා, අවුරුද්ද ඉබේ වෙනස් වෙන්න හැදුවා) */}
            <div className="max-w-7xl mx-auto border-t border-gray-900 pt-8 flex justify-center items-center text-xs text-gray-500">
                <p>© {new Date().getFullYear()} Queen Bee Digital Marketing. All rights reserved.</p>
            </div>
        </footer>
    );
}