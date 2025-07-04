import { useLocation, useNavigate } from 'react-router-dom';
import './mobileNav.css';
import logo from '/bptp-logo.png';

// @ts-ignore
const MobileNavbar = ({ isOpen, toggleMenu }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // @ts-ignore
    const handleScroll = (event, id) => {
        event.preventDefault();

        if (location.pathname !== '/') {
            navigate('/');
        }

        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const offset = window.innerHeight * 0.1; // 10% of viewport height
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else if (id === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);

        toggleMenu(); // Close menu after click
    };

    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container' onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-center'>
                    <img src={logo} className='logo' alt="" />
                </div>
                <ul>
                    <li>
                        <a className='menu-item' href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
                    </li>
                    <li>
                        <a className='menu-item' href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
                    </li>
                    <li>
                        <a className='menu-item' href="#overview" onClick={(e) => handleScroll(e, 'overview')}>Overview</a>
                    </li>
                    <li>
                        <a className='menu-item' href="#siteplan" onClick={(e) => handleScroll(e, 'siteplan')}>Site Plan</a>
                    </li>
                    <li>
                        <a className='menu-item' href="#features" onClick={(e) => handleScroll(e, 'features')}>Amenities</a>
                    </li>
                    <li>
                        <a className='menu-item' href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Download Brochure</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileNavbar;
