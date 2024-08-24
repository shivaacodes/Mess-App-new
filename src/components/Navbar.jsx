export default function Navbar() {
  return (
    <nav className="bg-gray-100 w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a className="text-3xl font-extrabold text-gray-900 font-sans">
          Mess App
        </a>
        <div className="flex space-x-4">
          <form role="search" onSubmit={handleSignup}>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Signup
            </button>
          </form>
          <form role="search" onSubmit={handleLogin}>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
