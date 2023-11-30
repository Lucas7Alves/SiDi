import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/telaLogin.sass";
import Logo from "../img/SiDi_logo.svg";
import axios from "axios";

interface formData {
  email: string;
  senhaCad: string;
}

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<formData>({
    email: "",
    senhaCad: "",
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
    

    if (formData.senhaCad && formData.email) {
      handleLogin(e);
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };


  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/sidi_ponto/v1/login",
        {
          email: formData.email,
          password: formData.senhaCad
        }
      );
      if (response.status === 200) {
        alert("Login efetuado!");
        navigate("/Home");
      } else {
        alert("Erro no login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
    }
  };

  return (
    <div className="Logintela">
      <div className="Logintela__forms-container">
        <div className="Logintela__titulo-container">
          <img src={Logo} alt="Logo_SiDi" className="logo" />
          <h1 className="Logintela_titulo">| Login |</h1>
        </div>

        <form className="Logintela__forms" onSubmit={handleSubmit}>
          <fieldset className="Forms_field">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </fieldset>

          <fieldset className="Forms_field">
            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              name="senhaCad"
              value={formData.senhaCad}
              onChange={handleInputChange}
            />
          </fieldset>

          <button
              type="submit"
              className="btnEntrar"
            >
              <strong>Entrar</strong>
            </button>

          <fieldset className="Forms_field btnCadastro">
            <button
              onClick={() => navigate("/EsqueciSenha")}
              className="btnCadastro"
            >
              Esqueceu sua senha?
            </button>
          </fieldset>

          <fieldset className="Forms_field btnCadastro">
            <button
              onClick={() => navigate("/Cadastro")}
              className="btnCadastro"
            >
              Cadastre-se
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Login;
