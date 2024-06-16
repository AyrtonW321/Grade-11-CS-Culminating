import React, { useState, useEffect } from 'react'; //import react and the useState and useEffect react hooks
import { Link, useNavigate } from 'react-router-dom'; // import Link and useNavigate from react router dom
import './Navbar.css'; // import the NavBar css file

// NavBar component
// takes the login info
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false); // 
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const handleAccountRedirect = () => {
        navigate('/account');
    }

    const handleSignOut = () => {
        if (window.confirm("Are you sure you want to sign out?")) {
            localStorage.removeItem('loggedInUser');
            setIsLoggedIn(false);
            navigate('/login');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="header" className={isScrolled ? 'sticky' : ''}>
            <a href='/' className='logo'><img src='airplaneLogo.png' width={50} alt="Logo" /></a>
            <nav className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/destinations'>Destinations</Link>
                <div className='dropdown'>
                    <button onClick={toggleDropdown} className='dropbtn'>Profile</button>
                    <div id="myDropdown" className={`dropdownContent ${dropdownOpen ? 'show' : ''}`}>
                        {isLoggedIn ? (
                            <>
                                <a onClick={handleAccountRedirect}>Account</a>
                                <a onClick={handleSignOut}>Sign Out</a>
                            </>
                        ) : (
                            <>
                                <a onClick={handleAccountRedirect}>Account</a>
                                <a onClick={handleLoginRedirect}>Login</a>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
