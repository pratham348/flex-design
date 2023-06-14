/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import React, { Fragment } from "react"
import openEmail from "../../assets/icons/openEmail.svg"
import phone from "../../assets/icons/phone.svg"
import social from "../../assets/icons/social.svg"
import fb from "../../assets/icons/fb.svg"
import insta from "../../assets/icons/insta.svg"
import twitter from "../../assets/icons/twitter.svg"
import linkedin from "../../assets/icons/linkdin.svg"
import map from "../../assets/images/map.svg"

const Connect = () => {
 return (
  <Fragment>
   <div className="bg-White-900">
    <div className="container text-center pt-[90px] pb-[62px]">
     <p className="mb-[18px]">
      <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase ">
       CONTACT
      </span>
     </p>
     <p className="text-[48px] font-bold text-Gray-900 leading-[60px] mb-[16px]">
      Let’s stay connected
     </p>

     <p className="text-xl font-medium text-Gray-500 leading-[30px] px-[145px] mb-[64px]">
      It's never been easier to get in touch with Flex. Call us, use our live
      chat widget or email and we'll get back to you as soon as possible!
     </p>
     <div className="grid grid-cols-3 grid-rows-1 gap-8 ">
      <div className="flex flex-col  justify-start">
       <div className="bg-primary self-center p-[20px] rounded-lg mb-[24px]">
        <Image src={openEmail} alt="openEmail" className="object-cover" />
       </div>
       <p className="text-[30px] font-bold text-Gray-900 leading-[38px] mb-[8px]">
        Email
       </p>
       <a
        href="mailto:contact@flex.co"
        className="text-xl font-medium text-Gray-500 leading-[30px] "
       >
        contact@flex.co
       </a>
      </div>
      <div className="flex flex-col  justify-start">
       <div className="bg-primary self-center p-[20px] rounded-lg mb-[24px]">
        <Image src={phone} alt="openEmail" className="object-cover" />
       </div>
       <p className="text-[30px] font-bold text-Gray-900 leading-[38px] mb-[8px]">
        Phone
       </p>
       <a
        href="tel:+7-843-672-431"
        className="text-xl font-medium text-Gray-500 leading-[30px] "
       >
        +7-843-672-431
       </a>
      </div>
      <div className="flex flex-col  justify-start">
       <div className="bg-primary self-center p-[20px] rounded-lg mb-[24px]">
        <Image src={social} alt="openEmail" className="object-cover" />
       </div>
       <p className="text-[30px] font-bold text-Gray-900 leading-[38px] mb-[8px]">
        Socials
       </p>
       <div className="flex justify-evenly">
        <Image src={fb} alt="fb" />
        <Image src={twitter} alt="twitter" />
        <Image src={insta} alt="insta" />
        <Image src={linkedin} alt="linkedin" />
       </div>
      </div>
     </div>
    </div>
    <div className="flex justify-center flex-col bg-Gray-900 border-t-[6px] border-primary mt-[320px]">
     <div className="relative w-full flex justify-center bottom-[320px] h-[641px]">
      <Image src={map} alt="map" className="" />
     </div>
    </div>
   </div>
  </Fragment>
 )
}

export default Connect
