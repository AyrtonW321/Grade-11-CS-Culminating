import React, { useState } from 'react'; // import react and the useState react hook
import DatePicker from 'react-datepicker'; // import the datepicker template from react
import 'react-datepicker/dist/react-datepicker.css'; // import the datepicker css template
import './SearchBar.css'; //import the css for the search bar

// SearchBar component
// takes the onSearch function as a param
const SearchBar = ({ onSearch }) => {
				// manage the component's state with useState hook
    const [selectedDate, setSelectedDate] = useState(null); // store the selected date from the search, starts off with null
    const [selectedBudget, setSelectedBudget] = useState(0); // store the selected budget from the search, starts off with 0

			// function to handle the input from the user
    const handleInputChange = () => {
        const location = document.querySelector('.location').value; // create constant to hold the location class
        let budget = selectedBudget; // create a variable to hold the selected budget

        // Pass the search criteria to the parent component
        onSearch(location, budget);
    };

    return (
        <div className='searchBarContainer'>
            <h1>Search for your dream destination!</h1>
            <div className='searchBar'>
                <input placeholder='Location' className='location' autoComplete='off' />
                //use the datepicker from react to create the calendar
														<DatePicker
                    selected={selectedDate} // holds the selected state
                    onChange={date => setSelectedDate(date)} // when there is a change to the date, run the setSelectedDate function that will take the date selected and display it
                    placeholderText="Select a date"
                    className='date'
                /> 
                <div className='range'>
                    <label htmlFor="budget">Budget: ${selectedBudget}</label>
                    <div className='field'>
                        <div className='value left'>0</div>
                        // range slider for the budget, min 0 max 3000
																						<input
                            type="range"
                            id="budget"
                            min="0"
                            max="3000"
                            step="100"
                            value={selectedBudget} // the calue will be the selected value
                            onChange={(e) => setSelectedBudget(parseInt(e.target.value))} // when the user scrolls/interacts with the slider take the value that the user slid to and set that as the selected budget
                        />
                        <div className='value right'>3000</div>
                    </div>
                </div>
                <button onClick={handleInputChange}> // when the button is pressed run the handleInput function
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar; //export the SearchBar component