import React, { useState } from "react";

const Binary = ({ text }) => {
  // const [binary, setBinary] = useState("");

  const binario = [];
  const texto = text.split("");

  texto.map(function (i) {
    if (!isNaN(i)) {
      const b = Number(i).toString(2);
      binario.push(b);
    } else {
      const textoT = i.split("");
      textoT.map(function (i) {
        var a = i.charCodeAt(0).toString(2);
        binario.push(a);
      });
    }
  });

  return <textarea className="textarea_binario" value={binario.join(" ")} />;
};

export default Binary;
