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
          <div className="flex w-40 justify-between ml-2">
            {/* Items */}
            <span
              style={{
                fontFamily: "Proxima Nova, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                color: "#262626",
              }}
            >
              Items
            </span>

            {/* Price */}
            <span
              style={{
                fontFamily: "Proxima Nova, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                color: "#262626",
              }}
            >
              ${cartPrice}
            </span>
          </div>
        </div>
      </header>

      {/* Divider below header */}
      <div
        style={{
          width: "1499.39px",
          height: "4.53px",
          backgroundColor: "#E5E7EB", 
          marginTop: "2.75px", 
          opacity: 1,
        }}
      />
    </>
  );
}
