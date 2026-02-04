function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Raja</h1>

        <ul className="flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-black cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-black cursor-pointer transition">
            Projects
          </li>
          <li className="hover:text-black cursor-pointer transition">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
