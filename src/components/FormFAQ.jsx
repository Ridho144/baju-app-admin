import React, { useState, useEffect } from "react";
import { faqAPI } from "../services/faqAPI ";

const FAQForm = ({ defaultData = null, onSuccess }) => {
  const [pertanyaan, setPertanyaan] = useState("");
  const [jawaban, setJawaban] = useState("");

  useEffect(() => {
    if (defaultData) {
      setPertanyaan(defaultData.pertanyaan);
      setJawaban(defaultData.jawaban);
    } else {
      setPertanyaan("");
      setJawaban("");
    }
  }, [defaultData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (defaultData) {
      await faqAPI.updateFAQ(defaultData.id, { pertanyaan, jawaban });
    } else {
      await faqAPI.createFAQ({ pertanyaan, jawaban });
    }

    onSuccess?.();
    setPertanyaan("");
    setJawaban("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-3">
        {defaultData ? "Edit FAQ" : "Tambah FAQ Baru"}
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Pertanyaan</label>
        <input
          type="text"
          value={pertanyaan}
          onChange={(e) => setPertanyaan(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Jawaban</label>
        <textarea
          value={jawaban}
          onChange={(e) => setJawaban(e.target.value)}
          required
          rows="3"
          className="w-full border px-3 py-2 rounded"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {defaultData ? "Update" : "Tambah"}
      </button>
    </form>
  );
};

export default FAQForm;
