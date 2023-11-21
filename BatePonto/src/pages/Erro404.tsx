import { Button } from "@mui/material"
import "../scss/erro404.sass";
    
function Erro404() {
    return(
        <>
            <div className="corFundoErro">
                <div className="fundoErro">
                    <h1 className="nomeErro"><br></br><br></br><br></br><br></br><br></br>
                    Ops, esta página<br></br>não foi encontrada.</h1>
                    <p className="fraseErro">A página que você procura pode ter sido removida, ter seu<br></br>nome alterado ou estar temporariamente indisponível.</p>

                </div>
            </div>    
        </>
    )
}

export default Erro404