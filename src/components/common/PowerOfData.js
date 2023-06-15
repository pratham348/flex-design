import React from "react"

const PowerOfData = () => {
 const data = [
  {
   title: "235.000",
   slug: "Projects completed"
  },
  {
   title: "$10m",
   slug: "APR"
  },
  {
   title: "+50.000",
   slug: "Hours Saved Annually"
  },
  {
   title: "3.500",
   slug: "Unique Users"
  }
 ]
 return (
  <div className="bg-White-900">
   <div className="container md:px-[78px] md:py-[88px] xxs:py-[44px]">
    <div className="xxs:mb-[48px] md:mb-[96px] text-center">
     <p className="mb-[16px]">
      <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase ">
       FEATURES
      </span>
     </p>
     <p className="xxs:text-2xl md:text-[48px] font-bold text-Gray-900 xxs:leading-10 lg:leading-[60px] mb-[16px] ">
      We believe in the power of data
     </p>
     <p className="xxs:text-base md:text-xl font-medium text-Gray-500 leading-[30px]">
      Flex is the only business platform that lets you run your business on one
      platform, seamlessly across all digital channels.
     </p>
    </div>
    <div className="flex lg:flex-row xxs:flex-col  justify-between text-center">
     {data.map((ele, key) => {
      return (
       <div key={key} className="xxs:mb-4 lg:mb-0">
        <p className="xxs:text-2xl md:text-[48px] font-bold text-primary leading-[60px] mb-[16px]">
         {ele.title}
        </p>
        <p className="xxs:text-base md:text-xl font-medium text-Gray-500 leading-[30px]">
         {ele.slug}
        </p>
       </div>
      )
     })}
    </div>
   </div>
  </div>
 )
}

export default PowerOfData
