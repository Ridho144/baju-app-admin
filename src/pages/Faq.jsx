import React, { useEffect, useState } from "react";
import { faqAPI } from "../services/faqAPI ";
import FAQForm from "../components/FormFAQ";
import FAQList from "../components/ListFaq";

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchFAQs = async () => {
      const data = await faqAPI.fetchAllFAQs();
      setFaqs(data);
    };
    fetchFAQs();
  }, [refresh]);

  const handleEdit = (faq) => {
    setSelectedFAQ(faq);
  };

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin menghapus FAQ ini?")) {
      await faqAPI.deleteFAQ(id);
      setRefresh(!refresh);
    }
  };

  const handleSuccess = () => {
    setSelectedFAQ(null);
    setRefresh(!refresh);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar FAQ</h1>

      <FAQForm
        onSuccess={handleSuccess}
        defaultData={selectedFAQ}
      />

      <FAQList
        faqs={faqs}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default FAQPage;
