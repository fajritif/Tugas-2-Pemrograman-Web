import React from 'react';
import './Prestasi.css';


function Prestasi() {
  // Daftar prestasi
  const achievements = [
    { id: 1, title: "Juara 3 kelas X IPA"},
    { id: 2, title: "Juara 2 kelas XI IPA"},
    { id: 3, title: "Juara 3 kelas XII IPA"},
    { id: 4, title: "Juara 3 lomba menagaji"},
    { id: 5, title: "Juara 2 Lomba azan"}
  ];

  return (
    <div className="container">
      <div className="achievements">
        <h1>Prestasi</h1>
        <ul>
          {achievements.map(achievement => (
            <li key={achievement.id}>
              <strong>{achievement.title}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Prestasi;
