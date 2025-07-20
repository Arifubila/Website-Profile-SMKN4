// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SMKN 4 TASIKMALAYA</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#beranda" className="hover:text-yellow-400">
            Beranda
          </a>
        </li>
        <li>
          <a href="#profil" className="hover:text-yellow-400">
            Profil
          </a>
        </li>
        <li>
          <a href="#jurusan" className="hover:text-yellow-400">
            Jurusan
          </a>
        </li>
        <li>
          <a href="#galeri" className="hover:text-yellow-400">
            Galeri
          </a>
        </li>
        <li>
          <a href="#kontak" className="hover:text-yellow-400">
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  );
}
