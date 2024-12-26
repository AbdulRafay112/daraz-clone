"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = ()=>{
    setToggle(!toggle)
  }
  return (
    <>
    <div className='sticky top-0'>
    <nav className='bg-[#f57224] h-[120px]'>
        <ul className='text-white hidden md:flex gap-5 md:justify-end text-[12px] px-3 py-2 mb-2 justify-center'>
            <li className='cursor-pointer '>SAVE MORE ON APP</li>
            <li className='cursor-pointer '>SELL ON DARAZ</li>
            <li className='cursor-pointer '>HELP & SUPPORT</li>
          <Link href={'/login'}><li className='cursor-pointer '>LOGIN</li></Link>
            <li className='cursor-pointer '>SIGM UP</li>
            <li className='cursor-pointer '>CHANGE YOUR LANGUAGE</li>
        </ul>
        <div className='flex items-center md:items-start md:gap-9 gap-2 px-5 md:justify-start justify-center md:h-full h-[120px]'>
            <div className="logo"><Image src={'/daraz-logo.png'} alt='logo' width={150} height={150} className='w-[150px] h-[50px]'></Image></div>
            <div className="input flex items-center">
                <input type="text" placeholder='Seach in Daraz' className='md:w-[500px] sm:w-[200px] w-[100px]   h-[50px] px-7 ' />
                <div className="searchbox h-[50px] cursor-pointer  bg-orange-200 flex items-center justify-center md:w-[56px] w-[30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg></div>
            </div>
            <div><svg  className='invert cursor-pointer hidden md:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={27} height={35} color={"#000000"} fill={"none"}>
    <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
</svg></div>
          <div className='md:hidden block invert' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
          </div>

        </div>
    </nav>
    { toggle &&
    <div className='bg-[#f57224] text-white max-w-[50%] mx-auto my-2 text-center block md:hidden py-3 px-2 '>
      <ul className='flex flex-col gap-4'>
           <li>SAVE MORE ON APP</li>
            <li>SELL ON DARAZ</li>
            <li>HELP & SUPPORT</li>
            <li>LOGIN</li>
            <li>SIGM UP</li>
            <li>CHANGE YOUR LANGUAGE</li>
            <div className='flex justify-center invert'><svg  className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={27} height={35} color={"#000000"} fill={"none"}>
    <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
</svg></div>
      </ul>
      
    </div>
    }
    </div>
    </>
  )
}

export default Navbar
