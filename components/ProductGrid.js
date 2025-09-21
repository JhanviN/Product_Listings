export default function ProductGrid({ products, selectedColor }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-figma-gap w-full lg:w-1/2">
      {products.map((product) => <div key={product.id}>Product</div>)}
    </div>
  );
}