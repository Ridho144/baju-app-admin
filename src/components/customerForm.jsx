import React, { useEffect, useState } from "react";
import { customerAPI } from "../services/Customer";

export default function CustomerForm({ currentCustomer, onFinish }) {
  const [formData, setFormData] = useState({
    customer_id: "",
    customer_name: "",
    email: "",
    phone: "",
    member: "Bronze",
    total_spent: 0,
  });

  useEffect(() => {
    if (currentCustomer) {
      setFormData(currentCustomer);
    } else {
      setFormData({
        customer_id: "",
        customer_name: "",
        email: "",
        phone: "",
        member: "Bronze",
        total_spent: 0,
      });
    }
  }, [currentCustomer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentCustomer?.id) {
      await customerAPI.updateCustomer(currentCustomer.id, formData);
    } else {
      await customerAPI.createCustomer(formData);
    }
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="customer_id" value={formData.customer_id} onChange={handleChange} placeholder="Customer ID" className="border p-2 w-full" />
      <input name="customer_name" value={formData.customer_name} onChange={handleChange} placeholder="Customer Name" className="border p-2 w-full" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border p-2 w-full" />
      <select name="member" value={formData.member} onChange={handleChange} className="border p-2 w-full">
        <option>Bronze</option>
        <option>Silver</option>
        <option>Gold</option>
      </select>
      <input type="number" name="total_spent" value={formData.total_spent} onChange={handleChange} placeholder="Total Spent" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {currentCustomer ? "Update" : "Create"} Customer
      </button>
    </form>
  );
}
