import React from "react";

const Binary = ({ text }) => {
  //100000 "espacio" en binario

  const binario = [];
  const texto = text.split("100000");

  texto.map((i) => {
    if (!isNaN(i)) {
      const b = Number(i).toString(2);
      binario.push(b);
    } else {
      const textoT = i.split("");
      textoT.map((i) => {
        const a = i.charCodeAt(0).toString(2);
        binario.push(a);
        return true;
      });
    }
    return true;
  });

  return (
    <textarea className="textarea_binario" readOnly value={binario.join(" ")} />
  );
};

export default Binary;
