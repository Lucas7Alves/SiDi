import NavBar from "../components/NavBar";
import "../scss/Historico.sass";
import TimeBar from "../components/TimeBar";
import DateForm from "../components/dateForm";


function Historico(){

    return(
    
    <div className="fundoTelaHistorico">
        <div className="telaHistoricoContainer">

            <div>
            <NavBar/>
            
            <DateForm/>
            <TimeBar/>
            
        </div>
            </div>
    </div>

        
    )
}

export default Historico