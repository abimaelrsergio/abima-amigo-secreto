import { useListaParticipantes } from "./state/hooks/useListaParticipantes";
import { useNavigate } from "react-router-dom";

import './Rodape.css'

const Rodape = () => {
  const participantes = useListaParticipantes();
  const navegarPara = useNavigate();
  const iniciar = () => {
    navegarPara("/sorteio");
  };
  return (
    <footer className="rodape-configuracoes">
      <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Rodape;
