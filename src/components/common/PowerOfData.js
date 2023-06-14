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
   <div className="container px-[78px] py-[88px]">
    <div className="mb-[96px] text-center">
     <p className="mb-[16px]">
      <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase">
       FEATURES
      </span>
     </p>
     <p className="text-[48px] font-bold text-Gray-900 leading-[60px] mb-[16px]">
      We believe in the power of data
     </p>
     <p className="text-xl font-medium text-Gray-500 leading-[30px]">
      Flex is the only business platform that lets you run your business on one
      platform, seamlessly across all digital channels.
     </p>
    </div>
    <div className="flex justify-between text-center">
     {data.map((ele, key) => {
      return (
       <div key={key}>
        <p className="text-[48px] font-bold text-primary leading-[60px] mb-[16px]">
         {ele.title}
        </p>
        <p className="text-xl font-medium text-Gray-500 leading-[30px]">
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
