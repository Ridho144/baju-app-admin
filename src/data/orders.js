const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
const paymentMethods = ['Credit Card', 'Bank Transfer', 'E-Wallet', 'COD'];

const orders = Array.from({ length: 100 }, (_, i) => {
  const productCount = Math.floor(Math.random() * 3) + 1; // 1-3 products
  const productsInOrder = Array.from({ length: productCount }, () => {
    const productIndex = Math.floor(Math.random() * 50);
    const quantity = Math.floor(Math.random() * 3) + 1;
    return {
      productId: `PROD${productIndex + 1001}`,
      quantity,
      price: Math.floor(Math.random() * 500000) + 50000, // 50k-550k
    };
  });
  
  const subtotal = productsInOrder.reduce((sum, p) => sum + (p.price * p.quantity), 0);
  const shippingCost = 15000;
  const discount = Math.floor(Math.random() * 100000);
  const total = subtotal + shippingCost - discount;
  
  return {
    orderId: `ORD${i + 5001}`,
    customerId: `CUST${Math.floor(Math.random() * 30) + 2001}`,
    date: new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 90)).toISOString().split('T')[0], // Last 90 days
    status: statuses[Math.floor(Math.random() * statuses.length)],
    paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
    products: productsInOrder,
    subtotal,
    shippingCost,
    discount,
    total,
  };
});

export default orders;