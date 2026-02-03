function Exercicio4() {
  function DestacarAtrasos() {
    let caixa = document.getElementById("alerta-cobranca");
    caixa.style.backgroundColor = "red";
    caixa.innerText = "Pagamento Atrasado!";
    caixa.style.border = "2px solid red";
  }

  return (
    <div>
      <h2>Cobrança</h2>
      <div id="alerta-cobranca" style={{}}>
        Status: Normal
      </div>
      <button onClick={DestacarAtrasos}>Destacar Atrasos</button>
    </div>
  );
}

export default Exercicio4;
