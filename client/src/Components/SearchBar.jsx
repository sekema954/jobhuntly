import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearch }) {
  const [searchTitle, setSearchTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search Term:', searchTitle); // Log the search term
    console.log('Location:', location); // Log the location
    onSearch(searchTitle, location);
  };

  return (
    <div className='flex justify-center'>
      <div className='bg-white lg:w-[60%] h-auto py-4 lg:h-[60px] left-[5%] flex flex-col lg:flex-row items-center justify-between px-6 rounded-lg shadow-md'>
        <div className='flex items-center w-full md:w-auto mb-4 md:mb-0'>
          <FontAwesomeIcon className='mx-2 md:mx-4' icon={faSearch} />
          <input
            className='w-full md:w-auto mx-2 md:mx-4 border py-1 px-3 rounded-md'
            type="text"
            value={searchTitle}
            onChange={handleSearchChange}
            placeholder='Job title or keyword'
          />
        </div>

        <div className='flex items-center w-full md:w-auto mb-4 md:mb-0'>
          <FontAwesomeIcon className='mx-2 md:mx-4' icon={faMapPin} />
          <select
            className='w-full md:w-auto mx-2 md:mx-4 border py-2 px-5 rounded-md'
            defaultValue="select"
            onChange={handleLocationChange}
          >
            <option value="select" disabled>Select Location</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>

        <div className='w-full md:w-auto'>
          <button
            className='w-full md:w-[160px] bg-[#4640DE] py-2 text-white rounded-md hover:bg-hoverColor transition-all duration-[.5s]'
            type='button'
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
