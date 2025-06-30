import React, { useState, useEffect } from "react";

export default function CatalogMediaComponent({
  data,
  onEdit,
  onDelete,
  onSave,
  isAdding = false,
  setIsAdding = () => {},
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    gambar: "",
    video: "",
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
      setModalOpen(false);
    } else if (isAdding) {
      setFormData({ nama: "", gambar: "", video: "" });
      setModalOpen(true);
    }
  }, [data, isAdding]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setModalOpen(false);
    setIsAdding(false);
  };

  const openEditModal = () => {
    setFormData(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsAdding(false);
  };

  return (
    <div className="bg-white border border-yellow-300 rounded-xl p-6 shadow-lg max-w-4xl mx-auto my-6">
      {data ? (
        <>
          <h2 className="text-2xl font-semibold text-yellow-700 mb-2">
            {data.nama}
          </h2>
          {data.gambar && (
            <img
              src={data.gambar}
              alt="Gambar"
              className="w-72 h-auto rounded-md my-3"
            />
          )}
          {data.video && (
            <video controls className="w-72 my-2 rounded-md shadow">
              <source src={data.video} type="video/mp4" />
            </video>
          )}

          <div className="flex gap-3 mt-4">
            <button
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg"
              onClick={openEditModal}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg"
              onClick={() => onDelete(data.id)}
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-400">Tidak ada data media.</p>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl shadow-2xl border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">
              {data ? "Edit Media" : "Tambah Media"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {["nama", "gambar", "video"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  required={field === "nama"}
                  className="w-full p-3 bg-[#F9FAFB] rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              ))}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
