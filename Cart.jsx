function Cart() {
  const cartItems = [
    { id: 1, name: 'Product A', quantity: 2, price: '$20' },
    { id: 2, name: 'Product B', quantity: 1, price: '$30' },
  ];

  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
