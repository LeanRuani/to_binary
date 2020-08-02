import React from "react";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const Considerations = () => {
  return (
    <div className="considerations">
      <List component="nav" aria-label="contacts">
        <ListItemText>
          <p className="text-item">
            Si solo se quiere saber el valor en binario de un numero es solo
            ponerlo. Ahora, si se hace una cadena de numeros o de texto pasa a
            binario según ASCII.
          </p>
        </ListItemText>
        <hr></hr>
        <ListItemText>
          <p className="text-item">
            No se puede pasar un <strong>numero en binario</strong> a texto, ya
            que no hay forma de diferenciarlos.
          </p>
        </ListItemText>
      </List>
    </div>
  );
};

export default Considerations;
