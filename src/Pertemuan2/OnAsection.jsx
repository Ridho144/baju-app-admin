import { useState } from "react";

const questions = [
    { question: "Apa bahan utama dalam mie yang digunakan?", answer: "Kami menggunakan bahan berkualitas tinggi seperti tepung terigu premium, telur segar, dan bahan alami lainnya." },
    { question: "Apakah ada varian rasa untuk mie?", answer: "Ya, kami memiliki berbagai varian seperti original, pedas, dan spesial dengan tambahan bumbu unik." },
    { question: "Apakah produk ini halal?", answer: "Tentu! Produk kami sudah mendapatkan sertifikasi halal dan menggunakan bahan yang aman dikonsumsi." }
];

export default function OnAsection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="onasection-container">
            <h2 className="qna-title">Pertanyaan Umum (FAQ)</h2>
            {questions.map((item, index) => (
                <div key={index} className="qna-item" onClick={() => toggleAnswer(index)}>
                    <p className="qna-question">{item.question}</p>
                    {activeIndex === index && <p className="qna-answer">{item.answer}</p>}
                </div>
            ))}
        </div>
    );
}
