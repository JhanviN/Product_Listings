"use client";
import { useState } from "react";
import { Range } from "react-range";

export default function Sidebar({ filters, setFilters }) {
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [priceRange, setPriceRange] = useState([13.99, 25.99]);

  const deals = [
    { name: "Nike", count: 2 },
    { name: "Airmax", count: 48 },
    { name: "Nike", count: 14 },
    { name: "Adidas", count: 15 },
    { name: "Vans", count: 23 },
    { name: "All Stars", count: 1 },
    { name: "Adidas", count: 95 },
  ];

  const brands = [
    { name: "Nike", count: 99 },
    { name: "Nike", count: 99 },
    { name: "Adidas", count: 99 },
    { name: "Siemens", count: 99 },
  ];

  return (
    <aside className="w-full lg:w-[355px] rounded-md p-4 bg-white">
      <div className="flex flex-col items-start space-y-6">

        {/* Hot Deals Box */}
        <div className="w-full bg-gray-100 rounded-md p-4">
          <h2 className="px-2 py-1 text-[20px] font-medium text-[#22262A] font-poppins leading-none">
            Hot Deals
          </h2>

          <div className="mt-16 w-full">
            {deals.map((deal, index) => (
              <div
                key={index}
                className={`flex justify-between items-center mb-4 px-2 py-1 rounded cursor-pointer ${
                  selectedDeal === index ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => setSelectedDeal(index)}
              >
                <span className="font-normal font-poppins">{deal.name}</span>
                <span className="font-normal font-poppins text-gray-900">{deal.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prices Box */}
        <div className="w-full bg-gray-100 rounded-md p-4 mt-12">
          <h2 className="px-2 py-1 text-[20px] font-medium text-[#22262A] font-poppins leading-none">
            PRICES
          </h2>

          <div className="flex justify-between items-center mt-4 px-2 font-poppins font-normal">
            <span>${priceRange[0].toFixed(2)}</span>
            <span>${priceRange[1].toFixed(2)}</span>
          </div>

          <div className="mt-4 px-2">
            <Range
              step={0.01}
              min={0}
              max={100}
              values={priceRange}
              onChange={(vals) => setPriceRange(vals)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-2 w-full bg-gray-300 rounded relative"
                >
                  <div
                    className="h-2 bg-blue-500 rounded absolute"
                    style={{
                      left: `${((priceRange[0] / 100) * 100).toFixed(2)}%`,
                      width: `${(((priceRange[1] - priceRange[0]) / 100) * 100).toFixed(2)}%`,
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div {...props} className="h-4 w-4 bg-blue-500 rounded-full" />
              )}
            />
          </div>
        </div>

        {/* Color Picker Box */}
        <div className="w-full h-[144px] bg-gray-100 rounded-md p-2 mt-40">
          <h2 className="px-2 py-1 text-[20px] font-medium text-[#22262A] font-poppins leading-none">
            COLOR
          </h2>

          <div className="mt-6 flex justify-between items-center rounded-md bg-gray-100 p-[2px] w-[293px] h-[30px]">
            {["#006CFF", "#FC3E39", "#171717", "#FFF600", "#FF00B4", "#EFDFDF"].map(
              (color, index) => (
                <div
                  key={index}
                  className="rounded-full cursor-pointer border"
                  style={{
                    width: "26px",
                    height: "23px",
                    backgroundColor: color,
                    borderColor: color === "#FFFFFF" ? "#D1D5DB" : "transparent",
                    borderWidth: color === "#FFFFFF" ? 1 : 0,
                  }}
                />
              )
            )}
          </div>
        </div>

        {/* Brand Box */}
        <div className="w-full h-[303px] bg-gray-100 rounded-md p-4 mt-6">
          <h2 className="px-2 py-1 text-[20px] font-medium text-[#22262A] font-poppins leading-none">
            BRAND
          </h2>

          <div className="mt-6 w-full">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`flex justify-between items-center mb-4 px-2 py-1 rounded cursor-pointer ${
                  selectedBrand === index ? "text-blue-500" : "text-gray-700"
                }`}
                onClick={() => setSelectedBrand(index)}
              >
                <span className="font-normal font-poppins">{brand.name}</span>
                <span className="font-normal font-poppins text-gray-900">{brand.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* More Box */}
        <div className="w-full h-[69px] bg-gray-100 rounded-md flex items-center justify-center mt-6">
          <span className="font-poppins font-medium text-[20px] text-[#22262A] leading-none">
            MORE
          </span>
        </div>
      </div>
    </aside>
  );
}
