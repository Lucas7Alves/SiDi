import { Button } from "@mui/material";
import { useState } from "react";
import LogoCad from "../img/SiDi_logo.svg";
import DateForm from "../components/dateForm"
import "../scss/home.sass";

function Home() {
  const [message, setMessage] = useState("");
  const [messageCorrigida, setMsgCorrigida] = useState("");

  const mostrarMessage = () => {
    setMessage("Ponto Batido!");
  };

  const msgCorrigida = () => {
    setMsgCorrigida("Ponto Corrigido!");
  };


  return (
    <div>
      <img src={LogoCad} className="logoHome"/>
      <p>
        Bem-Vinda de volta, <strong>{ /*add uma variavel com o nome*/ }</strong> Sentimos sua falta.
      </p>

      <p>Entrada</p>
      
      <DateForm/>

      <Button
        type="reset"
        color="secondary"
        variant="contained"
        size="large"
        onClick={mostrarMessage}
      >
        Bater Ponto
      </Button>
      {<p>{message}</p>}


      <p>Corrigir Ponto</p>
      
      <DateForm />  {/* Onde entra a data do ponto a ser corrigido */}
      <DateForm />  {/* Para qual data o ponto vai ser corrigido   */}
      <Button 
        type="reset"
        color="secondary"
        variant="contained"
        size="large"
        onClick={msgCorrigida}
      > Corrigir ponto
      </Button>
      {<p>{messageCorrigida}</p>}

    </div>
  );
}

export default Home;
