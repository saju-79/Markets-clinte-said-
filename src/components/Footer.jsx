import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../Shareeded/Logo";


const Footer = () => {
    const socialLinks = [
        { icon: <FaFacebookF size={24} />, url: "https://facebook.com", name: "Facebook" },
        { icon: <FaTwitter size={24} />, url: "https://twitter.com", name: "Twitter" },
        { icon: <FaInstagram size={24} />, url: "https://instagram.com", name: "Instagram" },
        { icon: <FaLinkedinIn size={24} />, url: "https://linkedin.com", name: "LinkedIn" },
    ];

    return (
        <footer className="bg-base-200 text-base-content py-10 mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Name */}
                <div className="flex flex-col items-start gap-2">
                    <Logo></Logo>
                    <p className="text-sm text-gray-500">
                        Track daily prices of essential items from local markets.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-3">Contact Us</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                        <li>Email: <a href="mailto:support@marketpulse.com" className="hover:text-primary">support@marketpulse.com</a></li>
                        <li>Phone: <a href="tel:+880123456789" className="hover:text-primary">+880 1234 567 89</a></li>
                        <li>Address: 123 Market St, Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-3">Important Links</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                        <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
                        <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                        <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-square btn-sm btn-ghost  hover:bg-primary hover:text-white transition-colors duration-300"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-500 text-sm mt-10 border-t border-base-300 pt-4">
                &copy; {new Date().getFullYear()} MarketPulse. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;