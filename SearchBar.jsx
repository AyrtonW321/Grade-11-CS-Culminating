import React, { useState } from 'react'; // import react and the useState react hook
import DatePicker from 'react-datepicker'; // import the datepicker template from react
import 'react-datepicker/dist/react-datepicker.css'; // import the datepicker css template
import './SearchBar.css'; //import the css for the search bar

// SearchBar fucntion for the 
const SearchBar = ({ onSearch }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedBudget, setSelectedBudget] = useState(0);

    const handleInputChange = () => {
        const location = document.querySelector('.location').value;
        const budget = selectedBudget;

        // Pass the search criteria to the parent component
        onSearch(location, budget);
    };

    return (
        <div className='searchBarContainer'>
            <h1>Search for your dream destination!</h1>
            <div className='searchBar'>
                <input placeholder='Location' className='location' autoComplete='off' />
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    placeholderText="Select a date"
                    className='date'
                />
                <div className='range'>
                    <label htmlFor="budget">Budget: ${selectedBudget}</label>
                    <div className='field'>
                        <div className='value left'>0</div>
                        <input
                            type="range"
                            id="budget"
                            min="0"
                            max="3000"
                            step="100"
                            value={selectedBudget}
                            onChange={(e) => setSelectedBudget(parseInt(e.target.value))}
                        />
                        <div className='value right'>3000</div>
                    </div>
                </div>
                <button onClick={handleInputChange}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;