import React from "react";

const Text = ({ binary }) => {
  //binario a hexa a decimal/texto

  const binario = binary.split(" ");

  const texto = parseInt(binario, 2).toString(8);

  console.log(parseInt(texto, 8));

  return <textarea />;
};

export default Text;
