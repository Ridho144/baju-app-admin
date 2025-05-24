// layout/HeroSection.jsx
const HeroSection = () => {
    return (
      <section >
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-yellow-600 mb-2">Promo Baju Terbaru Bulan Ini</h2>
          <p className="text-gray-700 mb-4">
            Dapatkan diskon hingga <span className="font-semibold">50%</span> untuk berbagai koleksi fashion terkini. Jangan lewatkan!
          </p>
          <button className="btn-primary">Belanja Sekarang</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?fit=crop&w=400&q=80"
          alt="Promo Baju"
          className="rounded-xl shadow w-64 h-64 object-cover"
        />
      </section>
    );
  };
  
  export default HeroSection;
  