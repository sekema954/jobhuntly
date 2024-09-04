import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';

function SearchJobs() {
  const [jobs, setJobs] = useState([]);
  const [logos, setLogos] = useState({}); // State to store logos
  const [loading, setLoading] = useState(false);

  const fetchLogo = async (companyName) => {
    const url = `https://indeed12.p.rapidapi.com/company/${encodeURIComponent(companyName)}?locality=us`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP request failed! Error: ${response.status}`);
      }
      const result = await response.json();
      return result.logo_url || null;
    } catch (error) {
      console.error(`Failed to fetch logo for ${companyName}`, error);
      return null;
    }
  };

  const fetchJobs = async (jobTitle, location) => {
    setLoading(true);
    const url = `https://indeed12.p.rapidapi.com/jobs/search?query=${jobTitle}&location=${location}&page_id=1&locality=us&fromage=1&radius=25`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.hits) {
        const jobArray = Object.values(data.hits);
        setJobs(jobArray);

        // Fetch logos for each company
        const logosMap = {};
        for (const job of jobArray) {
          if (job.company_name) {
            const logoUrl = await fetchLogo(job.company_name);
            logosMap[job.company_name] = logoUrl;
          }
        }
        setLogos(logosMap);
      } else {
        setJobs([]); // In case hits is not present
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]); // Set jobs to an empty array on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={fetchJobs} />
      <div className='flex items-center flex-wrap justify-center gap-[20px] py-[30px]'>
        {loading && <p className="text-center">Loading...</p>}
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <a key={index} href={job.link}>
              <div className="w-[250px] border px-4 py-4 hover:scale-[1.1] hover:shadow-custom-dark transition-all duration-[.5s]">
                <div className="flex justify-between">
                  <div
                    className={`w-[50px] h-[50px] rounded-full border flex items-center justify-center ${!logos[job.company_name] ? 'bg-black' : ''}`}>
                    {logos[job.company_name] ? (
                      <img
                        src={logos[job.company_name]}
                        alt={`${job.company_name} logo`}
                        className="object-contain w-full h-full rounded-full"
                      />
                    ) : (
                      <span className="text-white">N/A</span>
                    )}
                  </div>
                  <p className="border border-purple-200 px-2 h-[35px] flex items-center text-center">
                    Full Time
                  </p>
                </div>
                <div className="mt-6 py-2">
                  <p className="font-[600]">{job.title}</p>
                  <span className="text-[12px] text-gray-500">
                    {job.company_name} <span>.</span> <span>{job.location}</span>
                  </span>
                </div>
                <div>
                  <span className="text-[13px]">
                    {job.description || 'No description available'}
                  </span>
                </div>
              </div>
            </a>
          ))
        ) : (
          <p className=' flex text-center justify-center items-center py-5'>Search for Jobs.</p>
        )}
      </div>
    </div>
  );
}

export default SearchJobs;
