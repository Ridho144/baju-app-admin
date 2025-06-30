import React, { useEffect, useState } from "react";
import { aboutUsAPI } from "../services/aboutUsAPI";
import AboutUsComponent from "../components/aboutUs";

export default function AboutUsPage() {
  const [aboutList, setAboutList] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const loadData = async () => {
    const data = await aboutUsAPI.fetchAboutUs(); // sekarang array
    setAboutList(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (data) => {
    if (data.id) {
      await aboutUsAPI.updateAboutUs(data.id, data);
    } else {
      await aboutUsAPI.createAboutUs(data);
    }
    setEditingItem(null);
    setIsAdding(false);
    loadData();
  };

  const handleDelete = async (id) => {
    await aboutUsAPI.deleteAboutUs(id);
    loadData();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-yellow-700">About Us</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            setEditingItem(null);
            setIsAdding(true);
          }}
        >
          + Tambah About Us
        </button>
      </div>

      {/* Daftar About Us */}
      {aboutList.length === 0 ? (
        <p className="text-gray-500">Belum ada data About Us</p>
      ) : (
        aboutList.map((item) => (
          <AboutUsComponent
            key={item.id}
            data={item}
            onEdit={(data) => setEditingItem(data)}
            onDelete={handleDelete}
            onSave={handleSave}
          />
        ))
      )}

      {/* Modal Tambah / Edit */}
      {(isAdding || editingItem) && (
        <AboutUsComponent
          data={editingItem}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
