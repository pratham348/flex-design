import { Button } from "flowbite-react"

const WayFromIdea = () => {
 return (
  <div className="bg-White-900 xxs:py-[20px] md:py-[64px]">
   <div className="container xxs:px-auto lg:px-[78px] ">
    <div className="grid gap-4 xxs:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 bg-Gray-bg  pt-[62px] pb-[64px] xxs:px-[10px] lg:px-[98px]  rounded-lg ">
     <div className="xxs:text-center lg:text-start">
      <p className="text-White-900 font-bold xxs:text-2xl md:text-4xl mb-[16px] leading-[44px]">
       The fastest way from idea to live site. Period.
      </p>
      <p className="xxs:text-sm md:text-xl font-medium text-Gray-400 leading-[20px]">
       Flex is a Small SaaS Business. Flex isn’t a traditional company.
      </p>
     </div>
     <div className="flex xxs:flex-col md:flex-row items-center lg:justify-end xxs:justify-evenly xxs:items-center">
      <Button className="bg-primary border-primary hover:!bg-White-900 hover:text-Gray-800  md:mr-4  xxs:py-[5px]  md:py-[14px] xxs:px-[15px]  xl:px-[23px] text-lg	font-medium	">
       Get Started
      </Button>
      <Button className="!bg-White-900 !border-White-900 !text-Gray-800 hover:!bg-primary hover:!border-primary hover:text-White-900  xxs:py-[5px]  md:py-[14px] xxs:px-[15px]  xl:px-[23px] text-lg font-medium	">
       Learn More
      </Button>
     </div>
    </div>
   </div>
  </div>
 )
}

export default WayFromIdea
