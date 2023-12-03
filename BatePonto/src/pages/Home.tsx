import { useState } from "react";
import DateForm from "../components/dateForm"

import "../scss/home.sass";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import TimeBar from "../components/TimeBar";
import NavBar from "../components/NavBar";
import axios from "axios";
import { DatePicker } from '@mui/x-date-pickers';



function Home() {


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCQI2HtvKCfvPZ8GXGI05UQzLM4ykDrU-U"
  })

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [message] = useState("");
  const [messageCorrigida] = useState("");

  const mostrarMessage = () => {
    alert("Registro efetuado!");
  };

  const mostrarMessageSaida = () => {
    alert("Resgistro de saida efetuado!");
  };

  const msgCorrigida = () => {
    alert("Registro Corrigido!");
  };
  


  const handleEntrada = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      { /* falta passar o form data */}
      const response = await axios.post(
        "http://127.0.0.1:5000/sidi_ponto/v1/criar"
        
        "http://127.0.0.1:5000/sidi_ponto/v1/criar" 
      );
      
      if (response.status === 200) {
        alert("Registro efetuado!");
      } else {
        alert("Erro no registro.");
      }
    } catch (error) {
      console.error("Erro ao realizar o registro:", error);
    }

    
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  }

  return (



    <div className="fundoTelaInicial">
      <NavBar />

      <div className="telaInicialContainer">
        

          <p className="wellcomeFrase">⠀⠀Bem-vindo de volta, Lucas!</p>

          <div className="textosCima">
            <p className="entradaName">⠀⠀⠀⠀⠀⠀⠀⠀⠀Entrada:</p>
            <p className="saidaName">⠀⠀⠀⠀⠀⠀Saída:⠀⠀⠀</p>
            <p className="corrigirName">Corrigir ponto:</p>
          </div>



          <div className="opcoesCima">

            <div className="form1">
              <form onSubmit={handleEntrada}>
                <DatePicker value={selectedDate} onChange={handleDateChange} />
              </form>

              <TimeBar />
              <button className="btnHomeI"
                type="reset"
                onClick={mostrarMessage}
              >Bater Ponto</button>

            </div>


            <div className="form2">

              <TimeBar />
              <button className="btnHomeII"
                type="reset"
                onClick={mostrarMessageSaida}
              >Bater Ponto</button>
              {<p>{message}</p>}
            </div>


            <div className="form3">

              <TimeBar />  { }
              <button className="btnHomeIII"
                type="reset"

                onClick={msgCorrigida}
              >Corrigir ponto</button>
              {<p>{messageCorrigida}</p>}
            </div>

          </div>

          <p className="textoMapa">Sua localização:⠀⠀⠀⠀</p>

          <div className="map">{isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: 800, height: 280 }}
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