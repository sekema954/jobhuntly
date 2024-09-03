import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapPin, faSearch } from '@fortawesome/free-solid-svg-icons';
import CompaniesLogo from '../Components/CompaniesLogo';
import Category from '../Components/Category';
import FeaturedJobs from '../Components/FeaturedJobs';
import LatestJobs from '../Components/LatestJobs';

function Home() {
  return (
    <div>
   <section className='grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-screen bg-[#F8F8FD] relative'>
        {/* Left Section: Headline Text */}
        <div className='flex justify-center items-center p-4 md:p-0'>
          <div className='text-center md:text-left'>
            <p className='font-extrabold text-4xl md:text-5xl lg:text-[60px] leading-tight'>
              Discover<br />
              more than<br />
              <span className='text-blue-400 text-5xl md:text-6xl lg:text-[65px] underline decoration-double'>5000+ Jobs</span>
            </p>
            <p className='text-gray-700 mt-4'>
              Great platform for the job seeker that’s searching for<br />
              new career heights and passionate about startups.
            </p>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className='flex justify-center md:justify-end items-center p-4 md:p-0'>
          <img className='max-w-full h-auto md:max-w-[90%]' src={require("../../src/Assets/Images/Pic.png")} alt="pic" />
        </div>

        {/* Search Section */}
        <div className='absolute bottom-[10%] lg:bottom-[15%] bg-white w-[90%] lg:w-[60%] h-auto py-4 lg:h-[60px] left-[5%] flex flex-col lg:flex-row items-center justify-between px-6 rounded-lg shadow-md'>
          {/* Job Search Input */}
          <div className='flex items-center w-full md:w-auto mb-4 md:mb-0'>
            <FontAwesomeIcon className='mx-2 md:mx-4' icon={faSearch} />
            <input className='w-full md:w-auto mx-2 md:mx-4 border py-1 px-3 rounded-md' type="text" placeholder='Job title or keyword' />
          </div>

          {/* Location Select */}
          <div className='flex items-center w-full md:w-auto mb-4 md:mb-0'>
            <FontAwesomeIcon className='mx-2 md:mx-4' icon={faMapPin} />
            <select className='w-full md:w-auto mx-2 md:mx-4 border py-2 px-5 rounded-md' defaultValue="select">
              <option value="select" disabled>Select Location</option>
              {/* Location Options */}
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          {/* Search Button */}
          <div className='w-full md:w-auto'>
            <button
              className='w-full md:w-[160px] bg-[#4640DE] py-2 text-white rounded-md hover:bg-hoverColor transition-all duration-[.5s]'
              type='button'
            >
              Search
            </button>
          </div>
        </div>

        {/* Popular Keywords */}
        <div className='absolute bottom-[4%] flex justify-center w-full lg:w-[65%] hidden'>
          <p className='text-gray-600 text-center'>Popular: UI Designer, UX Researcher, Android, Admin</p>
        </div>
      </section>

      <CompaniesLogo />

      <div className='mt-[5%]'>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-10'>
          <div>
            <p className='text-3xl md:text-[35px] font-extrabold'>
              Explore by <span className='text-blue-400'>Category</span>
            </p>
          </div>
          <div className='mt-4 md:mt-0'>
            <a className='text-[#4640DE] transition-all duration-[.5s] hover:text-hoverColor' href="/search">
              show all Jobs
              <FontAwesomeIcon className='ml-4' icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>

      <Category />

      <div className='w-full bg-[#4640DE] grid grid-cols-1 md:grid-cols-2 rounded-tl-[20%] p-6'>
        <div className='flex items-center justify-center'>
          <div className='text-center md:text-left'>
            <p className='text-2xl md:text-[35px] text-white my-3'>
              Start Posting Jobs<br />
              Today
            </p>
            <p className='text-white my-3'>Start posting jobs for only $10.</p>
            <a href="/register">
              <button className='bg-white hover:bg-hoverColor py-2 px-5 transition-all duration-[.5s] hover:text-white'>
                Sign Up For Free
              </button>
            </a>
          </div>
        </div>

        <div className='py-6 flex items-center justify-center'>
          <img className='max-w-full h-auto' src={require('../../src/Assets/Images/Content.png')} alt="content" />
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-5'>
        <div>
          <p className='text-3xl md:text-[35px] font-extrabold'>
            Featured <span className='text-blue-400'>Jobs</span>
          </p>
        </div>
        <div className='mt-4 md:mt-0'>
          <a className='text-[#4640DE] transition-all duration-[.5s] hover:text-hoverColor' href="/search">
            show all Jobs
            <FontAwesomeIcon className='ml-4' icon={faArrowRight} />
          </a>
        </div>
      </div>

      <FeaturedJobs />

      <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-7 bg-[#F8F8FD]'>
        <div>
          <p className='text-3xl md:text-[35px] font-extrabold'>
            Latest <span className='text-blue-400'>Jobs Open</span>
          </p>
        </div>
        <div className='mt-4 md:mt-0'>
          <a className='text-[#4640DE] transition-all duration-[.5s] hover:text-hoverColor' href="/search">
            show all Jobs
            <FontAwesomeIcon className='ml-4' icon={faArrowRight} />
          </a>
        </div>
      </div>

      <LatestJobs />
    </div>
  )
}

export default Home;
