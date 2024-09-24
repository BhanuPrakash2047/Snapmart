import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

export function ContactUs() {
    const nav=useNavigate();
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-red-500">Get In Touch With Us</h1>
          <form className="space-y-4" onSubmit={()=>{nav('/mainmenu')
         toast.success('Message sent successfully!')}
          }>
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Phone Number Field */}
            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your phone number"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your message"
              />
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  