import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Cabecalho from "../componets/cabecalho";
interface FormData {

  password: string;
  email: string;
}

function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    password: "",
    email: "",
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
  
    if (formData.password && formData.email) {
      navigate("/login");
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <>
      <Cabecalho/>
      <h1>Tela de cadastro!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}

          />
        </div>
        <div>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}

          />
        </div>
        <div>
          <Button type="submit" color="secondary" variant="contained">
            Finalizar Cadastro
          </Button>
        </div>
      </form>
    </>
  );
}

export default Cadastro;
