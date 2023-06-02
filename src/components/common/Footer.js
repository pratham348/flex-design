import { Footer } from "flowbite-react"
import React from "react"
import logo from "@/assets/icons/Logo-light.svg"
import Image from "next/image"

const FooterBar = () => {
 return (
  <Footer container className="!bg-Gray-900 rounded-none">
   <div className=" w-full text-center ">
    <div className="flex w-full items-center justify-center flex-col gap-8 sm:flex ">
     <Image alt="Logo" className="mr-3 h-6 sm:h-9" src={logo} />
     <Footer.LinkGroup className="gap-12">
      <Footer.Link href="/product">Product</Footer.Link>
      <Footer.Link href="/features">Features</Footer.Link>
      <Footer.Link href="/pricing">Pricing</Footer.Link>
      <Footer.Link href="/resources">Resources</Footer.Link>
      <Footer.Link href="/careers">Careers</Footer.Link>
      <Footer.Link href="/help">Help</Footer.Link>
      <Footer.Link href="/privacy">Privacy</Footer.Link>
     </Footer.LinkGroup>
    </div>
    <Footer.Copyright
     by="Flex. All rights reserved."
     href="#"
     year={2022}
     className="pt-[84px]"
    />
   </div>
  </Footer>
 )
}

export default FooterBar
