import React, { useEffect, useState } from "react";
import { LowonganAPi } from "../services/lowonganAPI"; // pastikan file API-nya sesuai
import LowonganComponent from "../components/lowongan"; // sesuaikan path

export default function LowonganPage() {
  const [dataList, setDataList] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const fetchData = async () => {
    const data = await LowonganAPi.fetchAll();
    setDataList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (formData) => {
    if (selectedData) {
      await LowonganAPi.update(selectedData.id, formData);
    } else {
      await LowonganAPi.create(formData);
    }
    setSelectedData(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    await LowonganAPi.remove(id);
    fetchData();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">Daftar Lowongan Kerja</h1>

      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsAdding(true)}
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl"
        >
          + Tambah Lowongan
        </button>
      </div>

      {isAdding && (
        <LowonganComponent
          onSave={handleSave}
          isAdding={true}
          setIsAdding={setIsAdding}
        />
      )}

      {dataList.map((item) => (
        <LowonganComponent
          key={item.id}
          data={item}
          onEdit={() => setSelectedData(item)}
          onDelete={handleDelete}
          onSave={handleSave}
        />
      ))}
    </div>
  );
}
