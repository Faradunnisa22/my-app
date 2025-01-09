import React from 'react'
import feature from '../assets/feature.png' 

const Home=()=> {
    return (
        <div>
            <section className='flex md:mt-32 flex-col md:flex-row items-center justify-between max-w-7xl  px-6 py-16 mt-24 md:mx-52 mx-3' id='home'>
            <div className='md:text-left md:w-1/2'>
                <h1 className='text-4xl font-bold text-gray-800'>Creative Multipurpose<span className='text-red-500'> Bootstrap Template</span></h1>
                <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna.</p>
                <button className='bg-red-500 text-white py-2
                px-6 rounded-lg mt-6 hover:bg-red-600'>Get Started</button>
            
            </div>
            <div className='mt-12 md:mt-0 md:w-1/2'>
                <img src={feature} alt="" />
            </div>
            </section>


           
        </div>
    )
}

export default Home
