import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200 mt-20' >
          <footer className="footer container mx-auto text-base-content p-10">
  <aside>
   <Link href={'/'}><Image src={'/assets/logo.svg'} height={60} width={100} alt='footer logo'></Image></Link>
    <p>
      CarDoctor Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;