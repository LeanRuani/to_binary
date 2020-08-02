import React, { useState } from "react";
import Binary from "../src/Binary";
import Text from "../src/Text";
import Considerations from "../src/Considerations";
import Grid from "@material-ui/core/Grid";

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
      <h2> Texto a Binario</h2>
      <Grid container direction="row" justify="center" alignItems="center">
        <textarea className="textarea_texto" onChange={onChangeText} />
        <Binary text={text} />
      </Grid>

      <h2> Binario a Texto</h2>
      <Grid container direction="row" justify="center" alignItems="center">
        <textarea className="textarea_binario" onChange={onChangeBinary} />
        <Text binary={binary} />
      </Grid>

      <div>
        <h2 className="title-considerations">Consideraciones Generales</h2>
        <Considerations />
      </div>
    </>
  );
};

export default App;
