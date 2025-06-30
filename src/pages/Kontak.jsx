import React, { useEffect, useState } from "react";
import { kontakAPI } from "../services/contactAPI";
import KontakItem from "../components/Kontak";

export default function KontakPage() {
  const [kontakList, setKontakList] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadKontak();
  }, []);

  const loadKontak = async () => {
    const data = await kontakAPI.fetchAll();
    setKontakList(data);
  };

  const handleSave = async (item) => {
    if (item.id) {
      await kontakAPI.update(item.id, item);
    } else {
      await kontakAPI.create(item);
    }
    setIsAdding(false);
    loadKontak();
  };

  const handleDelete = async (id) => {
    await kontakAPI.delete(id);
    loadKontak();
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center text-yellow-700 mb-6">Pesan Kontak</h1>
      <button onClick={() => setIsAdding(true)} className="btn btn-primary mb-4">Tambah Pesan</button>
      {isAdding && <KontakItem onSave={handleSave} />}
      {kontakList.map((item) => (
        <KontakItem key={item.id} data={item} onSave={handleSave} onDelete={handleDelete} />
      ))}
    </div>
  );
}
