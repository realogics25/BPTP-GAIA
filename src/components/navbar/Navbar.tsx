import './navbar.css';
import logo from '/bptp-logo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';
import MobileNavbar from '../mobile-navbar/MobileNavbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    //@ts-ignore
    const handleScroll = (event, id) => {
        event.preventDefault();

        // If not on the homepage, navigate to "/"
        if (location.pathname !== '/') {
            navigate('/');
        }

        // Scroll to target after slight delay (for navigation to finish)
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const offset = window.innerHeight * 0.15; // 10% of viewport height
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100); // slight delay to ensure DOM is ready
    }

    return (
        <>
            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className='nav-wrapper border-b-[0.1px] border-secondary'>
                <div className='nav-content'>
                    <a href="#home">
                        <img
                            src={logo}
                            className='logo cursor-pointer'
                            alt=""
                            onClick={(e) => handleScroll(e, 'home')}
                        />
                    </a>
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

                    <a href="tel:+919999221307">
                        <div className={`contact-button-nav border-2 border-black py-2 px-3 rounded-md cursor-pointer bg-white text-black flex items-center gap-2`}
                        >
                            <FaPhoneAlt />
                            <p className="text-md font-normal">+91 9999221307</p>
                        </div>
                    </a>


                    <div className='flex items-center gap-3'>
                        <button className='menu-btn' onClick={toggleMenu}>
                            {openMenu
                                ? <IoClose size={'30px'} color='#000' />
                                : <IoMenu size={'30px'} color='#000' />
                            }
                        </button>
                        <a href="tel:+919999221307" className='contact-icon hidden'>
                            <FaPhoneAlt />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
