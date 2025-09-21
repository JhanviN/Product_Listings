export const products = [
  { id: 1, name: 'Nike Air Max 270 React', price: 150, discountPrice: 120, discountPercent: 20, ratingValue: 4.5, ratingCount: 120, isHot: true, colors: ['#FF0000', '#00FF00', '#0000FF'], category: 'Nike', imageUrl: '/images/nike-air.jpg' },
  { id: 2, name: 'Adidas Ultraboost 21', price: 180, discountPrice: 140, discountPercent: 22, ratingValue: 4.2, ratingCount: 90, isHot: false, colors: ['#000000', '#FFFFFF'], category: 'Adidas', imageUrl: '/images/adidas-ultra.jpg' },
  // Add 22 more (e.g., Vans Old Skool, Puma Suede) with varied data
];
export const categories = ['Nike', 'Adidas', 'Vans', 'Puma', 'Reebok', 'Asics'];
export const brands = [...categories];
export const colors = ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow'];