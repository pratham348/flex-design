import React from "react"
import mail from "@/assets/icons/mail.svg"
import buildWebsite from "@/assets/icons/buildWebsite.svg"
import multipleApps from "@/assets/icons/multipleApps.svg"
import gainMoreInsight from "@/assets/images/gainMoreInsight.svg"
import Image from "next/image"
import fullWave from "@/assets/icons/fullWave.svg"
import blueDots from "@/assets/icons/blueDots.svg"
import { Button } from "flowbite-react"

const GainInsight = () => {
 const data = [
  {
   id: 1,
   title: "Measure your performance",
   description:
    "Stay connected with your team and make quick decisions wherever you are. ",
   image: mail
  },
  {
   id: 2,
   title: "Build your website",
   description:
    "A tool that lets you build a dream website even if you know nothing about web design or programming.",
   image: buildWebsite
  },
  {
   id: 3,
   title: "Connect multiple apps",
   description:
    "The first business platform to bring together all of your products from one place.",
   image: multipleApps
  }
 ]
 return (
  <div className="bg-gradient-to-br from-transparent to-F7F8F9 pt-[90px]">
   <div className="container md:px-[78px] ">
    <section>
     <div>
      <p className="mb-[16px]">
       <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase">
        FEATURES
       </span>
      </p>
      <p className="xxs:text-2xl md:text-[44px] font-bold text-Gray-900 xxs:leading-8 md:leading-[44px] mb-[16px]">
       Gain more insight into how people use your
      </p>
      <p className="xxs:text-base md:text-xl font-medium text-Gray-500 leading-[30px]">
       With our integrated CRM, project management, collaboration and invoicing
       capabilities, <br />
       you can manage every aspect of your business in one secure platform.
      </p>
     </div>
     <div className="grid xxs:grid-cols-1 lg:grid-cols-2 grid-rows-1  lg:gap-x-6 xl:gap-x-52 xxs:mt-[20px] md:mt-[80px]">
      <div className="mt-[66px] xxs:order-2 lg:order-1">
       {data.map((ele) => {
        return (
         <div
          key={ele.id}
          className="flex mb-[40px] text-start xxs:flex-col md:flex-row xxs:items-center"
         >
          <div>
           <div className="bg-primary self-center w-max xxs:p-[10px] md:p-[20px] rounded-lg md:mr-[24px]">
            <Image src={ele.image} alt="image" className="object-cover" />
           </div>
          </div>
          <div className="mt-[12px] xxs:text-center md:text-start">
           <p className="font-bold text-2xl text-Gray-900">{ele.title}</p>
           <p className="text-base font-medium text-Gray-500 mt-[14px]">
            {ele.description}
           </p>
          </div>
         </div>
        )
       })}
      </div>
      <div className="xxs:order-1 lg:order-2 xxs:my-[40px]">
       <div className="relative">
        <Image
         className="absolute md:left-[-33px] xxs:left-[-13px] top-[-31px] xxs:w-20 md:w-auto"
         src={fullWave}
         alt="topLeftImage"
        />
        <Image
         className="absolute bottom-[-33px] md:right-[-31px] xxs:right-[-13px] xxs:w-20 md:w-auto"
         src={blueDots}
         alt="bottomRightImage"
        />
        <Image
         src={gainMoreInsight}
         alt="gainMoreInsight"
         width={554}
         height={556}
        />
       </div>
      </div>
     </div>
    </section>
    <section className="xxs:py-[10px] xl:py-[88px]">
     <div className="grid xxs:grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:gap-x-16 xl:gap-x-[130px] md:mt-[80px]">
      <div className="">
       <div className="relative">
        <Image
         className="absolute md:left-[-33px] xxs:left-[-13px] top-[-31px] xxs:w-20 md:w-auto"
         src={fullWave}
         alt="topLeftImage"
        />
        <Image
         className="absolute bottom-[-33px] md:right-[-31px] xxs:right-[-13px] xxs:w-20 md:w-auto"
         src={blueDots}
         alt="bottomRightImage"
        />
        <Image
         src={gainMoreInsight}
         alt="gainMoreInsight"
         width={554}
         height={556}
        />
       </div>
      </div>
      <div className="xl:mt-[66px] lg:mt-[10px] xxs:mt-[55px] xxs:text-center lg:text-start xxs:items-center">
       <p className="mb-[16px]">
        <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase">
         FEATURES
        </span>
       </p>
       <p className="xxs:text-2xl md:text-[48px] font-bold text-Gray-900 xxs:leading-8 md:leading-[60px] mb-[32px]">
        Gain more insight into how people use your
       </p>
       <p className="xxs:text-base md:text-xl font-medium text-Gray-500 leading-[30px] mb-[25px]">
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, <br />
        you can manage every aspect of your business in one secure platform.
       </p>
       <Button className="bg-primary border-primary hover:!bg-White-900 hover:text-Gray-800 xxs:mx-auto lg:mr-48 xxl:mx-0   xl:mr-80 xxs:py-[5px] md:py-[14px] xxs:px-[15px] md:px-[28px] text-lg font-medium	">
        Get Started
       </Button>
      </div>
     </div>
    </section>
    <section className="xxs:py-[10px] xl:py-[88px]">
     <div className="grid xxs:grid-cols-1 lg:grid-cols-2  lg:gap-x-8 xl:gap-x-[130px] md:mt-[40px] xl:mt-[80px]">
      <div className="xl:mt-[66px] lg:my-0 xxs:my-[55px] xxs:text-center lg:text-start">
       <p className="mb-[16px]">
        <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase">
         FEATURES
        </span>
       </p>
       <p className="xxs:text-2xl md:text-[48px] font-bold text-Gray-900 xxs:leading-8	md:leading-[60px] mb-[32px]">
        Gain more insight into how people use your
       </p>
       <p className="xxs:text-base md:text-xl font-medium text-Gray-500 leading-[30px] mb-[25px]">
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, <br />
        you can manage every aspect of your business in one secure platform.
       </p>
       <Button className="bg-primary border-primary hover:!bg-White-900 hover:text-Gray-800 xxs:mx-auto lg:mr-48  xl:mr-80 xxl:mx-0 xxs:py-[5px] md:py-[14px] xxs:px-[15px] md:px-[28px] text-lg font-medium	">
        Get Started 3
       </Button>
      </div>
      <div>
       <div className="relative">
        <Image
         className="absolute md:left-[-33px] xxs:left-[-13px] top-[-31px] xxs:w-20 md:w-auto"
         src={fullWave}
         alt="topLeftImage"
        />
        <Image
         className="absolute bottom-[-33px] md:right-[-31px] xxs:right-[-13px] xxs:w-20 md:w-auto"
         src={blueDots}
         alt="bottomRightImage"
        />
        <Image
         src={gainMoreInsight}
         alt="gainMoreInsight"
         width={554}
         height={556}
        />
       </div>
      </div>
     </div>
    </section>
   </div>
  </div>
 )
}

export default GainInsight
