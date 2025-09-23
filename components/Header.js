"use client";
import Logo from './Logo';
import Navigation from './Navigation';
import Cart from './Cart';

export default function Header({ links = [], cartItems = 0, cartPrice = 0 }) {
  return (
    <>
      <header className="p-4 bg-white shadow-figma flex flex-wrap justify-between items-center h-auto">
        <Logo />
        <Navigation links={links} />
        <div className="flex items-center space-x-2 min-w-[120px]">
          <Cart />
          <div className="flex justify-between ml-2 font-sans font-normal text-[20px] text-[#262626] leading-none">

            <span>Items</span>


            <span>${cartPrice}</span>
          </div>
        </div>
      </header>


      <div className="w-full h-[4.5px] bg-gray-200 mt-1" />
    </>
  );
}
