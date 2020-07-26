import React from "react";

const Text = ({ binary }) => {
  const texto = [];
  const binario = binary.split(" ");

  binario.map(function (x) {
    x = String.fromCharCode(parseInt(x, 2));
    texto.push(x);
    return true;
  });

  return <textarea readOnly value={texto.join("")} />;
};

export default Text;
