import Cabecalho from "../components/cabecalho";
import { Button } from "@mui/material";
import { useState } from "react";

function Home() {
  const [message, setMessage] = useState("");

  const mostrarMessage = () => {
    setMessage("Ponto Batido!");
  };
  return (
    <div>
      <Cabecalho />
      <p>
        Bem-Vinda de volta, <strong>Maria Julia!</strong> Sentimos sua falta.
      </p>
      <Button
        type="reset"
        color="secondary"
        variant="outlined"
        size="large"
        onClick={mostrarMessage}
      >
        Bater Ponto
      </Button>
      {<p>{message}</p>}
    </div>
  );
}

export default Home;
