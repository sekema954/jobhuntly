import { React , useState, useEffect} from 'react';

function Navbar() {

  const  [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerIcon = () =>{
    setIsOpen(!isOpen);
  }





  useEffect(()=>{
    const handleScroll = ()=>{
        if(window.scrollY >= 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }
    window.addEventListener('scroll', handleScroll);
    return()=> window.removeEventListener('scroll', handleScroll);
    
}, []);

  return (
    <div>
      <nav className={`w-full flex items-center justify-between px-[60px] py-[20px] z-[2000] ${isSticky ? 'fixed bg-white': ''}`}>
        <div className='flex items-center'>
          <a href='/'>
            <img src={require("../../src/Assets/Images/logo.png")} alt="logo" />
          </a>
          <ul className='ml-[60px] hidden md:inline-block'>
            <li className='inline-block mx-6'><a href="/search">Find Jobs</a></li>
            <li className='inline-block mx-6'><a href="/companies">Browse Companies</a></li>
          </ul>
        </div>

        <div>
          <ul className='hidden lg:flex'>
            <li className='mx-6 flex items-center'><a className='text-[#4640DE] transition-all duration-[.5s]' href="/login">Login</a></li>
            <a className='mx-6 text-white' href="/register">
              <button className='bg-[#4640DE] px-[20px] py-[5px] hover:bg-hoverColor transition-all duration-[.5s]'>Sign Up</button>
            </a>
          </ul>
        </div>
        <div className='menubar lg:hidden inline' onClick={handleHamburgerIcon}>
          <div className={`bar1 w-[25px] h-[4px] my-2 bg-black transition-all duration-[.5s] ${isOpen ? 'transform translate-y-[7px] translate-y-[10px] rotate-[-45deg]' : ''}`}></div>
          <div className={`bar2 w-[25px] h-[4px] my-2 bg-black transition-all duration-[.5s] ${isOpen ? ' transform translate-y-[-5px] rotate-[45deg]' : ''}`}></div>
        </div>
      </nav>
      <div className={`fixed z-40 w-full dropdown h-0 bg-white flex items-center justify-center transition-height duration-[.5s] ${isOpen ? 'h-[350px]' : ''}`}>
        <ul className={`${isOpen ? 'block' : 'hidden'}`}>
          <li className='text-center'><a href="/">home</a></li>
          <li className='text-center my-4'><a href="/jobs">Jobs</a></li>
          <li className='text-center my-4'><a href="/companies">Companies</a></li>
          <li className='text-center my-4'><a href="/login">Login</a></li>
          <a className='mx-6 text-white' href="/register">
              <button className='bg-[#4640DE] px-[20px] py-[5px] hover:bg-hoverColor transition-all duration-[.5s] cursor-pointer'>Sign Up</button>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar