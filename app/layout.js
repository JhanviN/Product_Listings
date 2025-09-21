import { Inter } from 'next/font/google';
import './globals.css';

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
      <body className={`${inter.variable} font-sans bg-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
