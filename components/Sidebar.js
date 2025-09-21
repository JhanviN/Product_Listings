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
    <aside
      className="hidden lg:block rounded-md p-4"
      style={{ width: "355px",  backgroundColor: "#FFFFFF" }}
    >
      <div className="space-y-6 flex flex-col items-start">

        {/* Hot Deals Box */}
        <div
          className="rounded-md p-4"
          style={{ width: "100%", backgroundColor: "#F6F7F8" }}
        >
          <h2
            className="px-2 py-1 text-lg text-[#22262A]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "100%",
            }}
          >
            Hot Deals
          </h2>

          {/* Deals List */}
          <div className="mt-6 w-full">
            {deals.map((deal, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4 cursor-pointer px-2 py-1 rounded"
                onClick={() => setSelectedDeal(index)}
                style={{
                  backgroundColor: "#F6F7F8",
                }}
              >
                <span
                  style={{
                    fontWeight: 400,
                    color: selectedDeal === index ? "#3B82F6" : "#374151",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {deal.name}
                </span>
                <span
                  style={{
                    fontWeight: 400,
                    color: "#22262A",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {deal.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Prices Box */}
        <div
          className="rounded-md p-4 mt-6"
          style={{ width: "100%", backgroundColor: "#F6F7F8" }}
        >
          <h2
            className="px-2 py-1 text-lg text-[#22262A]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "100%",
            }}
          >
            PRICES
          </h2>

          {/* Price Range Display */}
          <div className="flex justify-between items-center mt-4 px-2">
            <span style={{ fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
              ${priceRange[0].toFixed(2)}
            </span>
            <span style={{ fontWeight: 400, fontFamily: "Poppins, sans-serif" }}>
              ${priceRange[1].toFixed(2)}
            </span>
          </div>

          {/* Dual-handle Range Slider */}
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
                <div
                  {...props}
                  className="h-4 w-4 bg-blue-500 rounded-full"
                />
              )}
            />
          </div>
        </div>

        {/* Color Picker Box */}
        <div
          className="rounded-md p-2 mt-6"
          style={{
            width: "100%",
            height: "144.22px",
            backgroundColor: "#F6F7F8",
          }}
        >
          <h2
            className="px-2 py-1 text-lg text-[#22262A]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "100%",
            }}
          >
            COLOR
          </h2>

          <div
            className="mt-6 flex justify-between items-center rounded-md"
            style={{
              width: "292.53px",
              height: "30.49px",
              backgroundColor: "#F6F7F8",
              padding: "2px 4px",
            }}
          >
            {["#006CFF", "#FC3E39", "#171717", "#FFF600", "#FF00B4", "#EFDFDF"].map(
              (color, index) => (
                <div
                  key={index}
                  className="rounded-full cursor-pointer border"
                  style={{
                    width: "25.77px",
                    height: "23.45px",
                    backgroundColor: color,
                    borderColor: "#D1D5DB",
                    borderWidth: color === "#FFFFFF" ? "1px" : "0",
                  }}
                ></div>
              )
            )}
          </div>
        </div>

        {/* Brand Box */}
        <div
          className="rounded-md p-4 mt-6"
          style={{
            width: "100%",
            height: "303.15px",
            backgroundColor: "#F6F7F8",
          }}
        >
          <h2
            className="px-2 py-1 text-lg text-[#22262A]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "100%",
            }}
          >
            BRAND
          </h2>

          <div className="mt-6 w-full">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4 cursor-pointer px-2 py-1 rounded"
                onClick={() => setSelectedBrand(index)}
                style={{
                  backgroundColor: "#F6F7F8",
                }}
              >
                <span
                  style={{
                    fontWeight: 400,
                    color: selectedBrand === index ? "#3B82F6" : "#374151",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {brand.name}
                </span>
                <span
                  style={{
                    fontWeight: 400,
                    color: "#22262A",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {brand.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* More Box */}
        <div
          className="rounded-md mt-6 flex items-center justify-center"
          style={{
            width: "100%",
            height: "69.29px",
            backgroundColor: "#F6F7F8",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "100%",
              color: "#22262A",
            }}
          >
            MORE
          </span>
        </div>
      </div>
    </aside>
  );
}
