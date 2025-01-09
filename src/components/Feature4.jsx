import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import feature3 from '../assets/feature3.png'

const Feature4=() =>{
    return (
        <div>

                {/* <!-- Blog Section --> */}
  <section className="py-12 px-6 mt-20" id='blog'>
    <div className="max-w-6xl mx-auto md:mt-20">
      {/* <!-- Section Title --> */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">From The Blog</h2>
        <p className="text-gray-600 mt-2">Discover our latest insights</p>
      </div>
      {/* <!-- Blog Cards --> */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Blog Card 1 --> */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={blog1} alt="Blog 1" className="w-full"/>
          <div className="p-4">
            <p className="text-sm text-gray-500">By: Musharof Chowdury • 15 June 2024</p>
            <h3 className="font-bold text-lg text-gray-800 mt-2">How to track your business revenue</h3>
            <a href="#" className="text-orange-500 font-medium text-sm mt-2 inline-block">Read More</a>
          </div>
        </div>
        {/* <!-- Blog Card 2 --> */}
        <div className="mt-20 bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={blog2} alt="Blog 2" className="w-full"/>
          <div className="p-4">
            <p className="text-sm text-gray-500">By: Musharof Chowdury • 15 June 2024</p>
            <h3 className="font-bold text-lg text-gray-800 mt-2">Improving products depending on feedback</h3>
            <a href="#" className="text-orange-500 font-medium text-sm mt-2 inline-block">Read More</a>
          </div>
        </div>
        {/* <!-- Blog Card 3 --> */}
        <div className="mt-20 bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={blog3} alt="Blog 3" className="w-full"/>
          <div className="p-4">
            <p className="text-sm text-gray-500">By: Musharof Chowdury • 15 June 2024</p>
            <h3 className="font-bold text-lg text-gray-800 mt-2">How to diversify your audience</h3>
            <a href="#" className="text-orange-500 font-medium text-sm mt-2 inline-block">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Contact Section --> */}
  <section className="md:mt-28 mx-5 bg-white">
    <div className="mt-20 flex flex-col md:flex-row md:mx-52" id='contact'>
      {/* <!-- Section Title --> */}
      <div >
        <img src={feature3} alt="" className='md:w-10/12' />
      </div>
      <div className="text-left mb-8 md:-mt-16 md:w-96 mt-10">
        <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
        
      </div>
     
      <form className="space-y-6 md:w-full md:-ml-72">
        <div >
          
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"/
          >
          
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>
        
        <textarea 
          placeholder="Message" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          rows="5"
        ></textarea>
        
        <div className="text-center">
          <button 
            type="submit" 
            className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </div>
        
      </form>
    </div>
    
  </section>
        </div>
        
        
    )
}

export default Feature4
