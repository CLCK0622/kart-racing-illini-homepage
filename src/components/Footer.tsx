import {FaDiscord, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="w-full py-8 px-6 md:px-12 border-t border-white/10 flex justify-center items-center text-white text-xs z-20 relative">
            <p>&copy; {new Date().getFullYear()} Kart Racing Illini. All rights reserved.</p>
            {/*<div className="flex gap-4 text-lg">*/}
            {/*    <FaInstagram className="hover:text-white cursor-pointer transition-colors"/>*/}
            {/*    <FaDiscord className="hover:text-white cursor-pointer transition-colors"/>*/}
            {/*</div>*/}
        </footer>
    );
}

export default Footer;