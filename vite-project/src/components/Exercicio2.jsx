function Exercicio2() {
  function processarDados() {
    let fatura = {
      cliente: "João Silva",
      valor: 250.75,
      vencimento: "2024-07-15",
    };

    let display = document.getElementById("detalhes-fatura");
    display.innerHTML =
      "Cliente: " +
      fatura.cliente +
      "<br>" +
      "Valor: R$ " +
      fatura.valor +
      "<br>" +
      "Vencimento: " +
      fatura.vencimento +
      "<br>";
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Processamento de fatura</h2>
      <h2> Resultado Financeiro</h2>
      <button onClick={processarDados}>Processar Dados</button>

      <div
        id="detalhes-fatura"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}

export default Exercicio2;
