import React, { useState, useEffect  } from "react";
import ReactDOM from "react-dom";

export default function Fungsi1() { // <- fungsi default-nya, harus ada
  const [hitung, setHitungan] = useState(0);
  const [hitung2, setHitungan2] = useState(0);
  const [hasilhitung, setHasilhitung] = useState(0);

  useEffect(() => {
    setHasilhitung(() => hitung * 2);
  }, [hitung]); // <- nilai ini akan di pantau oleh react
  useEffect(() => {
    if(hitung>5)
    {
      setHitungan2(() => hitung);
    }
   
  }, [hitung]); // <- nilai ini akan di pantau oleh react

  return (
    <>
      <p>Hitungan: {hitung}</p>
      <p>Hitungan 2: {hitung2}</p>
      <button onClick={() => setHitungan((nilaiawal) => nilaiawal + 1)}>+</button>
      <p>Hasil Hitungan: {hasilhitung}</p>
    </>
  );
}

ReactDOM.render(<Fungsi1 />, document.getElementById('penghubung-html'));
