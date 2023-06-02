import { Button } from "flowbite-react"
import React from "react"
import topLeftImage from "../../assets/icons/left-top.svg"
import bottomLeftImage from "../../assets/icons/left-bottom.svg"
import topRightImage from "../../assets/icons/right-top.svg"
import bottomRightImage from "../../assets/icons/right-bottom.svg"
import Image from "next/image"

const HeroSection = () => {
 return (
  <div>
   <div className="container">
    <div className="relative bg-Gray-900 text-center mx-[73px] rounded-xl px-[146px] py-[88px] overflow-hidden">
     <Image
      className="absolute left-0 top-0"
      src={topLeftImage}
      alt="topLeftImage"
     />
     <Image
      className="absolute bottom-0 left-0"
      src={bottomLeftImage}
      alt="bottomLeftImage"
     />
     <Image
      className="absolute top-0 right-0"
      src={topRightImage}
      alt="topRightImage"
     />
     <Image
      className="absolute bottom-0 right-0"
      src={bottomRightImage}
      alt="bottomRightImage"
     />
     <div>
      <p className="text-White-900 text-[60px] font-bold leading-normal mb-[24px]">
       A small business is only as good as its tools.{" "}
      </p>
      <p className="text-Gray-400 text-[20px] text font-medium mb-[26px]">
       We’re different. Flex is the only saas business platform that lets you
       run your business on one platform, seamlessly across all digital
       channels.
      </p>
      <div className="flex justify-center mb-[16px]">
       <div class="relative mr-[16px]">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
         <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.59 6L12.71 11.88C12.617 11.9737 12.5064 12.0481 12.3846 12.0989C12.2627 12.1497 12.132 12.1758 12 12.1758C11.868 12.1758 11.7373 12.1497 11.6154 12.0989C11.4936 12.0481 11.383 11.9737 11.29 11.88L5.41 6H18.59ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.41L9.88 13.29C10.4425 13.8518 11.205 14.1674 12 14.1674C12.795 14.1674 13.5575 13.8518 14.12 13.29L20 7.41V17Z"
           fill="#556987"
          />
         </svg>
        </div>
        <input
         type="text"
         id="input-group-1"
         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-Gray-900 focus:border-gray-50 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="Enter your work email"
        />
       </div>
       <Button className="bg-primary border-primary hover:bg-transparent hover:border-primary hover:text-primary">
        Sign Up
       </Button>
      </div>
      <p className="text-Gray-400 text-[14px]  font-medium ">
       Start your free 14-day trial today, no credit card required.
      </p>
     </div>
    </div>
   </div>
  </div>
 )
}

export default HeroSection
