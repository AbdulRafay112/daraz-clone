"use client";
import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useState, useEffect } from "react";
import Section3 from "./Section3";
import Section4 from "./Section4";
interface Sale {  
  name: string;  
  price: number;  
  image: {  
    asset: {  
      url: string;  
    };  
  };  
}

// getSales data function for feching
const getSales = async () => {
  const a = await client.fetch(`*[_type == 'sale']`);
  return a;
};

// main function

const Section2 = () => {
  // getData function
  const [salesData, setSalesData] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        const salesData = await getSales();
        setSalesData(salesData);
      };
      fetchData();
      const intervalId = setInterval(async () => {
        const salesData = await getSales();
        setSalesData(salesData);
      }, 10000); // 10 seconds
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    <>
      <div className="cart-items mt-8 px-4 cursor-pointer">
        <div className="flash-sale h-[450px]">
          <div className="text-[30px] font-extrabold">Flash Sale</div>
          <div className="carts  flex justify-between px-10 py-6 items-center">
            <div className="text-orange-600">On Sale Now</div>
            <button className="border-2 border-orange-600 md:px-6 md:py-2 px-3  pointer text-orange-600">
              Shop All Products
            </button>
          </div>
          <hr className=" w-full border-1 border-black" />
          <div className="flex gap-4  md:overflow-hidden overflow-scroll items-center justify-center mt-7">
            {salesData.map((item: Sale, index: number) => {
              return (
                <div
                  key={index}
                  className="cart  h-[300px] w-[180px] flex flex-col gap-5 px-2"
                >
                  <div>
                    <Image
                      src={urlFor(item.image).url()}
                      alt="Image"
                      height={250}
                      width={180}
                    ></Image>
                  </div>
                  <div className="name truncate">{item.name}</div>
                  <div className="price">Rs.{item.price}</div>
                </div>
              );
            })}
          </div>
        </div>
        <Section3 />
        <Section4 />
      </div>
    </>
  );
};

export default Section2;
