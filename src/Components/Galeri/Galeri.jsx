import React from 'react';
import './App.css';
import './Galeri.css';


function App() {
  // Daftar gambar
  const images = [
   
   
  ];

  return (
    <div className="container">
      <div className="gallery">
        <h1>Galeri</h1>
        <div className="image-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
