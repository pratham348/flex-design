import Image from "next/image"
import React from "react"
import MoreInsightTop from "@/assets/images/moreInsightTop.svg"
import MoreInsightBottom from "@/assets/images/moreInsightBottom.svg"
import MoreInsight1 from "@/assets/images/moreInsight1.svg"

const MoreInsight = () => {
 const data = [
  {
   title: "Measure your performance",
   description:
    "Stay connected with your team and make quick decisions wherever you are."
  },
  {
   title: "Custom analytics",
   description:
    "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
  },
  {
   title: "Team Management",
   description:
    "Our calendar lets you know what is happening with customer and projects so you"
  },
  {
   title: "Build your website",
   description:
    "A tool that lets you build a dream website even if you know nothing about web design or programming"
  },
  {
   title: "Connect multiple apps",
   description:
    "The first business platform to bring together all of your products from one place."
  },
  {
   title: "Easy setup",
   description:
    "End to End Business Platform, Sales Management, Marketing Automation, Help Desk"
  }
 ]
 return (
  <div>
   <div className="relative bg-White-900">
    <Image
     className="inset-x-0 top-0 w-full"
     src={MoreInsightTop}
     alt="MoreInsightTop"
    />
   </div>
   <div className="bg-[#2a3342]">
    <div className="container md:pt-[107px] md:pb-[88px]">
     <div className="grid xxs:grid-col-1 lg:grid-cols-2  lg:grid-rows-1 gap-x-[32px] mb-[64px] md:items-center ">
      <div className="mt-[66px]">
       <p className="mb-[16px]">
        <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase">
         HOW IT WORKS
        </span>
       </p>
       <p className="xxs:text-2xl md:text-[48px] font-bold text-White-900  md:leading-[60px] mb-[32px] ">
        Gain more insight into how people use your
       </p>
       <p className="xxs:text-base md:text-xl font-medium text-Gray-500 leading-[30px] mb-[25px]">
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, <br />
        you can manage every aspect of your business in one secure platform.
       </p>
      </div>
      <div className="mx-auto">
       <Image
        src={MoreInsight1}
        alt="MoreInsight1"
        className="xxs:w-auto lg:w-[554px] xxs:h-auto lg:h-[312px]"
       />
      </div>
     </div>
     <div className="grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 ">
      {data.map((ele, key) => {
       return (
        <div key={key} className="xxs:text-center md:text-start">
         <p className="mb-[16px] ">
          <span className="px-[18px] py-[10px] bg-primary  rounded-3xl text-xl h-[48px] w-[48px] inline-block text-center">
           {key + 1}
          </span>
         </p>
         <p className="text-xl font-bold text-White-900 leading-[30px] mb-[25px]">
          {ele.title}
         </p>
         <p className="text-base font-medium text-Gray-500 leading-[30px] mb-[25px]">
          {ele.description}
         </p>
        </div>
       )
      })}
     </div>
    </div>
   </div>
   <div className="relative bg-White-900">
    <Image
     className="inset-x-0 bottom-0 w-full"
     src={MoreInsightBottom}
     alt="MoreInsightBottom"
    />
   </div>
  </div>
 )
}

export default MoreInsight
