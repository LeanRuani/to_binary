import React, { useState } from "react";
import Binary from "../src/Binary";
import Text from "../src/Text";

const App = () => {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");

  const onChangeText = (e) => {
    const texto = e.target.value;
    setText(texto);
  };

  const onChangeBinary = (e) => {
    const binario = e.target.value;
    setBinary(binario);
  };

  return (
    <>
      <h1> Texto a Binario</h1>
      <div className="App">
        <textarea className="textarea_texto" onChange={onChangeText} />
        <Binary text={text} />
      </div>

      <h1> Binario a Texto</h1>
      <div className="App">
        <textarea className="textarea_binario" onChange={onChangeBinary} />
        <Text binary={binary} />
      </div>
    </>
  );
};

export default App;
