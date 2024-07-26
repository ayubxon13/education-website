"use client";
import {navLink} from "@/utils";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function ShowNavbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShow(false)}
      />
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white p-6 md:p-8 lg:p-12 overflow-y-auto shadow-lg transition-transform duration-300 ease-in-out transform ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col space-y-4 text-center">
          {navLink.map((link) => (
            <Link
              key={link.name}
              className="hover:text-[#FF9500]"
              href={link.link}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <Image
        onClick={() => setShow(true)}
        width={34}
        height={34}
        className="block lg:hidden cursor-pointer"
        src="/burger.svg"
        alt="Menu bar image"
      />
    </>
  );
}
