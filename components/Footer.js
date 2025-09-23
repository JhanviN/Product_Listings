"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import visa from "../public/images/visa.png"
import paypal from "../public/images/paypal.png"
import western_union from "../public/images/western_union.png"
import mastercard from "../public/images/mastercard.png"
export default function Footer() {
  return (
    <footer className="bg-[#BCDDFE] w-full">
      <div className="max-w-[1200px] mx-auto px-8 py-12 flex flex-col gap-12">
        
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
          <div>
            <h2
              className="text-2xl font-bold text-[#22262A] mb-4"
              style={{
                font: "Poppins",
                weight: "700",
                fontSize: "18px",
                letterSpacing: "0%",
              }}
            >
              E-Comm
            </h2>
            <p
              className="text-sm text-[#22262A] leading-relaxed"
              style={{
                font: "Proxima Nova",
                weight: "400",
                fontSize: "12px",
                letterSpacing: "0%",
              }}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              since the 1500s.
            </p>
          </div>


          <div>
            <h2
              className="font-semibold text-[#22262A] mb-4"
              style={{
                font: "Poppins",
                weight: "500",
                fontSize: "18px",
                letterSpacing: "0%",
              }}
            >
              Follow Us
            </h2>
            <p
              className="text-sm text-[#22262A] mb-4"
              style={{
                font: "Proxima Nova",
                weight: "400",
                fontSize: "12px",
                letterSpacing: "0%",
              }}
            >
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200"
              >
                <FaFacebookF
                  size={18}
                  className="text-[#1877F2] hover:scale-110 hover:text-[#1DA1F2]"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200"
              >
                <FaTwitter
                  size={18}
                  className="text-[#1DA1F2] hover:scale-110 hover:text-[#1DA1F2]"
                />
              </a>
            </div>
          </div>

          <div>
            <h2
              className="font-semibold text-[#22262A] mb-4"
              style={{
                font: "Poppins",
                weight: "500",
                fontSize: "18px",
                letterSpacing: "0%",
              }}
            >
              Contact Us
            </h2>
            <p
              className="text-sm text-[#22262A] leading-relaxed"
              style={{
                font: "Poppins",
                weight: "400",
                fontSize: "14px",
                letterSpacing: "0%",
              }}
            >
              E-Comm, 4578 Marmora Road,
              <br />
              Glasgow D04 89GR
            </p>
          </div>
        </div>

 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3
              className="font-semibold text-[#22262A] mb-3"
              style={{
                font: "Poppins",
                weight: "400",
                fontSize: "18px",
                letterSpacing: "0%",
              }}
            >
              Information
            </h3>
            <ul
              className="space-y-2 text-sm text-[#22262A]"
              style={{
                font: "Poppins",
                weight: "400",
                fontSize: "14px",
                letterSpacing: "0%",
              }}
            >
              <li><a href="/about">About Us</a></li>
              <li><a href="/info">Information</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3
              className="font-semibold text-[#22262A] mb-3"
              style={{
                font: "Poppins",
                weight: "400",
                fontSize: "18px",
                letterSpacing: "0%",
              }}
            >
              Service
            </h3>
            <ul
              className="space-y-2 text-sm text-[#22262A]"
              style={{
                font: "Poppins",
                weight: "400",
                fontSize: "14px",
                letterSpacing: "0%",
              }}
            >
              <li><a href="/about">About Us</a></li>
              <li><a href="/info">Information</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3
              className="font-semibold text-[#22262A] mb-3"
              style={{
                font: "Poppins",
                weight: "400",
                fontSize: "18px",
                letterSpacing: "0%",
              }}
            >
              My Account
            </h3>
            <ul
              className="space-y-2 text-sm text-[#22262A]"
              style={{
                font: "Poppins",
                weight: "400",
                fontSize: "14px",
                letterSpacing: "0%",
              }}
            >
              <li><a href="/about">About Us</a></li>
              <li><a href="/info">Information</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3
              className="font-semibold text-[#22262A] mb-3"
              style={{
                font: "Poppins",
                weight: "400",
                fontSize: "18px",
                letterSpacing: "0%",
              }}
            >
              Our Offers
            </h3>
            <ul
              className="space-y-2 text-sm text-[#22262A]"
              style={{
                font: "Poppins",
                weight: "400",
                fontSize: "14px",
                letterSpacing: "0%",
              }}
            >
              <li><a href="/about">About Us</a></li>
              <li><a href="/info">Information</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div
          className="bg-white mx-auto"
          style={{
            width: "1180px",
            height: "1px",
          }}
        ></div>
      </div>

      <div className="w-full border-t border-gray-300 bg-[#BCDDFE] py-4">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-8">
          <p className="text-sm text-[#22262A]"
          style={{
            color: "#C1C8CE",
            font: "Proxima Nova",
            weight: "400",
            fontSize: "14px",
            letterSpacing: "0%",
            bottom: "80px"


          }}
          >
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Image
              src={western_union}
              alt="Western Union"
              width={50}
              height={30}
              className="object-contain"
            />
            <Image
              src={visa}
              alt="Visa"
              width={50}
              height={30}
              className="object-contain"
            />
            <Image
              src={mastercard}
              alt="Mastercard"
              width={50}
              height={30}
              className="object-contain"
            />
            <Image
              src={paypal}
              alt="Paypal"
              width={50}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
