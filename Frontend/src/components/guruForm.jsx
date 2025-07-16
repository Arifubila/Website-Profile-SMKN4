// src/components/GuruForm.jsx
import { useState } from 'react';
import axios from 'axios';

const GuruForm = ({ onSukses }) => {
  const [form, setForm] = useState({
    nama: '',
    nip: '',
    mapel: '',
    jabatan: '',
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: name === 'foto' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in form) {
      data.append(key, form[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/guru', data);
      onSukses();
      setForm({ nama: '', nip: '', mapel: '', jabatan: '', foto: null });
    } catch (err) {
      alert('Gagal menambahkan guru');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-8">
      <input className="border p-2 w-full" name="nama" value={form.nama} onChange={handleChange} placeholder="Nama" required />
      <input className="border p-2 w-full" name="nip" value={form.nip} onChange={handleChange} placeholder="NIP" />
      <input className="border p-2 w-full" name="mapel" value={form.mapel} onChange={handleChange} placeholder="Mapel" />
      <input className="border p-2 w-full" name="jabatan" value={form.jabatan} onChange={handleChange} placeholder="Jabatan" />
      <input className="border p-2 w-full" type="file" name="foto" onChange={handleChange} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Tambah Guru</button>
    </form>
  );
};

export default GuruForm;
