const customers = Array.from({ length: 30 }, (_, i) => ({
  customerId: `CUST${i + 2001}`,
  customerName: `Customer ${i + 1}`,
  email: `customer${i + 1}@example.com`,
  phone: `+62812${(1000000 + i).toString().padStart(7, '0')}`,
  loyalty: ['Bronze', 'Silver', 'Gold'][i % 3],
  totalSpent: Math.floor(Math.random() * 5000000) + 500000, // Random between 500k-5.5M
  joinDate: new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365 * 3)).toISOString().split('T')[0], // Random date in last 3 years
}));

export default customers;