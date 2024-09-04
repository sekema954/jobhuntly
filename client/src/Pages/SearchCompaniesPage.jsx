import React, { useState, useCallback } from 'react';
import SearchCompanies from '../Components/SearchCompanies';
import _ from 'lodash';

function SearchCompaniesPage() {
  const [companyName, setCompanyName] = useState('');
  const [companyInfo, setCompanyInfo] = useState([]);
  const [logos, setLogos] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const resultsPerPage = 10;

  const fetchLogo = async (companyName) => {
    const url = `https://indeed12.p.rapidapi.com/company/${encodeURIComponent(companyName)}?locality=us`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': process.env.REACT_APP_API_HOST,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP request failed! Error: ${response.status}`);
      }
      const result = await response.json();
      return result.logo_url || null;
      const companyLink = result.indeed_final_url;

    } catch (error) {
      console.error(`Failed to fetch logo for ${companyName}`, error);
      return null;
    }
  };

  const fetchCompanyJobs = async (company, page = 1) => {
    const url = `https://indeed12.p.rapidapi.com/company/${encodeURIComponent(company)}/jobs?locality=us&start=${(page - 1) * resultsPerPage + 1}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': 'indeed12.p.rapidapi.com'
      }
    };

    setLoading(true);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP request failed! Error: ${response.status}`);
      }
      const result = await response.json();

      const totalResults = result.hits.length; // Adjust if API provides total results
      const modifiedResult = result.hits.slice(0, resultsPerPage);

      setCompanyInfo(modifiedResult);
      setTotalPages(Math.ceil(totalResults / resultsPerPage));

      // Fetch and store the logo after fetching the company jobs
      const logoUrl = await fetchLogo(company);
      setLogos((prevLogos) => ({ ...prevLogos, [company]: logoUrl }));

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchCompanyJobs = useCallback(_.debounce(fetchCompanyJobs, 300), []);

  const handleSearch = (searchTerm) => {
    setCompanyName(searchTerm);
    setCurrentPage(1); // Reset to the first page on new search
    debouncedFetchCompanyJobs(searchTerm, 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchCompanyJobs(companyName, page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow && endPage < totalPages) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center overflow-x-auto py-4">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 mx-1 rounded bg-purple-600 text-white"
          >
            &laquo;
          </button>
        )}
        {startPage > 1 && (
          <>
            <span className="px-4 py-2 mx-1">...</span>
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 mx-1 rounded ${currentPage === page ? 'bg-purple-600 text-white' : 'bg-purple-300'}`}
              >
                {page}
              </button>
            ))}
          </>
        )}
        {endPage < totalPages && (
          <>
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 mx-1 rounded ${currentPage === page ? 'bg-purple-600 text-white' : 'bg-purple-300'}`}
              >
                {page}
              </button>
            ))}
            <span className="px-4 py-2 mx-1">...</span>
          </>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 mx-1 rounded bg-purple-600 text-white"
          >
            &raquo;
          </button>
        )}
      </div>
    );
  };

  return (
    <div>
      <SearchCompanies onSearch={handleSearch} />
      <div className='flex items-center justify-center flex-wrap py-10'>
        {loading && <p className="text-center">Loading...</p>}
        <div className='flex flex-wrap justify-center gap-[20px]'>
          {companyInfo.length > 0 ? (
            companyInfo.map((job) => (
              <a key={job.id}  href={job.indeed_final_url || `https://www.indeed.com/cmp/${companyName}`} target="_blank" rel="noopener noreferrer" className='block w-full md:w-[480px] no-underline'>
                <div className='border bg-white shadow-lg px-5 py-5 flex items-center md:h-[170px]'>
                  <div className={`w-[50px] h-[50px] rounded-full border flex items-center justify-center ${!logos[companyName] ? 'bg-black' : ''}`}>
                    {logos[companyName] ? (
                      <img
                        src={logos[companyName]}
                        alt={`${companyName} logo`}
                        className='w-full h-full object-cover rounded-full'
                      />
                    ) : (
                      <span className="text-white">N/A</span>
                    )}
                  </div>
                  <div className='ml-5 flex-grow'>
                    <span className='block font-bold text-lg'>{job.title}</span>
                    <p className='text-sm text-gray-500 my-3'>
                      <span>{companyName}</span>
                      <span> {job.location}</span>
                    </p>
                    <span className='inline-block px-2 py-1 rounded-full text-[#56CDAD] bg-[#56CDAD] bg-opacity-20 text-sm'>
                      Full Time
                    </span>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className='mt-4 text-center'>No Positions Were found from this Company...</p>
          )}
        </div>
        {totalPages > 1 && renderPagination()}
      </div>
    </div>
  );
}

export default SearchCompaniesPage;
