import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/EsqueciSenha.sass";
import LogoSenha from "../img/Logo-SiDi.png";

    interface formData {
        email: string;
    }

function EsqueciSenha() {

    const navigate = useNavigate() 
    const [formData, setFormData] = useState<formData>({
        email: "",
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

        if (formData.email) {
            navigate("/RedefinirSenha");
          } else {
            alert("Por favor, preencha todos os campos!");
          }
    };

    return(
        <>
        <div className="fundoSenha">
        <div>
            <img src={LogoSenha} alt="logo da sidi" className="logoSenha"/>
            
            <p className="fraseSenha">Insira o seu email e enviaremos um link para você voltar a acessar a sua conta.</p>

    <form onSubmit={handleSubmit} >
            <fieldset>
                <TextField
                label="Digite seu email"
                type="email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                />
            </fieldset>

        <p className="subTexto">Você receberá um e-mail com as instruções para criar uma nova senha para este usuário.</p>

            <fieldset>
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                className="btnEntrar"
            >ENVIAR</Button>
            </fieldset>    
    </form>

        
        </div>
        </div>
        </>
    )
}

export default EsqueciSenha