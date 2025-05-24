export default function ListProduct() {
    return (
        <div className="daftar-produk">
            <h1>Daftar Produk</h1>
            <div className="produk-container">
                <ProductOne />
                <ProductTwo />
                <ProductThree />
            </div>
        </div>
    );
}


function ProductOne() {
    return (
        <div className="produk-card">
            <img className="produk-img" src="img/produk1.jpg" alt="Produk 1" />
            <h3>Produk 1</h3>
            <p>Deskripsi produk pertama...</p>
        </div>
    );
}

function ProductTwo() {
    return (
        <div className="produk-card">
            <img className="produk-img" src="img/produk2.jpg" alt="Produk 2" />
            <h3>Produk 2</h3>
            <p>Deskripsi produk kedua...</p>
        </div>
    );
}

function ProductThree() {
    return (
        <div className="produk-card">
            <img className="produk-img" src="img/produk3.jpg" alt="Produk 3" />
            <h3>Produk 3</h3>
            <p>Deskripsi produk ketiga...</p>
        </div>
    );
}
