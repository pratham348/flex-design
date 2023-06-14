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
   <div className="container px-[78px] ">
    <section className="pb-[122px]">
     <div>
      <p className="mb-[16px]">
       <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase">
        FEATURES
       </span>
      </p>
      <p className="text-[44px] font-bold text-Gray-900 leading-[44px] mb-[16px]">
       Gain more insight into how people use your
      </p>
      <p className="text-xl font-medium text-Gray-500 leading-[30px]">
       With our integrated CRM, project management, collaboration and invoicing
       capabilities, <br />
       you can manage every aspect of your business in one secure platform.
      </p>
     </div>
     <div className="grid grid-cols-2 grid-rows-1 gap-x-52 mt-[80px]">
      <div className="mt-[66px]">
       {data.map((ele) => {
        return (
         <div key={ele.id} className="flex mb-[40px] text-start">
          <div>
           <div className="bg-primary self-center w-max p-[20px] rounded-lg mr-[24px]">
            <Image src={ele.image} alt="image" className="object-cover" />
           </div>
          </div>
          <div className="mt-[12px]">
           <p className="font-bold text-2xl text-Gray-900">{ele.title}</p>
           <p className="text-base font-medium text-Gray-500 mt-[14px]">
            {ele.description}
           </p>
          </div>
         </div>
        )
       })}
      </div>
      <div>
       <div className="relative">
        <Image
         className="absolute left-[-33px] top-[-31px]"
         src={fullWave}
         alt="topLeftImage"
        />
        <Image
         className="absolute bottom-[-33px] right-[-31px]"
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
    <section className="py-[88px]">
     <div className="grid grid-cols-2 grid-rows-1 gap-x-[130px] mt-[80px]">
      <div>
       <div className="relative">
        <Image
         className="absolute left-[-33px] top-[-31px]"
         src={fullWave}
         alt="topLeftImage"
        />
        <Image
         className="absolute bottom-[-33px] right-[-31px]"
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
      <div className="mt-[66px]">
       <p className="mb-[16px]">
        <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase">
         FEATURES
        </span>
       </p>
       <p className="text-[48px] font-bold text-Gray-900 leading-[60px] mb-[32px]">
        Gain more insight into how people use your
       </p>
       <p className="text-xl font-medium text-Gray-500 leading-[30px] mb-[25px]">
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, <br />
        you can manage every aspect of your business in one secure platform.
       </p>
       <Button className="bg-primary border-primary hover:!bg-White-900 hover:text-Gray-800 mr-4 py-[14px] px-[28px] text-lg	font-medium	">
        Get Started
       </Button>
      </div>
     </div>
    </section>
    <section className="py-[88px]">
     <div className="grid grid-cols-2 grid-rows-1 gap-x-[130px] mt-[80px]">
      <div className="mt-[66px]">
       <p className="mb-[16px]">
        <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase">
         FEATURES
        </span>
       </p>
       <p className="text-[48px] font-bold text-Gray-900 leading-[60px] mb-[32px]">
        Gain more insight into how people use your
       </p>
       <p className="text-xl font-medium text-Gray-500 leading-[30px] mb-[25px]">
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, <br />
        you can manage every aspect of your business in one secure platform.
       </p>
       <Button className="bg-primary border-primary hover:!bg-White-900 hover:text-Gray-800 mr-4 py-[14px] px-[28px] text-lg	font-medium	">
        Get Started
       </Button>
      </div>
      <div>
       <div className="relative">
        <Image
         className="absolute left-[-33px] top-[-31px]"
         src={fullWave}
         alt="topLeftImage"
        />
        <Image
         className="absolute bottom-[-33px] right-[-31px]"
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
