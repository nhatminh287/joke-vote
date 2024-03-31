import React, { useState } from 'react'
import { Link } from "react-scroll";

import logo from "src/assets/logo.jpg"
import avatar from "src/assets/avatar.jpg"

const Navbar = () => {
 
  return (
    <div className="w-full h-8 top-0 pb-6 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont ">
      <div className='sm:ml-[12rem] sm:w-[52px] sm:h-[52px] w-[42px] h-[42px] ml-[2rem]'>
        <img src={logo} alt="logo" />
      </div>
      <div className='flex sm:mr-[10rem] mr-[2rem]'>
        <div className='mt-0 mr-2 text-right text-xs'>
          <p className='italic text-gray-400 font-[450]'>Handicrafted by</p>
          <p className='mr-0'>Jim HLS</p>
        </div>
        <img src={avatar} alt="logo" className='rounded-full sm:w-[42px] sm:h-[42px] w-[32px] h-[32px]' />
      </div>
    </div>
  );
}

export default Navbar