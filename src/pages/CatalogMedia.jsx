import React, { useEffect, useState } from "react";
import { catalogMediaAPI } from "../services/catalogMediaApi";
import CatalogMediaComponent from "../components/CatalogMedia";

export default function CatalogMediaPage() {
  const [mediaList, setMediaList] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const loadData = async () => {
    const data = await catalogMediaAPI.fetchAll();
    setMediaList(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (data) => {
    if (data.id) {
      await catalogMediaAPI.update(data.id, data);
    } else {
      await catalogMediaAPI.create(data);
    }
    setEditingItem(null);
    setIsAdding(false);
    loadData();
  };

  const handleDelete = async (id) => {
    await catalogMediaAPI.remove(id);
    loadData();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6 border-b pb-4 border-yellow-400">
        <h1 className="text-4xl font-bold text-yellow-700">Catalog Media</h1>
        <button
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow"
          onClick={() => {
            setEditingItem(null);
            setIsAdding(true);
          }}
        >
          + Tambah Media
        </button>
      </div>

      {mediaList.length === 0 ? (
        <p className="text-gray-500">Belum ada data Catalog Media</p>
      ) : (
        mediaList.map((item) => (
          <CatalogMediaComponent
            key={item.id}
            data={item}
            onEdit={(data) => setEditingItem(data)}
            onDelete={handleDelete}
            onSave={handleSave}
          />
        ))
      )}

      {(isAdding || editingItem) && (
        <CatalogMediaComponent
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
