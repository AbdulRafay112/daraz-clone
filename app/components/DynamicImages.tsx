"use client"
import React from 'react'
import { useState , useEffect } from 'react'
import Image from 'next/image'
const images=[
    {
        src:'/image1.jpg',
        alt:'Image 1'
    },
    {
        src:'/image2.jpg',
        alt:'Image2'
    },
    {
        src:'/image3.jpg',
        alt:'Image3'
    },
    {
        src:'/image4.jpg',
        alt:'Image4'
    }

]
const DynamicImages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(()=>{
        setCurrentIndex((prevIndex)=>(prevIndex+1)%images.length)

      },5000)
    
      return () =>   clearInterval(intervalId)
      
    }, []);
    


  return (
    <>
    <div><Image src={images[currentIndex].src} alt={images[currentIndex].alt} width={1000} height={300} className='md:h-[300px] h-[200px]'></Image></div>
    </>
  )
}

export default DynamicImages
