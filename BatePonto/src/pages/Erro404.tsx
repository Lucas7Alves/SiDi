import { Button } from "@mui/material";
import "../scss/erro404.sass";
import { useNavigate } from "react-router-dom";

function Erro404() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div className="corFundoErro">
        <div className="fundoErro">
          <div className="telaErro">
            <h1 className="nomeErro">
              Ops, esta página<br></br>não foi encontrada.
            </h1>
            <p className="fraseErro">
              A página que você procura pode ter sido removida, ter seu<br></br>
              nome alterado ou estar temporariamente indisponível.
            </p>
            <form onSubmit={handleSubmit} className="btnVolta">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                size="large"
              >
                Página Inicial
              </Button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default Erro404;
