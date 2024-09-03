import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    <div className="flex-1">
                        <div className='flex items-center'>
                            <img className='mx-6' src={require('../../src/Assets/Images/logo.png')} alt="logo" />
                            <h4 className="text-lg font-semibold">JobHuntly</h4>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-4">About</h4>
                        <ul className="space-y-2">
                            <li><a href="/companies" className="text-gray-400 hover:text-white transition">Companues</a></li>
                            <li><a href="pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                            <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms</a></li>
                            <li><a href="/advice" className="text-gray-400 hover:text-white transition">Advice</a></li>
                            <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                        </ul>
                    </div>


                    <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="/helpdocs" className="text-gray-400 hover:text-white transition">Help Docs</a></li>
                            <li><a href="guide" className="text-gray-400 hover:text-white transition">Guide</a></li>
                            <li><a href="/updates" className="text-gray-400 hover:text-white transition">Updates</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-4">Get Job Notification</h4>
                        <p className='my-4 text-gray-400'>The latest job news, articles, sent to your inbox weekly.</p>
                        <div className="flex space-x-4">
                            <form action="">
                                <input className='px-2 h-[40px] border' type="email" name="" id="" placeholder='Email Address' />
                                <button className='bg-[#4640DE] px-3 h-[40px] text-[12px] hover:hoverColor transition-all duration-[.5s]' type='submit'>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center border-t border-gray-700 pt-6">
                    <p className="text-gray-400">&copy; 2024 JobHuntly. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer