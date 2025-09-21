"use client";
import { useState } from "react";
import { Range } from "react-range";

export default function Sidebar({ filters, setFilters }) {
  const [selectedDeal, setSelectedDeal] = useState(null);
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

  return (
    <aside
      className="hidden lg:block rounded-md p-4"
      style={{ width: "355px", height: "1385px", backgroundColor: "#FFFFFF" }}
    >
      <div className="space-y-6 flex flex-col items-start">

        {/* Hot Deals Box */}
        <div
          className="rounded-md p-4"
          style={{ width: "100%", backgroundColor: "#F6F7F8" }}
        >
          <h2
            className="px-2 py-1 text-lg text-[#22262A] whitespace-nowrap font-medium"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", lineHeight: "100%" }}
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
                  color: selectedDeal === index ? "#3B82F6" : "#374151",
                  backgroundColor: "#F6F7F8",
                }}
              >
                <span>{deal.name}</span>
                <span>{deal.count}</span>
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
            className="px-2 py-1 text-lg text-[#22262A] whitespace-nowrap font-medium"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", lineHeight: "100%" }}
          >
            PRICES
          </h2>

          {/* Price Range Display */}
          <div className="flex justify-between items-center mt-4 px-2">
            <span>${priceRange[0].toFixed(2)}</span>
            <span>${priceRange[1].toFixed(2)}</span>
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

      </div>
    </aside>
  );
}
