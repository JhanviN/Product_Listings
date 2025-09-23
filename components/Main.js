'use client';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Image from 'next/image';
import sampleImage from '../public/images/main_shoe.png';
import { BsGrid3X3Gap, BsList } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import sampleImage_1 from '../public/images/image_1.png';
import sampleImage_2 from '../public/images/image_2.png';
import sampleImage_3 from '../public/images/image_3.png';
import sampleImage_4 from '../public/images/image_4.png';
import sampleImage_5 from '../public/images/image_5.png';
import sampleImage_6 from '../public/images/image_6.png';
export default function Main({ filters, setFilters }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5;
  return (
    <div className="flex flex-row mt-4 gap-6 relative">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar filters={filters} setFilters={setFilters} />
      </div>
      {/* Mobile Sidebar Overlay */}
{sidebarOpen && (
  <div className="fixed inset-0 z-50 flex">
    <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
    <div className="relative w-64 bg-white h-full z-50 shadow-lg animate-slide-in">
      <Sidebar filters={filters} setFilters={setFilters} />
    </div>
  </div>
)}
    

      {/* Main content area */}
      <div className="flex-1 flex flex-col justify-start items-start px-4 md:px-0">
        <button
          className="md:hidden mb-4 text-lg font-bold text-[#40BFFF]"
          onClick={() => setSidebarOpen(true)}
        >
          ☰ Slidebar
        </button>
        {/* Blue container */}
        <div
          className="relative rounded-md flex flex-col md:flex-row justify-between items-center px-6 md:px-8 w-full md:max-w-[1069px] h-auto md:h-[350px] bg-[#40BFFF]"
          
        >
          {/* Left text content */}
          <div
            className="flex flex-col justify-center md:max-w-[390.46px] w-full md:w-auto mt-6 md:mt-0"
            
          >
            <h1 className="font-poppins font-medium text-[30px] text-white leading-[100%]">
              Adidas Men Running
            </h1>
            <h1 className="font-poppins font-medium text-[30px] text-white leading-[100%] mt-3">
              Sneakers
            </h1>
            <p className="font-poppins font-normal text-[14px] text-white mt-4 leading-[100%]">
              Performance and design. Taken right to the edge.
            </p>
            <div className="relative mt-6">
              <span className="font-poppins font-semibold text-[12px] text-white">
                Shop Now
              </span>
              <div className="absolute left-0 -bottom-1 w-[52px] h-[1.5px] bg-white" />
            </div>
          </div>

          {/* Right shoe image */}
          <div
            className="relative flex items-end justify-center overflow-hidden w-full md:max-w-[442.76px] h-[250px] md:h-[350px]"
            
          >
            <Image
              src={sampleImage}
              alt="Sample"
              width={400}
              height={200}
              className="object-contain transform scale-x-[-1]"
            />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
        </div>

{/* Gray bar beneath blue container */}
<div
  className="mt-4 rounded-md flex flex-col md:flex-row items-center px-4 md:px-6 
             w-full max-w-[1069px] h-auto md:h-[62.57px] bg-[#F6F7F8] gap-4 md:gap-0"
>
  {/* Left: Items count */}
  <div className="flex-1 flex justify-start w-full md:w-auto">
    <span className="text-sm font-medium text-gray-700">13 Items</span>
  </div>

  {/* Sort By */}
  <div className="flex-1 flex justify-center items-center gap-2 w-full md:w-auto">
    <span className="text-sm text-gray-600">Sort By</span>
    <select className="border rounded px-2 py-1 text-sm focus:outline-none">
      <option>Name</option>
      <option>Price</option>
      <option>Popularity</option>
    </select>
  </div>

  {/* Show */}
  <div className="flex-1 flex justify-center items-center gap-2 w-full md:w-auto">
    <span className="text-sm text-gray-600">Show</span>
    <select className="border rounded px-2 py-1 text-sm focus:outline-none">
      <option>12</option>
      <option>24</option>
      <option>36</option>
    </select>
  </div>

  {/* Right: Grid/List toggle */}
  <div className="flex-1 flex justify-end items-center gap-3 w-full md:w-auto">
    <button className="p-1 rounded hover:bg-gray-200">
      <BsGrid3X3Gap className="w-5 h-5 text-[#40BFFF]" />
    </button>
    <button className="p-1 rounded hover:bg-gray-200">
      <BsList className="w-5 h-5 text-gray-500" />
    </button>
  </div>
</div>

{/* Product Grid: 2 rows x 3 columns */}
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

  {[
    { id: 1, name: 'Nike Air Max 270 React', price: "534,33", discount: "299,33", off:"24% Off", image: sampleImage_1 },
    { id: 2, name: 'Nike Air Max 270 React', price: "534,33", discount: "299,33", off:"24% Off", image: sampleImage_2 },
    { id: 3, name: 'Nike Air Max 270 React', price: "534,33", discount: "299,33", off:"24% Off", image: sampleImage_3 },
    { id: 4, name: 'Nike Air Max 270 React', price: "534,33", discount: "299,33", off:"24% Off", image: sampleImage_4 },
    { id: 5, name: 'Nike Air Max 270 React', price: "534,33", discount: "299,33", off:"24% Off", image: sampleImage_5 },
    { id: 6, name: 'Nike Air Max 270 React', price: "534,33", discount: "299,33", off:"24% Off", image: sampleImage_6 },
  ].map((product) => (
    <div
      key={product.id}
      className="border border-gray-300 rounded-md w-full max-w-[328px] h-[408px] flex flex-col items-center p-2"
    >
      {/* Image with HOT tag */}
      <div className="relative w-full h-[286px] flex items-center justify-center overflow-hidden rounded-md">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          HOT
        </span>
      </div>

      {/* Product Name */}
      <h2 className="mt-3 text-[#223263] font-poppins font-bold text-[18px] leading-[150%] tracking-[0.5px] text-center">
        {product.name}
      </h2>

      {/* Star Rating: 4 out of 5 */}
      <div className="flex justify-center mt-2 gap-1">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>

      {/* Price / Discount / Off */}
      <div className="flex justify-center items-center mt-2 gap-2">
        <span className="text-[14px] font-semibold" style={{ color: '#40BFFF' }}>
          ${product.price}
        </span>
        <span className="text-[14px] font-semibold line line-through" style={{ color: '#9098B1' }}>
          ${product.discount}
        </span>
        <span className="text-[14px] font-semibold" style={{ color: '#FB7181' }}>
          {product.off}
        </span>
      </div>
    </div>
  ))}
</div>


<div className="flex justify-center items-center mt-6 rounded-md w-full max-w-[1070px] h-[69px] bg-gray-100">
  {Array.from({ length: totalPages }, (_, i) => (
    <div
      key={i + 1}
      onClick={() => setActivePage(i + 1)}
      className={`
        flex items-center justify-center cursor-pointer rounded
        w-[69px] h-[69px] mx-1
        text-[18px] font-medium select-none
        ${activePage === i + 1 ? 'bg-[#40BFFF] text-white' : 'bg-gray-100 text-[#22262A]'}
      `}
    >
      {i + 1}
    </div>
  ))}
</div>


      </div>
    </div>
  );
}
