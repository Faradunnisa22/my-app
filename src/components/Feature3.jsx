import React from 'react'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import circle1 from '../assets/circle1.png'
import circle2 from '../assets/circle2.png'
import circle3 from '../assets/circle3.png'

const Feature3=()=> {
    
    return (
        <div>
           <div className='md:mx-52 items-center justify-between text-center md:mt-32 px-6 mt-20 'id='pricing'>
                    <h1 className='text-red-500 font-bold md:text-3xl'>Pricing Plans</h1>
                    <p className='md:text-2xl font-bold text-gray-900 md:mt-2'>Choose Your Plan</p>
                </div> 
<div className='md:mx-52 items-center justify-between text-center md:mt-9 mt-9'>
                <div className='inline-flex bg-gray-200 rounded-lg overflow-hidden '>
                    <button className='px-4 py-2 text-sm font-medium text-white bg-orange-500'>Monthly</button>
                    <button className='px-4 py-2 text-sm font-medium text-gray-600'>Yearly</button>
                </div>
                </div>

                <div className='md:mx-52 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl md:mt-20 mt-20'>
                    <div className='bg-white shadow-lg rounded-lg p-6 text-center '>
                        <div className='mx-auto h-12 w-12  items-center justify-between mb-4'>
                            <img src={circle2} alt="" />
                        </div>
                        <h3 className='text-3xl font-bold text-gray-800'>$39.00</h3>
                        <p className='text-gray-600 mt-2 mb-4'>Lorem ipsum dolor it amet sit amet consectetur. Sadi aliquyam erat sed diam</p>
                        <button className='px-6 py-2 text-sm font-medium text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition'>Choose Plan</button>
                    </div>

                    <div className='bg-white shadow-lg rounded-lg p-6 text-center mt-20'>
                        <div className='mx-auto h-12 w-12  items-center justify-between mb-4'>
                            <img src={circle3} alt="" />
                        </div>
                        <h3 className='text-3xl font-bold text-gray-800'>$19.00</h3>
                        <p className='text-gray-600 mt-2 mb-4'>Lorem ipsum dolor it amet sit amet consectetur. Sadi aliquyam erat sed diam</p>
                        <button className='px-6 py-2 text-sm font-medium text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition'>Choose Plan</button>
                    </div>

                    <div className='bg-white shadow-lg rounded-lg p-6 text-center mt-20'>
                        <div className='mx-auto h-12 w-12  items-center justify-between mb-4'>
                            <img src={circle1} alt="" />
                        </div>
                        <h3 className='text-3xl font-bold text-gray-800'>$99.00</h3>
                        <p className='text-gray-600 mt-2 mb-4'>Lorem ipsum dolor it amet sit amet consectetur. Sadi aliquyam erat sed diam</p>
                        <button className='px-6 py-2 text-sm font-medium text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition'>Choose Plan</button>
                    </div>

                </div>


                <div className='md:mx-52 items-center justify-between text-center md:mt-32 px-6 mt-20 '>
                    <h1 className='text-red-500 font-bold md:text-3xl'>Team</h1>
                    <p className='md:text-2xl font-bold text-gray-900 md:mt-2'>Meet Our Team Members</p>
                </div> 
                <div className='relative md:mx-52 mt-20 md:mt-20 mx-5'>
                    <div className=' flex no-scrollbar space-x-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory'>
                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={team1} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>Chris Dave</h3>
                                <p className='text-gray-600 text-sm'>Founder and CEO</p>
                            </div>
                        </div>

                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={team2} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>Sarah Doe</h3>
                                <p className='text-gray-600 text-sm'>UI Designer</p>
                            </div>
                        </div>

                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={team3} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>Rob Hope</h3>
                                <p className='text-gray-600 text-sm'>Dr.Software Engineer</p>
                            </div>
                        </div>

                        
                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={team2} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>Sarah Doe</h3>
                                <p className='text-gray-600 text-sm'>UI Designer</p>
                            </div>
                        </div>

                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={team3} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>Rob Hope</h3>
                                <p className='text-gray-600 text-sm'>Dr.Software Engineer</p>
                            </div>
                        </div>

                        </div>
                        </div>
        </div>
    )
}

export default Feature3
