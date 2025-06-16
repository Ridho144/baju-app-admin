import React from "react";

const FAQList = ({ faqs, onEdit, onDelete }) => {
  return (
    <div className="mt-6 space-y-4">
      {faqs.length === 0 && (
        <p className="text-gray-600">Belum ada FAQ yang ditambahkan.</p>
      )}
      {faqs.map((faq) => (
        <div key={faq.id} className="border p-4 rounded shadow-sm bg-white">
          <h2 className="font-semibold text-lg">{faq.pertanyaan}</h2>
          <p className="text-gray-700">{faq.jawaban}</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => onEdit(faq)}
              className="text-sm px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(faq.id)}
              className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQList;
