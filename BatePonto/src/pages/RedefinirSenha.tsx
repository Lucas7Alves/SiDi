import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface formData {
  novaSenha: string;
}

function RedefinirSenha() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<formData>({
    novaSenha: "",
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
    
    if (formData.novaSenha) {
      navigate("/login");
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div>
      <h1>Criar nova senha</h1>

      <p>Utilize o formulário a seguir para redefinir sua senha.</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <TextField
            label="Digite sua nova senha"
            type="password"
            variant="outlined"
            name="novaSenha"
            value={formData.novaSenha}
            onChange={handleInputChange}
          />
        </fieldset>

        <Button className="btnRedefinirSenha"
        type="submit"
        variant="contained"
        color="secondary">Mudar Senha</Button>
      </form>
    </div>
  );
}

export default RedefinirSenha;