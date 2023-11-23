import { Button } from "@mui/material";
import { useState } from "react";
import LogoCad from "../img/SiDi_logo.svg";
import DateForm from "../components/dateForm"
import "../scss/home.sass";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from "react-router-dom";
import TimeBar from "../components/TimeBar";
import NavBar from "../components/NavBar";


function Home() {

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/login");
  };


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCQI2HtvKCfvPZ8GXGI05UQzLM4ykDrU-U"
  })
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
      <NavBar/>
      <img src={LogoCad} className="logoHome"/>
      <p>
        Bem-Vinda de volta, <strong>{ /*add uma variavel com o nome*/ }</strong> Sentimos sua falta.
      </p>

      <p>Entrada</p>
      
      <DateForm/>

      <TimeBar/>
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

      <div className="map">{isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: 700, height: 500}}
        center={{
          lat: -8.087133654385111, 
          lng: -34.89179401238508
        }}
        zoom={15}
      >
        
      </GoogleMap>
  ) : <></>
  }</div>
    </div>


  );
}


export default Home;
