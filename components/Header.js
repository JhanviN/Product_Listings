"use client";
import Logo from './Logo';
import Navigation from './Navigation';
import Cart from './Cart';

export default function Header({ links = [], cartItems = 0, cartPrice = 0 }) {
  return (
    <>
      <header className="p-4 bg-white shadow-figma flex justify-between items-center h-16">
        <Logo />
        <Navigation links={links} />
        <div className="flex items-center space-x-2">
          <Cart />
          <div className="flex w-40 justify-between ml-2 font-sans font-normal text-[20px] text-[#262626] leading-none">
            {/* Items */}
            <span>Items</span>

            {/* Price */}
            <span>${cartPrice}</span>
          </div>
        </div>
      </header>

      {/* Divider below header */}
      <div className="w-full h-[4.5px] bg-gray-200 mt-1" />
    </>
  );
}
