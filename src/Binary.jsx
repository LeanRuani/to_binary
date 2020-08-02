import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Binary = ({ text }) => {
  //100000 "espacio" en binario

  const binario = [];
  const [open, setOpen] = useState(false);
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
    <>
      <Grid>
        <textarea
          className="textarea_binario"
          readOnly
          value={binario.join(" ")}
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Button
          onClick={() => {
            navigator.clipboard.writeText(binario.join(" "));
            setOpen(true);
            setInterval(() => {
              setOpen(false);
            }, 2000);
          }}
          color="primary"
          variant="contained"
        >
          Copy
        </Button>

        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
              ></IconButton>
            }
          >
            Copiado
          </Alert>
        </Collapse>
      </Grid>
    </>
  );
};

export default Binary;
