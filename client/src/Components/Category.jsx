import { React} from 'react';
import buisiness from '../../src/Assets/Images/Buisness.png';
import engineering from '../../src/Assets/Images/engineering.png';
import finance from '../../src/Assets/Images/finances.png';
import marketing from '../../src/Assets/Images/marketing.png';
import resources from '../../src/Assets/Images/resources.png';
import sales from '../../src/Assets/Images/sales.png';
import technology from '../../src/Assets/Images/technology.png';
import design from '../../src/Assets/Images/design.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Category() {

    const categories = [
        {id:1, src:design, title:'Design', alt:'design' },
        {id:2, src:sales, title:'Sales', alt:'sales'},
        {id:3, src:marketing, title:'Marketing', alt:'marketing'},
        {id:4, src:finance, title:'Finance', alt:'finance'},
        {id:5, src:technology, title:'Technology', alt:'tech' },
        {id:6, src:engineering, title:'Engineering', alt:'engineering'},
        {id:7, src:buisiness, title:'Buisiness', alt:'buisiness' },
        {id:8, src:resources, title:'Resources', alt:'resources' },
    ];
    
  return (
    <div className='py-6'>
        <div className='flex items-center justify-center'>
            <div className='flex flex-wrap gap-[40px] justify-center py-[40px]'>
                {categories.map(card => (
                     <div key={card.id} className={`w-[270px] border px-6 py-4 hover:bg-[#8180F7] hover:text-white transition-all duration-[.50s]`}>
                        <div>
                            <img className='py-2' src={card.src} alt={card.alt} />
                            <p className='py-2 font-[600]'>{card.title}</p>
                            <a href="/">See Jobs
                                <FontAwesomeIcon className='ml-5' icon={faArrowRight}></FontAwesomeIcon>
                            </a>
                        </div>
                     </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category