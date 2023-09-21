import { useListaParticipantes } from "./state/hooks/useListaParticipantes";
import { useNavigate } from "react-router-dom";

const Rodape = () => {
  const participantes = useListaParticipantes();
  const navegarPara = useNavigate();
  const iniciar = () => {
    navegarPara("/sorteio");
  };
  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Rodape;
