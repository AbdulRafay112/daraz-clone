import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <footer className='min-h-48  px-3 py-14'>
        <div className='flex md:gap-40  md:flex-row flex-col md:justify-start justify-center gap-20'>
            <div className='mx-auto md:mx-0'>
                <div className='text-[22px] font-bold mt-3 mb-7'>Daraz International</div>
                <div className='flex gap-5 flex-wrap'>
                    <div className='flex items-center gap-2'><span><Image src={'/pak-logo.png'} alt='image' width={30} height={30}></Image></span><span>Pakistan</span></div>
                    <div className='flex items-center gap-2'><span><Image src={'/bang-logo.png'} alt='image' width={30} height={30}></Image></span><span>Bangladash</span></div>
                    <div className='flex items-center gap-2'><span><Image src={'/sri-logo.png'} alt='image' width={30} height={30}></Image></span><span>Sri Lanka</span></div>
                    <div className='flex items-center gap-2'><span><Image src={'/myan-logo.png'} alt='image' width={30} height={30}></Image></span><span>Myanmar</span></div>
                    <div className='flex items-center gap-2'><span><Image src={'/nep-logo.png'} alt='image' width={30} height={30}></Image></span><span>Nepal</span></div>
                </div>
            </div>
            <div className='mx-auto md:mx-0'>
                <div className='text-[22px] font-bold'>Follow Us</div>
                <div className='flex gap-5'>
                    <div><Image src={'/facebook-logo.png'} alt='image' width={30} height={50}></Image></div>
                    <div><Image src={'/twitter-logo.png'} alt='image' width={30} height={50}></Image></div>
                    <div><Image src={'/instagram-logo.png'} alt='image' width={30} height={50}></Image></div>
                    <div><Image src={'/youtube-logo.png'} alt='image' width={30} height={50}></Image></div>
                    <div><Image src={'/domino-logo.png'} alt='image' width={30} height={50}></Image></div>
                </div>
            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer
