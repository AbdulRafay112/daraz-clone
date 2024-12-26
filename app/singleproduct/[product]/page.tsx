"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { client } from "@/sanity/lib/client";

// getcategory data function for feching
 const getFor = async () => {
  const a = await client.fetch(`*[_type == 'foryou']`);
  return a;
};


interface Sale {  
  name: string;  
  price: number;  
  image: {  
    asset: {  
      url: string;  
    };  
  };  
}

interface Params {
  product: string;
}

const Page = ({ params }: { params: Params }) => {
   const [data, setData] = useState([])
  
      useEffect(() => {
        const fetchData = async () => {
          const data = await getFor();
          setData(data);
        };
        fetchData();
        const intervalId = setInterval(async () => {
          const data = await getFor();
          setData(data);
        }, 10000); // 10 seconds
        return () => clearInterval(intervalId);
      }, []);
      
  const [number, setNumber] = useState(1)
  const [productInfo, setProductInfo] = useState<Sale | null>(null);
  const productName = decodeURIComponent(params.product);

  useEffect(() => {
    const product = data.find((item: Sale) => item.name === productName);
    setProductInfo(product ?? null);
  }, [data, productName]);

  const handleIncrement = ()=>{
    setNumber(number + 1)
  }
  const handleDecrement = ()=>{
    if(number>0)
      setNumber(number-1)
  }


  return (
    <>
      <Navbar />
      <div>
        {productInfo && (
          <>
            <div className="h-[100px] flex items-center px-11 md:gap-6 gap-0 md:justify-start justify-center">
              <div>Home</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M7 4L15.3306 10.0405C17.5565 11.6545 17.5565 12.3455 15.3306 13.9595L7 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>shop</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M7 4L15.3306 10.0405C17.5565 11.6545 17.5565 12.3455 15.3306 13.9595L7 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="truncate w-80">{productInfo.name}</div>
            </div>
            <div className="h-[820px]  px-11 py-5 flex gap-7 md:flex-row flex-col items-center justify-center md:items-start  md:mt-5 mt-11 ">
              <div className="left h-[500px] max-w-[553px]  flex  justify-center">
                {productInfo.image && (
                  <div><Image src={urlFor(productInfo.image).url()} alt="image" width={400} height={1000}></Image></div>
                )}

              </div>
              <div className="right h-[730px] flex flex-col max-w-[606px] gap-9 px-4 py-3 ">
                <div className="font-bold text-[20px]">{productInfo.name}</div>
                <div className="text-[30px]">Rs.{productInfo.price}</div>
                <div className="flex md:gap-14 gap-4">
                  <button className="px-4 py-3 border-2 border-black flex items-center gap-5 rounded-lg max-w-[123px]"><span className="text-2xl" onClick={handleIncrement}>+</span><span className="text-xl">{number}</span> <span className="text-3xl" onClick={handleDecrement}>-</span></button>
                  <button className="md:py-5 py-2 md:px-14 px-4 border-2 border-black rounded-2xl">Add to Cart</button>
                </div>
                <hr className="border-1 border-black"/>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-9 items-center">
                  <div>SKU</div>
                  <div className="flex gap-3"><span>:</span> <span>SS001</span></div>
                  </div>
                  <div className="flex gap-9 items-center">
                  <div>Tags</div>
                  <div className="flex gap-3"><span>:</span> <span>sofaCHairHomeShop</span></div>
                  </div>
                  <div className="flex gap-9 items-center">
                  <div>Share</div>
                  <div className="flex gap-3 items-center"><span>:</span> <span><Image src={'/facebook-logo.png'} alt="image" width={20} height={10}></Image></span> <span><Image src={'/instagram-logo.png'} alt="image" width={20} height={10}></Image></span> <span><Image src={'/twitter-logo.png'} alt="image" width={20} height={10}></Image></span></div>
                  </div>
                </div>
              </div>
              
            </div>
            <Footer/>
            
          </>
        )}
      </div>
    </>
  );
};

export default Page;
