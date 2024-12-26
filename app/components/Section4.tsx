"use client";
import React from "react";
import {  useEffect , useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
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
 export const getFor = async () => {
  const a = await client.fetch(`*[_type == 'foryou']`);
  return a;
};

// main function
const Section4 = () => {
  const [foryou, setForyou] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const foryou = await getFor();
        setForyou(foryou);
      };
      fetchData();
      const intervalId = setInterval(async () => {
        const foryou = await getFor();
        setForyou(foryou);
      }, 10000); // 10 seconds
      return () => clearInterval(intervalId);
    }, []);
    
  
  return (
    <>
      <div className="mt-8 mb-8 text-[30px] font-extrabold">Just For You</div>
      <div className="flex flex-wrap gap-7 items-center justify-center">
        {foryou.map((item: Sale, index: number) => {
          return (
            <Link key={index} href={`/singleproduct/${item.name}`}>
              {" "}
              <div
                key={index}
                className="flex flex-col w-[200px] h-[300px] gap-3  items-center justify-center"
              >
                <div>
                  <Image
                    src={urlFor(item.image).url()}
                    alt="image"
                    width={200}
                    height={200}
                  ></Image>
                </div>
                <div className="truncate w-48">{item.name}</div>
                <div>Rs.{item.price}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Section4;
