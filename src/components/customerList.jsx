import React, { useEffect, useState } from "react";
import { customerAPI } from "../services/Customer";

export default function CustomerList({ onEdit }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await customerAPI.fetchCustomers();
      setCustomers(data);
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      await customerAPI.deleteCustomer(id);
      setCustomers(customers.filter((c) => c.id !== id));
    }
  };

  return (
    <table className="table-auto w-full border">
      <thead>
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Phone</th>
          <th className="border p-2">Member</th>
          <th className="border p-2">Total Spent</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={c.id}>
            <td className="border p-2">{c.customer_id}</td>
            <td className="border p-2">{c.customer_name}</td>
            <td className="border p-2">{c.email}</td>
            <td className="border p-2">{c.phone}</td>
            <td className="border p-2">{c.member}</td>
            <td className="border p-2">{c.total_spent}</td>
            <td className="border p-2 space-x-2">
              <button onClick={() => onEdit(c)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(c.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
