const categories = [
    'T-Shirt', 'Shirt', 'Jeans', 'Pants', 
    'Jacket', 'Hoodie', 'Dress', 'Skirt',
    'Underwear', 'Socks', 'Shoes', 'Accessories'
  ];
  
  const brands = [
    'Nike', 'Adidas', 'Uniqlo', 'Zara',
    'H&M', 'Gucci', 'Louis Vuitton', 'Prada',
    'Levi\'s', 'Wrangler', 'Tommy Hilfiger', 'Calvin Klein'
  ];
  
  const products = Array.from({ length: 50 }, (_, i) => {
    const category = categories[i % categories.length];
    const price = Math.floor(Math.random() * 1000000) + 50000; // 50k-1.05M
    const stock = Math.floor(Math.random() * 100);
    
    return {
      id: `PROD${i + 1001}`,
      name: `${brands[i % brands.length]} ${category} ${i % 5 + 1}`,
      category,
      brand: brands[i % brands.length],
      price,
      stock,
      sizes: getRandomSizes(),
      rating: (Math.random() * 1 + 4).toFixed(1), // 4.0-5.0
      image: `/images/products/${category.toLowerCase()}-${i % 10 + 1}.jpg`,
      description: `High quality ${category.toLowerCase()} from ${brands[i % brands.length]}, perfect for everyday wear.`,
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365)).toISOString(),
    };
  });
  
  function getRandomSizes() {
    const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const count = Math.floor(Math.random() * 3) + 2; // 2-4 sizes
    const shuffled = [...allSizes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).sort((a, b) => allSizes.indexOf(a) - allSizes.indexOf(b));
  }
  
  export default products;