import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', // For CSS var usage if needed
  weight: ['400', '500', '600', '700'] // Match Figma weights
});

export const metadata = {
  title: 'Product Listing - SoftDef Test',
  description: 'Pixel-perfect recreation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}