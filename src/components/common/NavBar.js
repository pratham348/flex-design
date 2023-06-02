import React from "react"
import { Button, Navbar } from "flowbite-react"
import logo from "@/assets/icons/Logo.svg"
import Image from "next/image"

const NavBar = () => {
 return (
  <div className="container mb-[14px] ">
   <Navbar fluid rounded className="!bg-Gray-050">
    <Navbar.Brand href="https://flowbite.com/">
     <Image alt="Logo" className="mr-3 h-6 sm:h-9" src={logo} />
    </Navbar.Brand>
    <div className="flex md:order-2 gap-4 items-center">
     <a href="/log-in" className="text-base text-Gray hover:!text-primary">
      Log In
     </a>
     <Button className="bg-primary border-primary hover:bg-transparent hover:text-primary">
      Sign Up
     </Button>
     <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
     <Navbar.Link
      className="text-base text-Gray hover:!text-primary"
      href="/product"
     >
      Product
     </Navbar.Link>
     <Navbar.Link
      className="text-base text-Gray hover:!text-primary"
      href="/features"
     >
      Features
     </Navbar.Link>
     <Navbar.Link
      className="text-base text-Gray hover:!text-primary"
      href="/pricing"
     >
      Pricing
     </Navbar.Link>
     <Navbar.Link
      className="text-base text-Gray hover:!text-primary"
      href="/resources"
     >
      Resources
     </Navbar.Link>
    </Navbar.Collapse>
   </Navbar>
  </div>
 )
}

export default NavBar
