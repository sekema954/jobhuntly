import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchCompanies({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='flex justify-center'>   
      <div className='bg-white lg:w-[60%] h-auto py-4 lg:h-[60px] left-[5%] flex flex-col lg:flex-row items-center justify-between px-6 rounded-lg shadow-md'>
        <div className='flex items-center w-full md:w-auto mb-4 md:mb-0'>
          <FontAwesomeIcon className='mx-2 md:mx-4' icon={faSearch} />
          <input
            className='w-full md:w-auto mx-2 md:mx-4 border py-1 px-3 rounded-md'
            type="text"
            placeholder='Microsoft'
            value={searchTerm}
            onChange={handleInputChange}
          />
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

export default SearchCompanies;
