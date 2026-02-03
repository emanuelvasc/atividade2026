function Exercicio6() {
  function caucularTotal() {
    let produtos = [{ nome: "Produto A", preco: 100.5, imposto: 15 }];
    let resultado = document.getElementById("total-produtos");

    let total = produtos[0].preco + produtos[0].imposto;

    resultado.innerText = `Total: R$ ${total.toFixed(2)}`;
    return <div></div>;
  }

  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", marginTop: "10px" }}
    >
      <h2>Calculadore de Total de Produtos</h2>

      <button onClick={caucularTotal}>Calcular Total</button>

      <div
        id="total-produtos"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}

export default Exercicio6;
