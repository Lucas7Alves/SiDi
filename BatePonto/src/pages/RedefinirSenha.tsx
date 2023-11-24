import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/RedefinirSenha.sass";
import LogoSenha from "../img/SiDi_logo.svg";

interface formData {
  novaSenha: string;
  repetirSenha: string;
}

function RedefinirSenha() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<formData>({
    novaSenha: "",
    repetirSenha: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.novaSenha && formData.repetirSenha) {
      if (formData.novaSenha == formData.repetirSenha) {
        navigate("/login");
      } else {
        alert("As senhas devem ser iguais");
      }
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (

    <div className="fundoSenha">
    <div>
      <img src={LogoSenha} alt="logo da sidi" className="logoSenhaR"/>

      <p className="fraseSenha">Utilize o formulário a seguir para redefinir sua senha.</p>

      <form onSubmit={handleSubmit}>

        <fieldset className="formSenhaI">
          <TextField style={{width: 500}}
            label="Digite sua nova senha"
            type="password"
            variant="outlined"
            name="novaSenha"
            value={formData.novaSenha}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset className="formSenhaR">
          <TextField style={{width: 500}}
            label="Repita sua nova senha"
            type="password"
            variant="outlined"
            name="repetirSenha"
            value={formData.repetirSenha}
            onChange={handleInputChange}
          />
        </fieldset>

        
        <fieldset className="btnEnviarSenha">
        <Button style={{width: 150, height: 50}}
        type="submit"
        variant="contained"
        color="secondary">REDEFINIR</Button>
        </fieldset>
      </form>
      
    </div>
    </div>
  );
}

export default RedefinirSenha;
