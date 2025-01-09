import { Footer } from "flowbite-react";
import logo from '../assets/logo.png'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer1= () =>{
  return (
    <Footer container>
      <div className="w-full  md:mx-52 md:mt-0 mt-20 bg-gray-700  text-white">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 items-center">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src={logo}
              alt="Flowbite Logo" className="w-20 md:mt-5 md:ml-4"/>
              <p className="md:ml-4 text-sm">Lorem ipsum dolor sitco nsetetu nonumy eirmod tempor invidunt ut labore et dolore magna uyam erat,sed diam.</p>
          </div>
          
          <div className="items-center justify-between md:mt-16 md:ml-28 grid md:grid-cols-4 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-3 text-white">
            <div>
              <Footer.Title title="Quick Links" className="font-bold text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Company</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">About</Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Resources" className="font-bold text-white "/>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Support</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
                <Footer.Link href="#">Terms</Footer.Link>
              
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Newslettter" className="font-bold text-white"/>
              <Footer.LinkGroup col>
               <div>
                <input 
                type="email" 
                placeholder="Enter Email"
                className="bg-gray-700 text-gray-300  p-2 rounded-l-lg focus:outline-none focus:ring focus:ring-red-500"/>
                <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 md:-mr-10">Subscribe</button>
               </div>

              </Footer.LinkGroup>
            </div>
        
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center  sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )}
export default Footer1