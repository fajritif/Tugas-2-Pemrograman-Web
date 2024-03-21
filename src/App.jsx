import React from 'react';
import './App.css';
import gambar1 from './assets/Gambar1.jpeg';
import gambar3 from './assets/Gambar3.jpeg';
import gambar2 from './assets/Gambar2.jpg';
import Prestasi from './Components/Prestasi/Prestasi';

function App() {
  return (
    <>


    <div className="container">
      <div className="biodata">
        <h1>Biodata</h1>
        <ul>
          <li><strong>Nama:</strong> Fajri</li>
          <li><strong>Umur:</strong> 19 tahun</li>
          <li><strong>Alamat:</strong> Jl. Garuda Sakti, KM.1</li>
          <li><strong>Email:</strong> fajriub@gmail.com</li>
          <li><strong>Telepon:</strong> 0838-0094-1629</li>
        </ul>
      </div>
    </div>

    <div className="container">
      <div className="hobi">
        <h1>Hobi</h1>
        <ul>
          <li><strong>Futsal:</strong> Saya suka bermain futsal</li>
          <li><strong>Membaca:</strong> Saya suka membaca</li>
        </ul>
      </div>
    </div>

    <div className="container">
      <div className="gallery">
        <h1>Galeri</h1>
        <div className="image-container">
          <img src={gambar1} alt="" />
          
        </div>
      </div>
    </div>

    <div className="container">
      <div className="portfolio">
        <h1>Portofolio</h1>
        
        <img src={gambar3} alt="" />
        <img src={gambar2} alt="" />
      </div>
    </div>


        <Prestasi />


    </>
  );
}

export default App;
