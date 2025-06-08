import React, { useState } from "react";
import CustomerForm from "../components/customerForm";
import CustomerList from "../components/customerList";

export default function CustomersPage() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleFinish = () => {
    setSelectedCustomer(null);
    setRefresh(!refresh);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <CustomerForm currentCustomer={selectedCustomer} onFinish={handleFinish} />
      <hr className="my-6" />
      <CustomerList key={refresh} onEdit={handleEdit} />
    </div>
  );
}
