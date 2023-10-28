import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate() 
    return (
        <>
            <p id="cpfBarra">CPF</p>
            <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" />

            <p id='senhaBarra'>Senha</p>
            <input type="text" name="password" id="password" placeholder="Insira sua senha" />
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/Home")}
            >
                Entrar
            </Button>
        </>
    )
}

export default Login;
