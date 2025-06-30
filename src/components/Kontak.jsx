import React, { useState, useEffect } from "react";

export default function KontakItem({ data, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        nama: data.nama || "",
        email: data.email || "",
        subjek: data.subjek || "",
        pesan: data.pesan || "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, id: data?.id });
    setIsEditing(false);
  };

  if (isEditing || !data) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4 bg-yellow-100 p-4 rounded-xl shadow-md my-4">
        <input name="nama" value={form.nama} onChange={handleChange} placeholder="Nama" className="input input-bordered w-full" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input input-bordered w-full" />
        <input name="subjek" value={form.subjek} onChange={handleChange} placeholder="Subjek" className="input input-bordered w-full" />
        <textarea name="pesan" value={form.pesan} onChange={handleChange} placeholder="Pesan" className="textarea textarea-bordered w-full" />
        <div className="flex justify-end space-x-2">
          <button type="submit" className="btn btn-warning">Simpan</button>
          {data && <button onClick={() => setIsEditing(false)} type="button" className="btn btn-outline">Batal</button>}
        </div>
      </form>
    );
  }

  return (
    <div className="border rounded-xl p-4 my-2 bg-white shadow-sm">
      <h2 className="text-xl font-bold text-yellow-600">{data.subjek}</h2>
      <p><strong>Nama:</strong> {data.nama}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Pesan:</strong> {data.pesan}</p>
      <div className="mt-2 flex gap-2">
        <button onClick={() => setIsEditing(true)} className="btn btn-sm btn-warning">Edit</button>
        <button onClick={() => onDelete(data.id)} className="btn btn-sm btn-error">Hapus</button>
      </div>
    </div>
  );
}
