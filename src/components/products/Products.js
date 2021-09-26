const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => <h1 key={product.id}>{product.name}</h1>
      )}
    </div>
  );
};

export default Products;
