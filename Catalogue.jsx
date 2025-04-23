function Catalogue() {
  const products = [
    { id: 1, name: 'Product A', price: '$10', description: 'Good Book' },
    { id: 2, name: 'Product B', price: '$20', description: 'Book describes about advanced AI' },
    { id: 3, name: 'Product C', price: '$30', description: 'Book describes about advanced ML' },
  ];

  return (
    <div>
      <h2>Catalogue Page</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;
