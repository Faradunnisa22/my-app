import React from 'react'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'
import logo8 from '../assets/logo8.png'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'

const Feature2=()=> {
    const feature2 = [
    { id: 1, title: 'Web Design', description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua.At vero eos accusam et justo duo dolores", image: logo3 },
    { id: 2, title: 'Digital Marketing', description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua.At vero eos accusam et justo duo dolores", image: logo4 },
    { id: 3, title: 'Mobile Apps', description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua.At vero eos accusam et justo duo dolores", image: logo5 },
    { id: 4, title: 'SEO Consultancy', description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua.At vero eos accusam et justo duo dolores", image: logo6 },
    { id: 5, title: 'Graphic Design', description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua.At vero eos accusam et justo duo dolores", image: logo7 },
    { id: 6, title: 'Business Consultancy', description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua.At vero eos accusam et justo duo dolores", image: logo8 },]
    return (
        <div>
            <div className='md:mx-52 items-center services justify-between text-center md:mt-32 px-6 mt-20 'id='service'>
                    <h1 className='text-red-500 font-bold md:text-3xl'>What We Do</h1>
                    <p className='md:text-2xl font-bold text-gray-900 md:mt-2'>Out Services</p>
                </div>
            <div className='md:mt-28 grid mt-20 md:grid-cols-3 grid-cols-1 md:mx-52 items-center justify-between gap-28'>
                    {
                        feature2.map(feature2 => <div key={feature2.id} className='px-4 py-8 text-center md:w-[300px] mx-auto rounded-md shadow-lg items-center justify-between cursor-pointer duration-300 transition-all hover:border-indigo-700 hover:border-b-4 hover:-translate-y-5'>
                            <div>
                                <div className='md:mb-10 rounded-tl-3xl w-14 mx-auto'>
                                    <img src={feature2.image} alt="" />
                                </div>
                                <h4>{feature2.title}</h4>
                                <p>{feature2.description}</p>
                            </div>
                        </div>)
                    }
                </div>

                <div className='md:mx-52 items-center justify-between text-center md:mt-32 px-6 mt-20 ' id='projects'>
                    <h1 className='text-red-500 font-bold md:text-3xl'>Works</h1>
                    <p className='md:text-2xl font-bold text-gray-900 md:mt-2'>Some of Our Recent Works</p>
                </div>

                <div className='relative md:mx-52 mt-10 md:mt-20 mx-5'>
                    <div className=' flex no-scrollbar space-x-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory'>
                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={work1} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>Mobile App</h3>
                                <p className='text-gray-600 text-sm'>Rocket Internet LTD</p>
                            </div>
                        </div>

                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={work2} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>SEO</h3>
                                <p className='text-gray-600 text-sm'>PageBulb</p>
                            </div>
                        </div>

                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={work3} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>Marketing</h3>
                                <p className='text-gray-600 text-sm'>NoCodeAPI</p>
                            </div>
                        </div>

                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={work1} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>Creative Design</h3>
                                <p className='text-gray-600 text-sm'>Uldeck</p>
                            </div>
                        </div>

                        <div className='snap-start s bg-white shadow-lg rounded-lg w-64 flex-shrink-0'>
                            <img src={work2} alt="" className='rounded-t-lg' />
                            <div className='p-4'>
                                <h3 className='font-bold text-lg'>Web Design</h3>
                                <p className='text-gray-600 text-sm'>GrayGrids</p>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default Feature2
