import React from 'react';
import vodafone from '../../src/Assets/Images/vodafone-2017-logo.png';
import intel from '../../src/Assets/Images/Group.png';
import telsa from '../../src/Assets/Images/TESLA.png';
import amd from '../../src/Assets/Images/amd-logo-1.png';
import talkit from '../../src/Assets/Images/talkit 1.png';

function CompaniesLogo() {
    //mapping array of company logo 
    const companyLogo = [
        {id: 1, src:vodafone, alt:'company1'},
        {id: 2, src:intel, alt:'company2'},
        {id: 3, src:telsa, alt:'company3'},
        {id: 4, src:amd, alt:'company4'},
        {id: 5, src:talkit, alt:'company5'},
    ]

  return (
    <div>
        <div className='py-[40px] px-6'>
            <p>Companies we helped grow</p>
        </div>
        <div className='w-full flex flex-wrap gap-[100px] items-center justify-center px-20 py-10'>
            {companyLogo.map(image =>(
                <img key={image.key} src={image.src} alt={image.alt}></img>
            ))}
        </div>
    </div>
  )
}

export default CompaniesLogo