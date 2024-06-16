import React, { useState } from 'react'; // import React and hooks
import './styles.css'; // import CSS file
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa"; // import icons from react icons
import { useNavigate } from 'react-router-dom'; // import useNavigate from react-router-dom
import Navbar from '../feature/Navbar'; // import Navbar component
import SearchBar from '../feature/SearchBar'; // import SearchBar component

// login function that controls the entire login page (arrow function)
// MainPage Component
const MainPage = ({ isLoggedIn, setIsLoggedIn }) => {
    const [selectedCountry, setSelectedCountry] = useState('Canada');

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    const canadaCities = new Array(3);
    canadaCities[0] = 'Banff, AB';
    canadaCities[1] = 'Hopewell Rocks, NB';
    canadaCities[2] = 'Hotel Toronto, ON';

    const canadaProvinces = new Array(3);
    canadaProvinces[0] = 'Alberta';
    canadaProvinces[1] = 'New Brunswick';
    canadaProvinces[2] = 'Ontario';

    const canadaImgs = new Array(3);
    canadaImgs[0] = './imgs/banff.jpg';
    canadaImgs[1] = './imgs/hopewell.jpg';
    canadaImgs[2] = './imgs/hotelToronto.jpg';

    const canadaPrices = new Array(3);
    canadaPrices[0] = 1000;
    canadaPrices[1] = 1500;
    canadaPrices[2] = 2000;

    const usCities = new Array(3);
    usCities[0] = 'Grand Canyon, AZ';
    usCities[1] = 'Honolulu, HI';
    usCities[2] = 'New York City, NY';

    const usStates = new Array(3);
    usStates[0] = 'Arizona';
    usStates[1] = 'Hawaii';
    usStates[2] = 'New York';

    const usImgs = new Array(3);
    usImgs[0] = './imgs/grandCanyon.jpg';
    usImgs[1] = './imgs/honolulu.jpg';
    usImgs[2] = './imgs/empireState.jpg';

    const usPrices = new Array(3);
    usPrices[0] = 1200;
    usPrices[1] = 1800;
    usPrices[2] = 2500;

    const mexicoCities = new Array(3);
    mexicoCities[0] = 'Cancun';
    mexicoCities[1] = 'Mexico City';
    mexicoCities[2] = 'Tulum';

    const mexicoImgs = new Array(3);
    mexicoImgs[0] = './imgs/cancun.jpg';
    mexicoImgs[1] = './imgs/mexicoCity.jpg';
    mexicoImgs[2] = './imgs/tulum.jpg';

    const mexicoPrices = new Array(3);
    mexicoPrices[0] = 800;
    mexicoPrices[1] = 1200;
    mexicoPrices[2] = 1500;


    return (
        <React.StrictMode>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <SearchBar />

            <div className='destinationContainer'>
                <div className='headerContainer'>
                    <h1>Take a look at these Destinations in {selectedCountry}!</h1>
                    <div className='countries'>
                        {['Canada', 'US', 'Mexico'].map((country) => (
                            <a
                                key={country}
                                href="#"
                                className={`countryLink ${selectedCountry === country ? 'selected' : ''}`}
                                onClick={() => handleCountryClick(country)}
                            >
                                {country}
                            </a>
                        ))}
                    </div>
                </div>
                <div className='destinationGrid'>
                    {selectedCountry === 'Canada' && canadaCities.map((city, index) => (
                        <div key={index} className={`destination destination${index + 1}`}>
                            <img src={canadaImgs[index]} alt={city} />
                            <h2>{city}</h2>
                            <p>Province: {canadaProvinces[index]}</p>
                            <p>Price: ${canadaPrices[index]}</p>
                            <button>Check Destination</button>
                        </div>
                    ))}
                    {selectedCountry === 'US' && usCities.map((city, index) => (
                        <div key={index} className={`destination destination${index + 1}`}>
                            <img src={usImgs[index]} alt={city} />
                            <h2>{city}</h2>
                            <p>State: {usStates[index]}</p>
                            <p>Price: ${usPrices[index]}</p>
                            <button>Check Destination</button>
                        </div>
                    ))}
                    {selectedCountry === 'Mexico' && mexicoCities.map((city, index) => (
                        <div key={index} className={`destination destination${index + 1}`}>
                            <img src={mexicoImgs[index]} alt={city} />
                            <h2>{city}</h2>
                            <p>Price: ${mexicoPrices[index]}</p>
                            <button>Check Destination</button>
                        </div>
                    ))}
                </div>
            </div>
        </React.StrictMode>
    );
};
const Destinations = ({ setUpcomingTrips, isLoggedIn, setIsLoggedIn }) => {
    // Arrays holding destination data
    const canadaCities = new Array(3);
    canadaCities[0] = 'Banff, AB';
    canadaCities[1] = 'Hopewell Rocks, NB';
    canadaCities[2] = 'Hotel Toronto, ON';

    const canadaProvinces = new Array(3);
    canadaProvinces[0] = 'Alberta';
    canadaProvinces[1] = 'New Brunswick';
    canadaProvinces[2] = 'Ontario';

    const canadaImgs = new Array(3);
    canadaImgs[0] = './imgs/banff.jpg';
    canadaImgs[1] = './imgs/hopewell.jpg';
    canadaImgs[2] = './imgs/hotelToronto.jpg';

    const canadaPrices = new Array(3);
    canadaPrices[0] = 1000;
    canadaPrices[1] = 1500;
    canadaPrices[2] = 2000;

    const usCities = new Array(3);
    usCities[0] = 'Grand Canyon, AZ';
    usCities[1] = 'Honolulu, HI';
    usCities[2] = 'New York City, NY';

    const usStates = new Array(3);
    usStates[0] = 'Arizona';
    usStates[1] = 'Hawaii';
    usStates[2] = 'New York';

    const usImgs = new Array(3);
    usImgs[0] = './imgs/grandCanyon.jpg';
    usImgs[1] = './imgs/honolulu.jpg';
    usImgs[2] = './imgs/empireState.jpg';

    const usPrices = new Array(3);
    usPrices[0] = 1200;
    usPrices[1] = 1800;
    usPrices[2] = 2500;

    const mexicoCities = new Array(3);
    mexicoCities[0] = 'Cancun';
    mexicoCities[1] = 'Mexico City';
    mexicoCities[2] = 'Tulum';

    const mexicoImgs = new Array(3);
    mexicoImgs[0] = './imgs/cancun.jpg';
    mexicoImgs[1] = './imgs/mexicoCity.jpg';
    mexicoImgs[2] = './imgs/tulum.jpg';

    const mexicoPrices = new Array(3);
    mexicoPrices[0] = 800;
    mexicoPrices[1] = 1200;
    mexicoPrices[2] = 1500;

    // Array to hold all destinations
    const allDestinations = [];

    // Adding Canadian destinations to allDestinations
    for (let i = 0; i < canadaCities.length; i++) {
        allDestinations.push([
            'Canada',
            canadaCities[i],
            canadaProvinces[i],
            canadaImgs[i],
            canadaPrices[i]
        ]);
    }

    // Adding US destinations to allDestinations
    for (let i = 0; i < usCities.length; i++) {
        allDestinations.push([
            'US',
            usCities[i],
            usStates[i],
            usImgs[i],
            usPrices[i]
        ]);
    }

    // Adding Mexican destinations to allDestinations
    for (let i = 0; i < mexicoCities.length; i++) {
        allDestinations.push([
            'Mexico',
            mexicoCities[i],
            null, // No state/province for Mexico
            mexicoImgs[i],
            mexicoPrices[i]
        ]);
    }

    const [sortedDestinations, setSortedDestinations] = useState(allDestinations);

    function sortByPriceHighLow() {
        const sorted = selectionSort([...sortedDestinations], function (a, b) { return b[4] - a[4]; });
        setSortedDestinations(sorted);
    }

    function sortByPriceLowHigh() {
        const sorted = selectionSort([...sortedDestinations], function (a, b) { return a[4] - b[4]; });
        setSortedDestinations(sorted);
    }

    function handleReset() {
        setSortedDestinations(allDestinations);
    }

    const handleSearch = (location, budget) => {
        const filteredDestinations = [];

        for (let i = 0; i < allDestinations.length; i++) {
            const destination = allDestinations[i];
            const matchesLocation = !location ||
                destination[1].toLowerCase().includes(location.toLowerCase()) ||
                (destination[2] && destination[2].toLowerCase().includes(location.toLowerCase())) ||
                destination[0].toLowerCase().includes(location.toLowerCase());

            const matchesBudget = destination[4] <= budget || budget === 0;

            if (matchesLocation && matchesBudget) {
                filteredDestinations.push(destination);
            }
        }

        setSortedDestinations(filteredDestinations);
    };

    const addToCart = (destination) => {
        setUpcomingTrips(prevTrips => [...prevTrips, destination]);
        alert('Trip added to cart');
    };

    return (
        <React.StrictMode>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <SearchBar onSearch={handleSearch} />

            <div className='allDestinationContainer'>
                <h1>Take a look at all these destinations!</h1>
                <div id="sort" className='sortContent'>
                    <a href="#" onClick={sortByPriceHighLow}>Sort Price: High-Low</a>
                    <a href="#" onClick={sortByPriceLowHigh}>Sort Price: Low-High</a>
                    <a onClick={handleReset}>Reset</a>
                </div>
                <div className='allDestinationGridContainer'>
                    {sortedDestinations.map((destination, index) => (
                        <div key={index} className='allDestination'>
                            <img src={destination[3]} alt={destination[1]} />
                            <div className='destinationInfo'>
                                <h2>{destination[1]}</h2>
                                {destination[2] && <p>Province/State: {destination[2]}</p>}
                                <p>Price: ${destination[4]}</p>
                                <button onClick={() => addToCart({
                                    country: destination[0],
                                    city: destination[1],
                                    province: destination[2] ? destination[2] : null,
                                    state: destination[2] ? destination[2] : null,
                                    image: destination[3],
                                    price: destination[4]
                                })}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.StrictMode>
    );
};

function selectionSort(array, compare) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (compare(array[j], array[minIndex]) < 0) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

const Account = ({ userData, setIsLoggedIn, upcomingTrips, removeUpcomingTrip, setUserData, isLoggedIn}) => {
    const navigate = useNavigate();

    const cancelTrip = (index) => {
        removeUpcomingTrip(index);
        alert('Trip cancelled');
    };

    const handleDeleteAccount = () => {
        const passwordPrompt = prompt('Enter your password to delete the account:');

        if (passwordPrompt !== null) {
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            let updatedUsers = new Array(storedUsers.length - 1);
            let isPasswordCorrect = false;
            let index = 0;

            for (let i = 0; i < storedUsers.length; i++) {
                if (storedUsers[i].username === userData.username && storedUsers[i].password === passwordPrompt) {
                    isPasswordCorrect = true;
                } else {
                    updatedUsers[index] = storedUsers[i];
                    index++;
                }
            }

            if (isPasswordCorrect) {
                localStorage.setItem('users', JSON.stringify(updatedUsers));
                localStorage.removeItem('loggedInUser');
                setIsLoggedIn(false);
                setUserData({ username: '', email: '', password: '' }); // Reset userData to empty values
                removeUpcomingTrip(index);
                navigate('/login');
                alert('Account deleted successfully');
            } else {
                alert('Incorrect password. Account not deleted.');
            }
        }
    };

    return (
        <React.StrictMode>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div className='accountContainer'>
                <h1>My Details</h1>
                <hr />
                <div className='accountInfo'>
                    <h2>Personal Information</h2>
                    <label htmlFor='enteredUsername'>Username: </label>
                    <div className='inputBox2 userUsername'>
                        <input className='enteredUsername' value={userData.username} disabled />
                    </div>
                    <label htmlFor='enteredEmail'>Email: </label>
                    <div className='inputBox2 userEmail'>
                        <input className='enteredEmail' value={userData.email} disabled />
                    </div>
                    <label htmlFor='enteredPassword'>Password: </label>
                    <div className='inputBox2 userPassword'>
                        <input className='enteredPassword' value={userData.password} type="password" disabled />
                    </div>
                </div>
                <hr />
                <div className='upcomingTrip'>
                    <h2>Upcoming Trips</h2>
                    {upcomingTrips.map((destination, index) => (
                        <div key={index} className='checkDestination'>
                            <img src={destination.image} alt={destination.city} />
                            <h1>{destination.city}</h1>
                            <div className='information'>
                                <p>Price: ${destination.price}</p>
                                {destination.province && <p>Province: {destination.province}</p>}
                                {destination.state && <p>State: {destination.state}</p>}
                                <button onClick={() => cancelTrip(index)}>Cancel Trip</button>
                            </div>
                        </div>
                    ))}
                    <hr />
                </div>
                <div className='accountDelete'>
                    <button onClick={handleDeleteAccount}>
                        Delete Account
                    </button>
                </div>
            </div>
        </React.StrictMode>
    );
};

// Login Component
const Login = ({ setIsLoggedIn, setUserData }) => {
    const [action, setAction] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // validate email function, takes email entered as a param
    function isValidEmail(email) {
        const trimmedEmail = email.trim(); // trim the email input
        const commonSuffixes = ['gmail.com', 'yahoo.com', 'hotmail.com', 'gapps.yrdsb.ca']; // list of all the valid email domains

        // see if the email domain is after the @ symbol
        const emailDomain = trimmedEmail.substring(trimmedEmail.lastIndexOf('@') + 1);

        // return if the input includes the domain
        // yes true, no false
        return commonSuffixes.includes(emailDomain);
    }

    // function to check if the password inputted is meets all the criteria and take the inputted password as a param
    function isValidPassword(password) {
        // check to see if the password length is less than 8
        if (password.length < 8) {
            return false;
        }

        // use regular expressions to check if the password has any symbols in it
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        // use test to see if it finds a match in the string
        if (!specialCharRegex.test(password)) {
            return false; // return false if it doesn't
        }

        // check if there are any capitals in the password by comparing the lowercased verson to the regular version
        if (password.toLowerCase() === password) {
            return false;
        }

        // use containsNumber function and use the password as a param
        // checks to see if there is a number in the string
        if (!containsNumber(password)) {
            return false;
        }
        return true; // return true if pass
    }

    // function to see if there is a number in the input and takes the input as a param
    function containsNumber(input) {
        // use split to split the input into an array
        const characters = input.split('');

        // use for loop to loop through all of the characters
        for (let char of characters) {
            // use !isNan to see if there is s number
            // parseInt to convert the strings to integers
            if (!isNaN(parseInt(char))) {
                return true;
            }
        }
        return false; // return false if doesnt pass 
    }


    const handleRegister = (e) => {
        e.preventDefault();

        const trimmedUsername = username.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (trimmedUsername.length < 3 || trimmedUsername.length > 15 || trimmedUsername[0] !== trimmedUsername[0].toUpperCase()) {
            alert('Username must be within 3 and 15 characters long, and start with a capital letter');
            return;
        }

        if (!isValidEmail(trimmedEmail)) {
            alert('Invalid email address');
            return;
        }

        if (!isValidPassword(trimmedPassword)) {
            alert('Invalid password. Must be at least 8 characters long, contain at least one special character, one capital letter, and one number.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === trimmedUsername);

        if (userExists) {
            alert('User already exists');
        } else {
            const newUser = { username: trimmedUsername, email: trimmedEmail, password: trimmedPassword };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('loggedInUser', JSON.stringify(newUser));
            alert('User registration successful');
            setUserData(newUser);
            setIsLoggedIn(true);
            navigate('/');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const inputUsername = username.trim();
        const inputPassword = password.trim();

        const matchedUser = storedUsers.find(user => user.username === inputUsername);

        if (!matchedUser) {
            alert('User not found');
            return;
        }

        if (matchedUser.password !== inputPassword) {
            alert('Incorrect password');
            return;
        }

        alert('Login successful');
        localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
        setUserData(matchedUser);
        setIsLoggedIn(true);
        navigate('/');
    };

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <React.StrictMode>
            <div className={`container${action}`}>
                <div className='formBox login'>
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className='inputBox'>
                            <input
                                type='text'
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <FaUser className='icon' />
                        </div>
                        <div className='inputBox'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="button" onClick={toggleShowPassword}>
                                {showPassword ? <FaEyeSlash className='icon' id='eye' /> : <FaEye className='icon' id='eye' />}
                            </button>
                            <FaLock className='icon' />
                        </div>
                        <div className='rememberForgot'>
                            <label>
                                <input className='checkbox' type='checkbox' />
                                Remember me
                            </label>
                            <a href='#'>Forgot Password?</a>
                        </div>

                        <button className='submit' type='submit'>Login</button>

                        <div className='register'>
                            <p>Don't have an account? <a href='#' onClick={registerLink}>Register</a></p>
                        </div>
                    </form>
                </div>
                <div className='formBox register'>
                    <form onSubmit={handleRegister}>
                        <h1>Register Account</h1>
                        <div className='inputBox'>
                            <input
                                type='text'
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <FaUser className='icon' />
                        </div>
                        <div className='inputBox'>
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <FaEnvelope className='icon' />
                        </div>
                        <div className='inputBox'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="button" onClick={toggleShowPassword}>
                                {showPassword ? <FaEyeSlash className='icon' id='eye' /> : <FaEye className='icon' id='eye' />}
                            </button>
                            <FaLock className='icon' />
                        </div>
                        <div className='rememberForgot'>
                            <label>
                                <input className='checkbox' type='checkbox' required />
                                I agree to the terms & conditions
                            </label>
                        </div>

                        <button className='submit' type='submit'>Register</button>

                        <div className='register'>
                            <p>Already have an account? <a href='#' onClick={loginLink}>Log In</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </React.StrictMode>
    );
};

export { MainPage, Login, Destinations, Account };