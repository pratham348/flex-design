import React from "react"
import mail from "../../assets/icons/mail.svg"
import analytics from "../../assets/icons/analytics.svg"
import management from "../../assets/icons/management.svg"
import buildWebsite from "../../assets/icons/buildWebsite.svg"
import multipleApps from "../../assets/icons/multipleApps.svg"
import setup from "../../assets/icons/setup.svg"
import Image from "next/image"

const Insight = () => {
 const data = [
  {
   id: 1,
   image: mail,
   title: "Measure your performance",
   description:
    "Stay connected with your team and make quick decisions wherever you are. "
  },
  {
   id: 2,
   image: analytics,
   title: "Custom analytics",
   description:
    "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
  },
  {
   id: 3,
   image: management,
   title: "Team Management",
   description:
    "Our calendar lets you know what is happening with customer and projects so you."
  },
  {
   id: 4,
   image: buildWebsite,
   title: "Build your website",
   description:
    "A tool that lets you build a dream website even if you know nothing about web design or programming."
  },
  {
   id: 5,
   image: multipleApps,
   title: "Connect multiple apps",
   description:
    "The first business platform to bring together all of your products from one place."
  },
  {
   id: 6,
   image: setup,
   title: "Easy setup",
   description:
    "End to End Business Platform, Sales Management, Marketing Automation, Help Desk"
  }
 ]
 return (
  <div className="bg-White-900 pb-[100px]">
   <div className="container text-center px-[78px]">
    <span className="px-[8px] py-[4px] bg-Primary-100 text-primary rounded-xl text-xs uppercase">
     FEATURES
    </span>
    <p className="text-4xl	text-Gray-900 font-bold my-[16px]">
     Gain more insight into how people use your
    </p>
    <p className="text-xl font-medium text-Gray-500 px-[170px] mb-[48px]">
     With our integrated CRM, project management, collaboration and invoicing
     capabilities, you can manage every aspect of your business in one secure
     platform.
    </p>
    <div class="grid grid-cols-3 grid-rows-2 gap-8">
     {data?.map((e) => {
      return (
       <div key={e.id} className="flex flex-col  justify-start">
        <div className="bg-primary self-center p-[20px] rounded-lg">
         <Image src={e.image} alt="image" className="object-cover" />
        </div>
        <p className="font-bold	text-2xl text-Gray-900 mt-[24px]">{e.title}</p>
        <p className="text-base font-medium	 text-Gray-500 mt-[16px]">
         {e.description}
        </p>
       </div>
      )
     })}
    </div>
   </div>
  </div>
 )
}

export default Insight
