import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import LogoCad from "../img/SiDi_logo.svg";
import "../scss/Cadastro.sass";
import axios from "axios";


interface formData {
  nome: string;
  senhaCad: string;
  email: string;
}

function Cadastro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<formData>({
    senhaCad: "",
    email: "",
    nome: "",
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

    if (formData.senhaCad && formData.email && formData.nome) {
      handleCadastro(e)
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };



  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    {/* na , dps da url um obj do msm jeito que o back pede */}
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/sidi_ponto/v1/cadastro", 
        {
          name: formData.nome, 
          email: formData.email,
          password: formData.senhaCad
      }
      );
      if (response.status === 200) {
        alert("Cadastrado com sucesso!");
        navigate("/Login");
      } else {
        alert("Erro no Cadastro. Verifique seus dados.");
      }
    } catch (error) {
      console.error("Erro ao realizar o cadastro:", error);
    }
};


  return (
    <div className="fundoCad">
      <div className="Cad_forms-container">
        <div className="Cad_titulo-container">
          <img src={LogoCad} alt="Logo sidi" className="logoCad" />
          <h1 className="cadastro_C">| Cadastro |</h1>
        </div>
        <form className="Cad_forms" onSubmit={handleSubmit}>
          <div className="Forms_cadField">
            <TextField
              label="Nome Completo"
              variant="outlined"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
            />
          </div>

          

          <div className="Forms_cadField">
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="Forms_cadField">
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              name="senhaCad"
              value={formData.senhaCad}
              onChange={handleInputChange}
            />
          </div>
            <button type="submit" className="btnCad">
              <strong>Cadastrar-se</strong>
            </button>   
    
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
