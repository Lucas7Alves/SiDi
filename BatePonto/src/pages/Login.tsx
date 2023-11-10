import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../estilizacao/telaLogin.sass";
import Logo from "../img/Logo-SiDi.png"
import imgCad from "../img/devsTrabalhando_.jpg"

interface formData{
  
    email: string;
    password: string;
}

function Login() {
    const navigate = useNavigate() 
    const [formData, setFormData] = useState<formData>({
        email: "",
        password: "",
    })

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData ({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.password && formData.email) {
            navigate("/Home");
          } else {
            alert("Por favor, preencha todos os campos!");
          }

        
    };
    
    
    return (
        <>
        <img src={Logo} alt="Logo_SiDi" className="logo"/>
    <form onSubmit={handleSubmit} >
        <fieldset>
            <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            
          />
        </fieldset>

        <fieldset>
            <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleInputChange}

          />
        </fieldset>

        <fieldset>
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                className="btnEntrar"
  
            >
                Entrar
            </Button>
            </fieldset>    
                 
            <fieldset>
            <Button 
                variant="contained"
                color="secondary"
                onClick={() => navigate("/Cadastro")}
                className="btnCadastro"
            >
                Cadastre-se
            </Button>
            </fieldset>
    </form>
    <div className="dev">
    <img src={imgCad} alt="Devs_Trabalhando" />    
    </div>
        </>
    )
}

export default Login;
