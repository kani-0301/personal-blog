import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-divider"></div>
            <div className="container footer-content">
                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FiTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FiInstagram />
                    </a>
                </div>
                <p className="footer-text">
                    © 2026 Kanini · <span className="accent-text">Crafted with words and code</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
