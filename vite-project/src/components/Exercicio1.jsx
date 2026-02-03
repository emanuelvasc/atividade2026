import { useState } from "react";

function Exercicio1() {
  const [status, setStatus] = useState("Aguardando entrega...");

  function atualizarStatus() {
    setStatus("Pedido entregue");
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Controle de Entregas</h2>

      <p style={{ color: status === "Pedido entregue" ? "green" : "black" }}>
        {status}
      </p>

      <button onClick={atualizarStatus}>Atualizar Status</button>
    </div>
  );
}

export default Exercicio1;
