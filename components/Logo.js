import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="flex items-center"
      style={{
        width: "182px",
        height: "44px",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Icon box */}
      <div
        className="flex items-center justify-center"
        style={{
          width: "51px",
          height: "44px",
          backgroundColor: "#FFFFFF", 
        }}
      >
        <Image
          src="/logos/logo.svg"  
          alt="E-Comm Logo"
          width={30}
          height={30}
        />
      </div>

     
      <span
        style={{
          marginLeft: "10px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "100%",
          color: "#000000", 
        }}
      >
        E-Comm
      </span>
    </div>
  );
}
