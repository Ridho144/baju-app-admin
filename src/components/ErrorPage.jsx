export default function ErrorPage({ code, description }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-10">
      <h1 className="text-7xl font-extrabold text-hijau mb-4">{code}</h1>
      <p className="text-xl text-gray-600">{description}</p>
    </div>
  );
}
