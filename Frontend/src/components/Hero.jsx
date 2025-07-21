// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="beranda"
      className="bg-cover bg-center text-white py-24 px-6"
      style={{ backgroundImage: `url('/smk4.jpg')` }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded">
        <h2 className="text-4xl font-bold mb-4">
          Selamat Datang di SMKN 4 Tasikmalaya
        </h2>
        <p className="text-lg max-w-2xl">
          Mencetak generasi unggul, profesional, dan siap kerja dengan
          pendidikan vokasi berkualitas.
        </p>
      </div>
    </section>
  );
}
