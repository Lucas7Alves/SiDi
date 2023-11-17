import Logo from "../img/Logo-SiDi.png"
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface formData{
  
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
            navigate("/Home");
          } else {
            alert("Por favor, preencha todos os campos!");
          }
    };

    return(
        <>
        <img src={Logo} alt="Logo_SiDi" className="logo"/>

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

        

        <fieldset>
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                className="btnEntrar"
            >
                Mudar senha
            </Button>
            </fieldset>    
    </form>
        </>
    )
}

export default EsqueciSenha