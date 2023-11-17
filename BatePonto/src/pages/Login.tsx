import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../estilizacao/telaLogin.sass";
import Logo from "../img/Logo-SiDi.png"
import imgCad from "../img/devsTrabalhando_.jpg"
import axios from "axios";

interface formData{
    username: string;
    email: string;
    password: string;
}

function Login() {
    const navigate = useNavigate() 
    const [formData, setFormData] = useState<formData>({
        username: "",
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
        handleLogin(e);

        if (formData.password && formData.email && formData.username) {
            navigate("/Home");
          } else {
            alert("Por favor, preencha todos os campos!");
          }

        
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        

    try {
        const response = await axios.post("http://127.0.0.1:5000/sidi_ponto/v1/login", formData);
        console.log(response.status)
        if (response.status === 200) {
          alert("Login successful!");
          // Redirecione para a página após o login
          navigate("/Home");

        } else {
          alert("Erro no login. Verifique suas credenciais.");
        }
      } catch (error) {
        console.error("Erro ao realizar o login:", error);
      }
    };
    
    
    
    return (
        <>
        <img src={Logo} alt="Logo_SiDi" className="logo"/>

        <form onSubmit={handleSubmit} >
    
        <fieldset>
            <TextField
            label="Nome"
            variant="outlined"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            
          />
        </fieldset>

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

            <fieldset>
            <Button 
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/EsqueciSenha")}
                className="btnCadastro"
            >
                Esqueceu sua senha?
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
