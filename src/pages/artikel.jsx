import React, { useEffect, useState } from "react";
import { artikelAPI } from "../services/artikelAPI";
import ArticleComponent from "../components/artikel";

export default function ArticlePage() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const fetchArticles = async () => {
    const data = await artikelAPI.fetchAll();
    setArticles(data);
  };

  const handleSave = async (formData) => {
    if (editArticle) {
      await artikelAPI.update(editArticle.id, formData);
      setEditArticle(null);
    } else {
      await artikelAPI.create(formData);
    }
    fetchArticles();
  };

  const handleDelete = async (id) => {
    await artikelAPI.delete(id);
    fetchArticles();
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <h1 className="text-4xl font-bold text-yellow-600 text-center mb-8">Daftar Artikel</h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsAdding(true)}
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow"
        >
          Tambah Artikel
        </button>
      </div>

      {isAdding && (
        <ArticleComponent
          onSave={handleSave}
          isAdding={true}
          setIsAdding={setIsAdding}
        />
      )}

      {articles.length > 0 ? (
        articles.map((item) => (
          <ArticleComponent
            key={item.id}
            data={item}
            onEdit={() => setEditArticle(item)}
            onDelete={handleDelete}
            onSave={handleSave}
            isAdding={false}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">Belum ada artikel.</p>
      )}

      {/* Modal edit */}
      {editArticle && (
        <ArticleComponent
          data={editArticle}
          onSave={handleSave}
          onDelete={handleDelete}
          isAdding={false}
          setIsAdding={setIsAdding}
        />
      )}
    </div>
  );
}
