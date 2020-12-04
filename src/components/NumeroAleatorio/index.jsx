import React from "react";

export default ({ max, min }) => {
  let delta = max - min + 1;
  var random = Math.floor(Math.random(min) * delta) + min;
  return (
    <>
      <section className="result__container">
        <h2>Valor aleatório</h2>
        <p>Valor minimo: {min}</p>
        <p>Valor maximo: {max}</p>
        <strong>Resultado: {random}</strong>
      </section>
    </>
  );
};
