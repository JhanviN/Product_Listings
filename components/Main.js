// 'use client';
// import Image from 'next/image';
// import sampleImage from '../public/images/main_shoe.png'; // make sure your image is in /public folder

// export default function MainContent() {
//   return (
//     <div
//       className="mt-6 ml-4 rounded-md flex"
//       style={{
//         width: '1069px',
//         height: '350px',
//         backgroundColor: '#40BFFF',
//         position: 'relative',
//         left: '404.4px', // approximate position
//         top: '95.27px',
//       }}
//     >
//       {/* Box 1: Text */}
//       <div
//         className="m-4 p-4 rounded-md"
//         style={{
//           width: '390.46px',
//           height: '137.46px',
//           backgroundColor: 'white',
//         }}
//       >
//         <h2 className="text-xl font-semibold text-gray-800">Some Heading</h2>
//         <p className="mt-2 text-gray-600">
//           This is some descriptive text inside the first box. You can adjust font size and spacing as needed.
//         </p>
//       </div>

//       {/* Box 2: Image */}
//       <div
//         className="m-4 rounded-md flex items-center justify-center"
//         style={{
//           width: '390.46px',
//           height: '137.46px',
//           backgroundColor: 'white',
//         }}
//       >
//         <Image
//           src={sampleImage}
//           alt="Sample"
//           width={350} // adjust based on your image
//           height={120} // adjust based on your image
//           className="object-contain"
//         />
//       </div>
//     </div>
//   );
// }
export default function Main({ children }) {
  return <main className="flex-1 flex px-4 py-8">{children}</main>;
}