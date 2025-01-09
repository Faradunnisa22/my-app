import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import feature2 from '../assets/feature2.png'
import feature11 from '../assets/feature11.png'
import tick from '../assets/tick.png'


const Feature1 = () => {
    const feature1 = [
        { id: 1, title: 'Research', description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua.At vero eos accusam et justo duo dolores", image: feature2 },
        { id: 2, title: 'Prototype', description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua.At vero eos accusam et justo duo dolores", image: logo1 },
        { id: 3, title: 'Build', description: "Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua.At vero eos accusam et justo duo dolores", image: logo2 },
       
    ]
    return (
        <div>
            <div>
                <div className='md:mx-52 mt-4 items-center justify-between text-center md:mt-20 mx-3 px-6 'id='about'>
                    <h1 className='text-red-500 font-bold md:text-3xl'>About</h1>
                    <p className='md:text-2xl font-bold text-gray-900 md:mt-2'>Work Process</p>
                </div>


                <div className='md:mt-28 grid  mt-8 md:grid-cols-3 grid-cols-1 md:mx-52 items-center justify-between gap-28'>
                    {
                        feature1.map(feature1 => <div key={feature1.id} className='px-4 py-8 text-center md:w-[300px] mx-auto rounded-md shadow-lg items-center justify-between cursor-pointer duration-300 transition-all hover:border-indigo-700 hover:border-b-4 hover:-translate-y-5'>
                            <div>
                                <div className='md:mb-10 rounded-tl-3xl w-14 mx-auto'>
                                    <img src={feature1.image} alt="" />
                                </div>
                                <h4>{feature1.title}</h4>
                                <p>{feature1.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>


            <div className='mt-32 grid  my-8  md:mx-52 mx-3'>
                <div className='flex flex-col md:flex-row items-center justify-between  '>
                    <img src={feature11} alt="" className='w-60  md:w-6/12 mb-4
                     md:mt-40 ' />
                    <div className='md:ml-6  md:text-left mt-2'>
                        <h2 className='md:text-xl text-xs text-red-800 font-medium mt-2'>Why Choose Us</h2>
                        <p className='md:text-4xl font-bold md:mt-2 mt-4'>Your Goal is Our Achievement</p>
                        <p className='text-gray-700 text-base md:mt-2 mt-2'>Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum.Stet clita kasd gubergren, no sea takimata sanctus.</p>

                        <ul className='space-y-3 mt-5'>
                            <li className='relative ml-7'>Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv
                                <img src={tick} alt="" className='absolute top-0 left-[-30px] '/>
                            </li>
                            <li className='relative ml-7'>At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv
                                <img src={tick} alt="" className='absolute top-0 left-[-30px] '/>
                            </li>
                            <li className='relative ml-7'>Dvero eos et accusam et justo duo dolores et rebum. Stet clita kasd
                            gubergrenv
                                <img src={tick} alt="" className='absolute top-0 left-[-30px] '/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>




            {/* <div className='md:mx-52 items-center justify-between text-center md:mt-32 px-6 mt-20 '>
                    <h1 className='text-red-500 font-bold md:text-3xl'>What We Do</h1>
                    <p className='md:text-2xl font-bold text-gray-900 md:mt-2'>Out Services</p>
                </div>


                <div className='md:mt-28 grid mt-20 md:grid-cols-3 grid-cols-1 md:mx-52 items-center justify-between gap-28'>
                    {
                        feature1.map(feature1 => <div key={feature1.id} className='px-4 py-8 text-center md:w-[300px] mx-auto rounded-md shadow-lg items-center justify-between cursor-pointer duration-300 transition-all hover:border-indigo-700 hover:border-b-4 hover:-translate-y-5'>
                            <div>
                                <div className='md:mb-10 rounded-tl-3xl w-14 mx-auto'>
                                    <img src={feature1.image} alt="" />
                                </div>
                                <h4>{feature1.title}</h4>
                                <p>{feature1.description}</p>
                            </div>
                        </div>)
                    }
                </div> */}
            </div>
            
        
    )
}

export default Feature1
