import React from 'react';
import ReactDOM from 'react-dom';
import './Biodata.css';

// Komponen untuk menampilkan biodata
function Biodata() {
  return (
    <div className="container">
      <div className="biodata">
        <h1>Biodata</h1>
        <ul>
          
          <li><strong>Nama:</strong> Fajri</li>
          <li><strong>Umur:</strong> 19 tahun</li>
          <li><strong>Alamat:</strong> Jl. Garuda Sakti, KM. 1</li>
          <li><strong>Email:</strong> fajriube@gmail.com</li>
          <li><strong>Telepon:</strong> 0838-0094-1629</li>
        </ul>
      </div>
    </div>
  );
}

// Render komponen Biodata ke dalam root elemen HTML
ReactDOM.render(<Biodata />, document.getElementById('root'));
