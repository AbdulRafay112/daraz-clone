"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
interface Sale {  
  name: string;  
  price: number;  
  image: {  
    asset: {  
      url: string;  
    };  
  };  
}
// getcategory data function for feching
const getCategory = async () => {
  const a = await client.fetch(`*[_type == 'category']`);
  return a;
};

// main function
const Section3 = () => {
  

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const categoryData = await getCategory();
        setCategoryData(categoryData);
      };
      fetchData();
      const intervalId = setInterval(async () => {
        const categoryData = await getCategory();
        setCategoryData(categoryData);
      }, 10000); // 10 seconds
      return () => clearInterval(intervalId);
    }, []);
    

  return (
    <>
      <div className="categories">
        <div className="text-[30px] font-extrabold py-5">Categories</div>
        <div className="flex flex-wrap gap-9  justify-center items-center   ">
          {categoryData.map((item: Sale, index: number) => {
            return (
              <div
                key={index}
                className=" rounded-md border-slate-50 border-2 h-200 w-200 flex flex-col items-center justify-center "
              >
                <div className="w-[180px] h-[200px]">
                  <Image
                    src={urlFor(item.image).url()}
                    alt="image"
                    width={200}
                    height={200}
                    className="object-cover"
                  ></Image>
                </div>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section3;
