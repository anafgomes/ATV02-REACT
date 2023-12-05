import React, { useState } from "react";
import logo from "../../../combustivel.png";
import styles from "./Inicio.module.css";

const CombustivelCalculator = () => {
  const [precoEtanol, setPrecoEtanol] = useState("");
  const [precoGasolina, setPrecoGasolina] = useState("");
  const [resultado, setResultado] = useState(null);

  const Calcular = () => {
    if (!precoEtanol || !precoGasolina) {
      alert("Por favor, preencha ambos os valores.");
      return;
    }

    const calculo =
      parseFloat(precoEtanol.replace(",", ".")) /
      parseFloat(precoGasolina.replace(",", "."));

    setResultado(
      calculo < 0.7 ? "Etanol é mais vantajoso" : "Gasolina é mais vantajosa"
    );
  };

  return (
    <div className={styles.calculadoracontainer}>
      <img className={styles.imagem} src={logo} alt="Imagem" />
      <h2>Você sabe com qual combustivel compensa mais abastecer seu carro?</h2>
      <h2>Ultilize a Calculadora a baixo:</h2>
      <div className={styles.inputscontainer}>
        <div>
          <label htmlFor="precoEtanol">Preço - litro Etanol (R$)</label>
          <br />
          <input
            type="text"
            id="precoEtanol"
            value={precoEtanol}
            placeholder="0"
            onChange={(e) => setPrecoEtanol(e.target.value)}
          />
        </div>
        <div>
          <br />
          <label htmlFor="precoGasolina">Preço - litro Gasolina (R$)</label>
          <br />
          <input
            type="text"
            id="precoGasolina"
            value={precoGasolina}
            placeholder="0"
            onChange={(e) => setPrecoGasolina(e.target.value)}
          />
          <br />
          <br />
          <button onClick={Calcular}>Calcular</button>
          {resultado && <p>{resultado}</p>}
        </div>
      </div>
    </div>
  );
};

export default CombustivelCalculator;
