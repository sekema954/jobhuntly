import React, { useEffect, useState } from 'react';

function FeaturedJobs() {
  const [data, setData] = useState([]);
  const [logos, setLogos] = useState({});

  // Function to fetch the company logo
  const fetchLogo = async (companyName) => {
    const url = `https://indeed12.p.rapidapi.com/company/${encodeURIComponent(companyName)}?locality=us`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': process.env.REACT_APP_API_HOST
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP request failed! Error: ${response.status}`);
      }
      const result = await response.json();
      console.log(result); // Log the entire response to verify structure
      return result.logo_url || null; // Access logo_url directly
    } catch (error) {
      console.error(`Failed to fetch logo for ${companyName}`, error);
      return null;
    }
  };

  // Function to fetch featured jobs
  const fetchFeaturedJobs = async () => {
    const url = "https://indeed12.p.rapidapi.com/jobs/search?query=manager&location=Georgia&page_id=1&locality=us&fromage=1&radius=";
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
      const modifiedResult = result.hits.slice(0, 8);
      setData(modifiedResult);

      // Fetch logos for all companies
      const logoPromises = modifiedResult.map((content) =>
        fetchLogo(content.company_name)
      );
      const logosData = await Promise.all(logoPromises);
      const logosMap = logosData.reduce((acc, logo, index) => {
        acc[modifiedResult[index].company_name] = logo;
        return acc;
      }, {});
      setLogos(logosMap);
    } catch (error) {
      console.error(`Failed To Fetch Featured Jobs From Indeed Rapid Api`, error);
    }
  };

  useEffect(() => {
    fetchFeaturedJobs();
  }, []);

  return (
    <div className="py-6">
      <div className="flex items-center justify-center flex-wrap gap-[30px] px-[100px]">
        {data.length > 0 ? (
          data.map((content) => (
            <a key={content.id} href={content.link}>
              <div className="w-[250px] border px-4 py-4 hover:scale-[1.1] hover:shadow-custom-dark transition-all duration-[.5s]">
                <div className="flex justify-between">
                  <div
                    className={`w-[50px] h-[50px] rounded-full border flex items-center justify-center ${
                      !logos[content.company_name] ? 'bg-black' : ''
                    }`}
                  >
                    {logos[content.company_name] ? (
                      <img
                        src={logos[content.company_name]}
                        alt={`${content.company_name} logo`}
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
                  <p className="font-[600]">{content.title}</p>
                  <span className="text-[12px] text-gray-500">
                    {content.company_name} <span>.</span> <span>{content.location}</span>
                  </span>
                </div>
                <div>
                  <span className="text-[13px]">
                    Revolut is looking for Email Marketing to help team ma ...
                  </span>
                </div>
              </div>
            </a>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default FeaturedJobs;
