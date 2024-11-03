import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="flex h-screen">
          {/* Left Sidebar */}
          <div className="w-64 bg-blue-500 p-4 text-white-500 h-full fixed top-0 left-0">
            <ul>

            <li className="py-2 ">
             

             <a
               href="#"
               className="flex flex-row items-center font-bold  block text-white hover:bg-blue-700 hover:text-white py-2 px-4 rounded text-lg justify-evenly w-40"
             >

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
             Profile
             </a>
           </li>


            <li className="py-2 ">
             

             <a
               href="#"
               className="flex flex-row items-center font-bold  block text-white hover:bg-blue-700 hover:text-white py-2 px-4 rounded text-lg justify-evenly w-40"
             >

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
              Teachers
             </a>
           </li>

              <li className="py-2 ">
             

                <a
                  href="#"
                  className="flex flex-row items-center font-bold  block text-white hover:bg-blue-700 hover:text-white py-2 px-4 rounded text-lg justify-evenly w-40"
                >

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>
                 Students
                </a>
              </li>
              <li className="py-2 ">
             

                <a
                  href="#"
                  className="flex flex-row items-center font-bold  block text-white hover:bg-blue-700 hover:text-white py-2 px-4 rounded text-lg justify-evenly w-40"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>
                  Logout
                </a>
              </li>
            </ul>
          </div>
    
          {/* Main Content */}
          <div className="ml-64 p-4 bg-white h-screen">
            <h1 className="text-3xl font-bold mb-4 text-blue-500">
                {/* Welcome to Dashboard */}
                </h1>
            <p className="text-gray-600">
           
            </p>
          </div>
        </div>
      );


    
}

export default Sidebar;