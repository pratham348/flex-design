import React from "react"
import StartYourAppImage from "../../assets/images/startYourApp1.svg"
import StartYourAppImageLeft from "../../assets/images/startYourAppLeft.svg"
import StartYourAppImageRight from "../../assets/images/startYourAppRight.svg"
import Image from "next/image"
import { Button } from "flowbite-react"

const StartYourApp = () => {
 return (
  <div className="bg-White-900">
   <div className="container text-center pt-[88px]">
    <p className="mb-[16px]">
     <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs ">
      Application
     </span>
    </p>
    <p className="text-4xl font-bold text-Gray-900 mb-[40px]">
     Gain more insight into how people use your
    </p>
    <div className=" flex justify-center mb-[40px]">
     <Image src={StartYourAppImage} alt="StartYourAppImage" width={944} />
    </div>
    <p className="text-xl font-medium text-Gray-500 leading-[30px] px-[145px]">
     Our philosophy is simple — hire a team of diverse, passionate people and
     foster a culture that empowers you to do you best work.
    </p>
    <div className="flex items-center justify-center gap-[24px] pt-[24px] pb-[88px]">
     <Button className="bg-primary !border-primary hover:!bg-White-900 hover:text-Gray-800 py-[14px] px-[28px] text-lg	font-medium	">
      Learn More
     </Button>
     <Button className="!bg-White-900 !border-gray-200 border-2 !text-Gray-800 hover:!bg-primary hover:!border-primary hover:text-White-900 py-[14px] px-[28px] text-lg	font-medium	">
      About Us
     </Button>
    </div>
   </div>
  </div>
 )
}

export default StartYourApp
