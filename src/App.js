import React, { useState } from 'react';

const App = () => {
  const [imie, ustawImie] = useState('');
  const [nazwisko, ustawNazwisko] = useState('');
  const [wybranyKurs, ustawWybranyKurs] = useState('');
  const kursy = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"];

  const obsluzSubmit = (e) => {
    e.preventDefault();
    if (imie && nazwisko && wybranyKurs) {
      alert(`${imie} ${nazwisko} zapisał/a się na ${wybranyKurs}`);
    } else {
      alert('Brak wszystkich danych!');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Liczba kursów: {kursy.length}</h1>
      <ol>
        {kursy.map((kurs, indeks) => (
          <li key={indeks}>{kurs}</li>
        ))}
      </ol>
      <form onSubmit={obsluzSubmit}>
        <div className="mb-3">
          <label htmlFor="imie" className="form-label">Imię</label>
          <input type="text" className="form-control" id="imie" value={imie} onChange={(e) => ustawImie(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="nazwisko" className="form-label">Nazwisko</label>
          <input type="text" className="form-control" id="nazwisko" value={nazwisko} onChange={(e) => ustawNazwisko(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="wybranyKurs" className="form-label">Kurs</label>
          <select className="form-select" id="wybranyKurs" value={wybranyKurs} onChange={(e) => ustawWybranyKurs(e.target.value)}>
            <option value="">Wybierz kurs</option>
            {kursy.map((kurs, indeks) => (
              <option key={indeks} value={kurs}>{kurs}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Dodaj do kursu</button>
      </form>
    </div>
  );
};

export default App;
