'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">JablunkoVAN</h1>
        <p className="text-xl">Půjčovna 9místné dodávky pro Třinec, Jablunkov a Frýdek-Místek</p>
      </section>

      <section className="bg-gray-100 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Proč právě my?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Spolehlivá a pohodlná 9místná dodávka</li>
          <li>Výhodné ceny bez skrytých poplatků</li>
          <li>Ideální pro rodinné výlety, sportovní akce i pracovní cesty</li>
        </ul>
      </section>

      <section className="p-6 rounded-2xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Ceník</h2>
        <ul className="space-y-2">
          <li>1 den: <strong>1 500 Kč</strong></li>
          <li>Víkend (pá–ne): <strong>3 000 Kč</strong></li>
          <li>Týden: <strong>8 500 Kč</strong></li>
        </ul>
        <p className="text-sm mt-4 text-gray-600">
          Vratná kauce: 5 000 Kč &nbsp; | &nbsp; Limit: 300 km/den (nadlimit 3 Kč/km) <br/>
          Řidič min. 21 let s platným ŘP sk. B
        </p>
      </section>

      <section className="p-6 bg-gray-100 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Rezervace</h2>
        <form className="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Jméno a příjmení" className="w-full p-2 border rounded" />
          <input type="email" placeholder="E-mail" className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Telefon" className="w-full p-2 border rounded" />
          <textarea placeholder="Termín a zpráva" className="w-full p-2 border rounded h-24" />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Odeslat rezervaci
          </button>
        </form>
      </section>

      <section className="p-6 border-t">
        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
        <p>📍 Třinec, Jablunkov a okolí</p>
        <p>📞 +420 123 456 789</p>
        <p>✉️ info@jablunkovan.cz</p>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.3706169941057!2d18.6700099!3d49.6719294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e2e89cfc69e1%3A0xd169df2797e87b3b!2zSMWZZGthLCBUxZllxaFrbw!5e0!3m2!1scs!2scz!4v1616178859844!5m2!1scs!2scz"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
