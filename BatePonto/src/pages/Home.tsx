import { Button } from "@mui/material";
import { useState } from "react";
import LogoCad from "../img/SiDi_logo.svg";
import DateForm from "../components/dateForm"
import "../scss/home.sass";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from "react-router-dom";
import TimeBar from "../components/TimeBar";
import NavBar from "../components/NavBar";
import FundoInicial from "../img/fundologinTela.svg";



function Home() {

  const navigate = useNavigate();
 

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCQI2HtvKCfvPZ8GXGI05UQzLM4ykDrU-U"
  })
  
  const [message] = useState("");
  const [messageCorrigida] = useState("");

  const mostrarMessage = () => {
    alert("Ponto Batido!");
  };

  const msgCorrigida = () => {
    alert("Ponto Corrigido!");
  };

  return (



<div className="fundoTelaInicial">
  <NavBar/>
  
<div className="telaInicialContainer">
    
<p className="wellcomeFrase">Bem-vinda de volta, Maria!</p>

<div className="textosCima">
  <p className="">Entrada:</p>
  <p>Saída:</p>
  <p>Corrigir ponto:</p>
</div>



<div className="opcoesCima">

<div className="form1">  
<DateForm/>
<TimeBar/>
<Button
type="reset"
color="secondary"
variant="contained"
size="large"
onClick={mostrarMessage}
>Bater Ponto</Button>

</div>  


<div className="form2">  
<DateForm/>
<TimeBar/>
<Button
type="reset"
color="secondary"
variant="contained"
size="large"
onClick={mostrarMessage}
>Bater Ponto</Button>
{<p>{message}</p>}
</div>


<div className="form3">  
<DateForm />  {}
<TimeBar />  {}
<Button 
type="reset"
color="secondary"
variant="contained"
size="large"
onClick={msgCorrigida}
>Corrigir ponto</Button>
{<p>{messageCorrigida}</p>}
</div>

</div>

<p className="textoMapa">Sua localização:</p>

<div className="map">{isLoaded ? (
  <GoogleMap
    mapContainerStyle={{width: 500, height: 300}}
    center={{
    lat: -8.087133654385111, 
    lng: -34.89179401238508
    }}
    zoom={15}>
    </GoogleMap>
    ) : <></>
  }
</div>


</div>
</div>


  );
}


export default Home;