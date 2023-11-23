import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import LogoCad from "../img/Logo-SiDi.png";
import "../scss/Cadastro.sass";

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
      navigate("/login");
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div className="fundoCad">
      <div className="Cad_forms-container">
        <div className="Cad_titulo-container">
          <img src={LogoCad} alt="Logo sidi" className="logoCad" />
          <h1 className="cadastro_C">|Cadastro|</h1>
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
              CADASTRAR-SE
            </button>   
    
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
