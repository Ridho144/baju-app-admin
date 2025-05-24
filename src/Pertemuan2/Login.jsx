export default function Login() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-2xl font-bold mb-5">Halaman Login</h1>
            <Detail />
        </div>
    );
}

function Detail() {
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg w-80">
            <h2 className="text-xl font-semibold text-center mb-4">Selamat Datang</h2>
            <form className="space-y-4">
                <InputUsername />
                <InputPassword />
                <Button />
            </form>
        </div>
    );
}

function InputUsername() {
    return (
        <div>
            <input type="text" className="w-full border p-2 rounded" placeholder="Username" required />
        </div>
    );
}

function InputPassword() {
    return (
        <div>
            <input type="password" className="w-full border p-2 rounded" placeholder="Password" required />
        </div>
    );
}

function Button() {
    return (
        <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Login
            </button>
        </div>
    );
}
