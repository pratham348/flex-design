import React from "react"
import Slider from "react-slick"
import logo1 from "@/assets/icons/logo1.svg"
import logo2 from "@/assets/icons/logo2.svg"
import logo3 from "@/assets/icons/logo3.svg"
import logo4 from "@/assets/icons/logo4.svg"
import logo5 from "@/assets/icons/logo5.svg"
import BGWave from "@/assets/icons/BGWave.svg"
import Image from "next/image"

const CompanySlider = () => {
 const imageArray = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5
 ]
 const settings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
   {
    breakpoint: 1440,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 3,
     initialSlide: 3
    }
   },
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 3,
     initialSlide: 3
    }
   },
   {
    breakpoint: 425,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 2,
     initialSlide: 2
    }
   },
   {
    breakpoint: 375,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     initialSlide: 1
    }
   }
   //    {
   //     breakpoint: 320,
   //     settings: {
   //      slidesToShow: 1,
   //      slidesToScroll: 1,
   //      initialSlide: 1
   //     }
   //    },
   //    {
   //     breakpoint: 280,
   //     settings: {
   //      slidesToShow: 1,
   //      slidesToScroll: 1
   //     }
   //    }
  ]
 }
 return (
  <div>
   <div className="container">
    <div className="xxs:px-auto lg:px-[65px] xxs:py-[50px] lg:py-[88px] text-center">
     <p className="text-Gray-300 pb-[32px]">
      Join 4,000+ companies already growing
     </p>
     <Slider {...settings} className=" focus-visible:ring-0">
      {imageArray?.map((image, key) => {
       return (
        <div
         key={key}
         className=" focus-visible:!ring-transparent opacity-1 z-10"
        >
         <Image src={image} alt="image" className="mx-auto" />
        </div>
       )
      })}
     </Slider>
    </div>
   </div>
   <div className="relative bg-White-900">
    <Image className="inset-x-0 bottom-0 w-full" src={BGWave} alt="BGWave" />
   </div>
  </div>
 )
}

export default CompanySlider
