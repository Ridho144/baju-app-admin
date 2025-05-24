import { useState } from "react";
import InputField from "./components/InputField";
import BajuField from "./components/BajuField";

export default function FormBaju() {
    const [namaBaju, setNamaBaju] = useState("");
    const [harga, setHarga] = useState("");
    const [kategori, setKategori] = useState("");
    const [errors, setErrors] = useState({});
    
    const kategoriOptions = ["Kaos", "Kemeja", "Jaket", "Sweater"];

    const validate = () => {
        let newErrors = {};
        
        if (!namaBaju.trim()) {
            newErrors.namaBaju = "Nama baju wajib diisi!";
        } else if (!isNaN(namaBaju)) {
            newErrors.namaBaju = "Nama baju tidak boleh berupa angka!";
        }

        if (!harga.trim()) {
            newErrors.harga = "Harga wajib diisi!";
        } else if (isNaN(harga)) {
            newErrors.harga = "Harga harus berupa angka!";
        }

        if (!kategori) {
            newErrors.kategori = "Kategori wajib dipilih!";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Data berhasil disimpan!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Tambah Baju</h2>

                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Nama Baju"
                        type="text"
                        value={namaBaju}
                        onChange={(e) => setNamaBaju(e.target.value)}
                        error={errors.namaBaju}
                    />

                    <InputField
                        label="Harga"
                        type="text"
                        value={harga}
                        onChange={(e) => setHarga(e.target.value)}
                        error={errors.harga}
                    />

                    <BajuField
                        label="Kategori"
                        options={kategoriOptions}
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                        error={errors.kategori}
                    />

                    {Object.keys(errors).length === 0 && (
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white p-2 rounded mt-3"
                        >
                            Simpan
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
