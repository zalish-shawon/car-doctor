import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navItems = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Services",
            href: "/services"
        },
        {
            label: "Blog",
            href: "/blog"
        },
        {
            label: "Contact",
            href: "/contact"
        }
    ]

    return (
        <div>
  <div className=" bg-base-100">
    <div className='navbar container mx-auto'>
    <div className="navbar-start">
        <Link href="/">
        <Image src="/assets/logo.svg" alt='logo' height={60} width={100}></Image>
        </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
   <div className='flex space-x-6 items-center'>
    {
        navItems.map((item, index) => (
            <Link className='font-semibold' key={index} href={item.href}>
                {item.label}
            </Link>
        ))
    }
   </div>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary btn-outline ">Appointment</a>
  </div>
</div> 

  
</div>
</div>
    );
};

export default Navbar;