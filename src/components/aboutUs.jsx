import React, { useState, useEffect } from "react";

export default function AboutUsComponent({
  data,
  onEdit,
  onDelete,
  onSave,
  isAdding = false,
  setIsAdding = () => {},
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mission: "",
    vision: "",
    contact_email: "",
    contact_phone: "",
    location: "",
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
      setModalOpen(false); // jika mode edit, tunggu tombol edit
    } else if (isAdding) {
      setFormData({
        title: "",
        description: "",
        mission: "",
        vision: "",
        contact_email: "",
        contact_phone: "",
        location: "",
      });
      setModalOpen(true); // buka modal jika sedang tambah
    }
  }, [data, isAdding]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setModalOpen(false);
    setIsAdding(false); // pastikan modal ditutup dari luar juga
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
    <div className="bg-yellow-100 border border-yellow-400 rounded-xl p-6 shadow-md max-w-3xl mx-auto my-4">
      {data ? (
        <>
          <h2 className="text-3xl font-bold text-yellow-700 mb-2">{data.title}</h2>
          <p className="text-gray-700 mb-2">{data.description}</p>
          <p className="mb-2"><strong>Vision:</strong> {data.vision}</p>
          <p className="mb-2"><strong>Mission:</strong> {data.mission}</p>
          <p className="mb-2"><strong>Email:</strong> {data.contact_email}</p>
          <p className="mb-2"><strong>Phone:</strong> {data.contact_phone}</p>
          <p className="mb-2"><strong>Location:</strong> {data.location}</p>

          <div className="flex gap-2 mt-4">
            <button
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow"
              onClick={openEditModal}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow"
              onClick={() => onDelete(data.id)}
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500">No About Us content available.</p>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl shadow-2xl border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">
              {data ? "Edit About Us" : "Tambah About Us"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {["title", "description", "vision", "mission", "contact_email", "contact_phone", "location"].map((field) => (
                <input
                  key={field}
                  type={field === "contact_email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
                  required={["title", "description"].includes(field)}
                  className="w-full p-3 bg-[#F9FAFB] rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              ))}

              <div className="flex justify-end gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-xl"
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
