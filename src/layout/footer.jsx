import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  const footerData = [
    {
      title: "Models",
      links: [
        {
          name: "Storie",
          href: "/",
        },
        {
          name: "One",
          href: "/",
        },
        {
          name: "Loev",
          href: "/",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          name: "About",
          href: "/",
        },
        {
          name: "Blog",
          href: "/",
        },
        {
          name: "Loev",
          href: "/",
        },
      ],
    },
    {
      title: "Quick links",
      links: [
        {
          name: "Become a Dealer",
          href: "/",
        },
        {
          name: "Locate a Dealer",
          href: "/",
        },
        {
          name: "Emagine",
          href: "/",
        },
      ],
    },
    {
      title: "",
      links: [
        {
          name: "Book a test ride",
          href: "/",
        },
        {
          name: "Book now",
          href: "/",
        },
        {
          name: "Contact",
          href: "/",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#000000] text-white lg:px-24 md:px-12 px-5 py-[67px]">
      <div className="grid grid-cols-6 gap-x-4 gap-y-10">
        <div className="md:col-span-3 col-span-6 lg:text-[50px] md:text-3xl text-2xl font-semibold lg:w-4/5 md:w-11/12 w-full text-center md:text-left md:mx-0 mx-auto lg:leading-[65px] ">
          Stay Informed <br /> About Battre
        </div>
        <div className="flex bg-white bg-opacity-20 lg:col-span-3 col-span-6 ml-auto my-auto lg:w-4/5 w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email ID"
            className="px-6 md:py-5 py-4 bg-transparent w-full text-[#A1A1A1] focus:outline-none text-sm"
          />
          <button className="bg-white text-black lg:px-11 px-7 text-xs font-semibold">
            SUBSCRIBE
          </button>
        </div>
        <div className="col-span-6 border border-[#434343]" />
        <div className="md:col-span-2 col-span-6 flex flex-col md:w-1/2 text-sm">
          <span>
            Kasra No 351, 80 Feet Road Vinayak City Guru Marg, Sirsi Road
            Neemera, Bindayaka,
          </span>
          <br />
          <span>Jaipur, Rajasthan, 302041</span>
          <br />
          <span>CIN: U29100RJ2017PTC059452</span>
        </div>
        {footerData?.map((item) => (
          <div className="flex flex-col gap-4 text-sm md:ml-auto md:col-span-1 col-span-3">
            <div className="text-[#E4E4E4] text-opacity-60 min-h-5">
              {item.title}
            </div>
            {item.links?.map((link) => (
              <a href={link.href}>{link.name}</a>
            ))}
          </div>
        ))}
        <div className="col-span-6 border border-[#434343] mt-10" />
        <div className="md:col-span-2 col-span-6 text-opacity-50 text-white md:text-sm text-xs mx-auto md:mx-0">© 2023 Batt:RE. All rights reserved</div>
        <div className="md:col-span-2 col-span-6 text-opacity-50 text-white md:text-sm text-xs mx-auto flex gap-6 ">
          <div>PRIVACY POLICY</div>
          <div>TERMS & CONDITIONS</div>
        </div>
        <div className="md:col-span-2 col-span-6 text-opacity-50 text-white text-2xl flex gap-4 ml-auto md:mr-0 mr-auto ">
        <FaInstagram />
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
        <FaYoutube />

        </div>
      </div>
    </div>
  );
}

export default Footer;
