// src/components/GuruList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const GuruList = ({ refreshTrigger }) => {
  const [guru, setGuru] = useState([]);

  const fetchGuru = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/guru");
      setGuru(res.data);
    } catch {
      alert("Gagal memuat data guru");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin menghapus guru ini?")) {
      await axios.delete(`http://localhost:5000/api/guru/${id}`);
      fetchGuru();
    }
  };

  useEffect(() => {
    fetchGuru();
  }, [refreshTrigger]);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {guru.map((g) => (
        <div key={g._id} className="border p-4 rounded shadow">
          <img
            src={`http://localhost:5000/uploads/${g.foto}`}
            alt={g.nama}
            className="w-full h-40 object-cover rounded mb-2"
          />
          <p className="font-bold">{g.nama}</p>
          <p>NIP: {g.nip || "-"}</p>
          <p>Mapel: {g.mapel || "-"}</p>
          <p>Jabatan: {g.jabatan || "-"}</p>
          <button
            onClick={() => handleDelete(g._id)}
            className="mt-2 text-sm text-red-600"
          >
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
};

export default GuruList;
