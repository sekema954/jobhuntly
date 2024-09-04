import React, { useEffect, useState } from 'react';

function LatestJobs() {
    const [data, setData] = useState([]);
    const [logos, setLogos] = useState({});

    const fetchLatestJobs = async () => {
        const url = "https://indeed12.p.rapidapi.com/jobs/search?query=manager&location=Georgia&page_id=1&locality=us&fromage=1&radius=";
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.enc.REACT_APP_API_KEY,
                'x-rapidapi-host': process.env.REACT_API_HOST
            }
        };

        try {
            const response = await fetch(url, options);
            console.log('API Response:', response);

            if (!response.ok) {
                throw new Error(`HTTP request failed! Error: ${response.status}`);
            }
            const result = await response.json();
            
            const modifiedResult = result.hits.slice(0, 8);
            setData(modifiedResult);

            // Fetch logos for all companies
            const logoPromises = modifiedResult.map((job) =>
                fetchLogo(job.company_name)
            );
            const logosData = await Promise.all(logoPromises);
            const logosMap = logosData.reduce((acc, logo, index) => {
                acc[modifiedResult[index].company_name] = logo;
                return acc;
            }, {});
            setLogos(logosMap);

        } catch (error) {
            console.error('Failed To Fetch Latest Jobs From Indeed Rapid Api', error);
        }
    };

    const fetchLogo = async (companyName) => {
        const url = `https://indeed12.p.rapidapi.com/company/${encodeURIComponent(companyName)}?locality=us`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                'x-rapidapi-host': 'indeed12.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP request failed! Error: ${response.status}`);
            }
            const result = await response.json();
            return result.hits.logo_url || null;
        } catch (error) {
            console.error(`Failed to fetch logo for ${companyName}`, error);
            return null;
        }
    };

    useEffect(() => {
        fetchLatestJobs();
    }, []);

    return (
        <div className='py-20 px-[30px] md:px-[0] bg-[#F8F8FD] flex justify-center items-center'>
            <div className='flex flex-wrap justify-center gap-8 md:gap-[50px]'>
                {data.length > 0 ? (
                    data.map(job => (
                        <a key={job.id} href={job.link} className='w-full md:w-[480px]'>
                            <div className='border bg-white shadow-lg px-5 py-5 flex items-center md:h-[170px]'>
                                <div className='w-[60px] h-[60px] rounded-full border flex-shrink-0 flex items-center justify-center'>
                                    {logos[job.company_name] ? (
                                        <img
                                            src={logos[job.company_name]}
                                            alt={`${job.company_name} logo`}
                                            className='w-full h-full object-contain rounded-full'
                                        />
                                    ) : (
                                        <span className='text-gray-500'>N/A</span>
                                    )}
                                </div>
                                <div className='ml-5 flex-grow'>
                                    <span className='block font-bold text-lg'>{job.title}</span>
                                    <p className='text-sm text-gray-500 my-3'>
                                        <span>{job.company_name}</span>. <span>{job.location}</span>
                                    </p>
                                    <span className='inline-block px-2 py-1 rounded-full text-[#56CDAD] bg-[#56CDAD] bg-opacity-20 text-sm'>
                                        Full Time
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

export default LatestJobs;
