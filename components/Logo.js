import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="flex items-center"
      style={{
        width: "182px",
        height: "44px",
        backgroundColor: "#FFFFFF", // white background
      }}
    >
      {/* Icon box */}
      <div
        className="flex items-center justify-center"
        style={{
          width: "51px",
          height: "44px",
          backgroundColor: "#FFFFFF", // also white
        }}
      >
        <Image
          src="/logos/logo.svg"   // make sure logo.svg is in /public/logos/
          alt="E-Comm Logo"
          width={30}
          height={30}
        />
      </div>

      {/* E-Comm text */}
      <span
        style={{
          marginLeft: "10px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "100%",
          color: "#000000", // black text
        }}
      >
        E-Comm
      </span>
    </div>
  );
}
