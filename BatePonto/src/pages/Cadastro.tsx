import { useNavigate } from "react-router-dom"
import { Button} from "@mui/material"

function Cadastro() {
    const navigate = useNavigate()

    return(
        <>
          <h1>Tela de cadastro!!</h1>
          <Button
          type="button"
          color="primary"
          variant="contained"
          onClick={() => navigate("/login")}>
            Finalizar Cadastro
          </Button>  
        </>
    )
}

export default Cadastro