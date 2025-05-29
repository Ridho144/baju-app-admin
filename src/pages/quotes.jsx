import { useEffect, useState } from "react";
import axios from "axios";

export default function Quotes() {
  const [advice, setAdvice] = useState(null);
  const [error, setError] = useState(null);

  const getAdvice = () => {
    const randomizer = `?t=${new Date().getTime()}`; 
    axios
      .get("https://api.adviceslip.com/advice" + randomizer)
      .then((response) => {
        setAdvice(response.data.slip);
      })
      .catch((err) => {
        setError("Gagal mengambil data: " + err.message);
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  if (error) return <div className="text-red-600 p-4">{error}</div>;
  if (!advice) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Saran Hari Ini</h2>
      <p className="text-lg italic text-gray-800 text-center mb-4">
        "{advice.advice}"
      </p>
      <div className="text-center">
        <button
          onClick={getAdvice}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Tampilkan Saran Baru
        </button>
      </div>
    </div>
  );
}
