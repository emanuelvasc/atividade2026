import { useState } from "react";

function Exercicio3() {
  const [insumo, setInsumo] = useState(null);

  function mostrarInsumo() {
    // simulação de API
    setInsumo({
      Nome: "Adubo Orgânico",
      Foto: "https://placecats.com/300/200",
      Estoque: "150 Sacos",
    });
  }

  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", marginTop: "10px" }}
    >
      <h2>Resultado Estoque</h2>

      <button onClick={mostrarInsumo}>Detalhes Insumo</button>

      {insumo && (
        <>
          <h3 style={{ marginTop: "10px" }}>{insumo.Nome}</h3>
          <img
            src={insumo.Foto}
            alt="Foto do Insumo"
            style={{ marginTop: "10px" }}
          />
          <p>{insumo.Estoque}</p>
        </>
      )}
    </div>
  );
}

export default Exercicio3;
