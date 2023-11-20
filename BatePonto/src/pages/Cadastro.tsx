import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Cabecalho from "../components/cabecalho";
import  "../scss/Cadastro.sass";
interface FormData {

  nome: string
  senha: string;
  cpf: string;
  repetirSenha: string;
  email: string;
  numero: string;
}

function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    senha: "",
    cpf: "",
    nome: "",
    repetirSenha:"",
    email:"",
    numero:"",
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
  
    if (formData.senha && formData.cpf && formData.nome && formData.repetirSenha && formData.email && formData.numero) {
      navigate("/login");
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div>
      <Cabecalho/>
      <h1 className="cadastro_C">Cadastro</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <TextField
            label="Nome Completo"
            variant="outlined"       
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}

          />
       
        </div>
        <div>
          <TextField
            label="CPF"
            variant="outlined"
            type="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleInputChange}

          />
        </div>
        <div>
          <TextField
            label="Email"
            variant="outlined"           
            name="email"
            value={formData.email}
            onChange={handleInputChange}

          />
        </div>
        <div>
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleInputChange}

          />
       
        </div>
       
        <div>
          <TextField
            label="Repetir Senha"
            variant="outlined"         
            name="repetirSenha"
            type="password"
            value={formData.repetirSenha}
            onChange={handleInputChange}

          />
       
        </div>
        <div>
          <TextField
            label="Número do Celular"
            variant="outlined"          
            name="numero"
            value={formData.numero}
            onChange={handleInputChange}

          />
        </div>
        <div>
          <Button type="submit" color="primary" variant="contained">
            Finalizar Cadastro
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
