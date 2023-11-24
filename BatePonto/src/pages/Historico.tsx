import NavBar from "../components/NavBar";
import "../scss/Historico.sass";
import TimeBar from "../components/TimeBar";
import DateForm from "../components/dateForm";

function Historico(){

    return(
    
    <div className="fundoTelaHistorico">
        <NavBar/>
        <div className="telaHistoricoContainer">

    

        <table className="tabela">
            <tr className="tabelaTitulo ">
                <td className="palavrasTopo"><h1>Data:</h1></td>
                <td className="palavrasTopo"><h1>Registro:</h1></td>
                <td className="palavrasTopo"><h1>Localização:</h1></td>
            </tr>

            <tr className="tabelaTitulo tabelaCinza">
                <td>23/11/2023</td>
                <td>Ponto batido!</td>
                <td>Cais do Apolo, 222 - Recife, PE, 50030-230.</td>
            </tr>

            <tr className="tabelaTitulo">
                <td>22/11/2023</td>
                <td>Ponto batido!</td>
                <td>Cais do Apolo, 222 - Recife, PE, 50030-230.</td>
            </tr>

            <tr className="tabelaTitulo tabelaCinza">
                <td>21/11/2023</td>
                <td>Nenhum ponto batido.</td>
                <td>Nennuma localização registrada.</td>
            </tr>

            <tr className="tabelaTitulo">
                <td>22/11/2023</td>
                <td>Ponto batido!</td>
                <td>Cais do Apolo, 222 - Recife, PE, 50030-230.</td>
            </tr>

            <tr className="tabelaTitulo tabelaCinza">
                <td>21/11/2023</td>
                <td>Ponto batido!</td>
                <td>Cais do Apolo, 222 - Recife, PE, 50030-230.</td>
            </tr>

            <tr className="tabelaTitulo">
                <td>20/11/2023</td>
                <td>Ponto batido!</td>
                <td>Cais do Apolo, 222 - Recife, PE, 50030-230.</td>
            </tr>

            <tr className="tabelaTitulo tabelaCinza">
                <td>19/11/2023</td>
                <td>Ponto batido!</td>
                <td>Cais do Apolo, 222 - Recife, PE, 50030-230.</td>
            </tr>

            <tr className="tabelaTitulo">
                <td>18/11/2023</td>
                <td>Nenhum ponto batido.</td>
                <td>Nennuma localização registrada.</td>
            </tr>

            <tr className="tabelaTitulo">
                <td>17/11/2023</td>
                <td>Nenhum ponto batido.</td>
                <td>Nennuma localização registrada.</td>
            </tr>

            <tr className="tabelaTitulo tabelaCinza">
                <td>16/11/2023</td>
                <td>Ponto batido!</td>
                <td>Cais do Apolo, 222 - Recife, PE, 50030-230.</td>
            </tr>



        </table>

        </div>
    </div>

        
    )
}

export default Historico