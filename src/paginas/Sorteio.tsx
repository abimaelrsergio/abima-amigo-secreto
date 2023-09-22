import { useListaParticipantes } from "./../componentes/state/hooks/useListaParticipantes";
import { useState } from "react";
import { useResultadoSorteio } from "./../componentes/state/hooks/useResultadoSorteio";

import "./Sorteio.css";
import Card from "../componentes/Card";

const Sorteio = () => {
  const participantes = useListaParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");
  const resultado = useResultadoSorteio();
  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };
  return (
    <Card>
      <section className="sorteio">
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
          >
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <button className="botao-sortear">Sortear</button>
        </form>
        {amigoSecreto && (
          <p role="alert" className="resultado">
            {amigoSecreto}
          </p>
        )}
        <footer className="sorteio">
          <img
            src="/imagens/aviao.png"
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Sorteio;
