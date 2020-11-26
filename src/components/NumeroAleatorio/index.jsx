import React from "react";

export default ({ max, min }) => {
  let delta = max - min + 1;
  var random = Math.floor(Math.random(min) * delta) + min;
  return (
    <>
      <h3>O número sorteado foi { random }</h3>
    </>
  );
};
