import { Button } from "flowbite-react"

const WayFromIdea = () => {
 return (
  <div className="bg-White-900 py-[64px]">
   <div className="container px-[78px]">
    <div className="grid gap-4 grid-rows-1 grid-cols-2 bg-Gray-bg  pt-[62px] pb-[64px] px-[98px]  rounded-lg ">
     <div>
      <p className="text-White-900 font-bold text-4xl mb-[16px] leading-[44px]">
       The fastest way from idea to live site. Period.
      </p>
      <p className="text-xl font-medium text-Gray-400 leading-[20px]">
       Flex is a Small SaaS Business. Flex isn’t a traditional company.
      </p>
     </div>
     <div className="flex items-center justify-end">
      <Button className="bg-primary border-primary hover:!bg-White-900 hover:text-Gray-800 mr-4 py-[14px] px-[28px] text-lg	font-medium	">
       Get Started
      </Button>
      <Button className="!bg-White-900 !border-White-900 !text-Gray-800 hover:!bg-primary hover:!border-primary hover:text-White-900 py-[14px] px-[28px] text-lg	font-medium	">
       Learn More
      </Button>
     </div>
    </div>
   </div>
  </div>
 )
}

export default WayFromIdea
