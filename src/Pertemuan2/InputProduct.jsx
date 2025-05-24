export default function InputProduk() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-2xl font-bold mb-5">Form Input Produk</h1>
            <Detail />
        </div>
    );
}

function Detail() {
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg w-80">
            <h2 className="text-xl font-semibold text-center mb-4">Input Produk</h2>
            <form className="space-y-4">
                <Gambar />
                <Nama />
                <Harga />
                <Button />
            </form>
        </div>
    );
}

function Gambar() {
    return (
        <div>
            <input type="file" className="w-full border p-2 rounded" accept="image/*" required />
        </div>
    );
}

function Nama() {
    return (
        <div>
            <input type="text" className="w-full border p-2 rounded" placeholder="Nama Produk" required />
        </div>
    );
}

function Harga() {
    return (
        <div>
            <input type="number" className="w-full border p-2 rounded" placeholder="Harga Produk" required />
        </div>
    );
}

function Button() {
    return (
        <div className="text-center">
            <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                Simpan Produk
            </button>
        </div>
    );
}
