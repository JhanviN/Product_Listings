'use client';
import { Inter } from 'next/font/google';
import '../app/globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'] 
});

export const metadata = {
  title: 'Product Listing - SoftDef Test',
  description: 'Pixel-perfect recreation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white`}> 
        {/* bg-white sets the background color for the entire page */}
        {children}
      </body>
    </html>
  );
}
