import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../UI/ThemeToggle';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="header glass">
            <div className="container header-content">
                <Link to="/" className="logo">
                    Kanini's Blog
                </Link>

                <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    <Link to="/books" onClick={() => setMobileMenuOpen(false)}>Books</Link>
                    <Link to="/poems" onClick={() => setMobileMenuOpen(false)}>Poems</Link>
                    <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                </nav>

                <div className="header-actions">
                    <ThemeToggle />
                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
