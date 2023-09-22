import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "./../componentes/state/hooks/useListaParticipantes";
import Sorteio from "./Sorteio";
import { useResultadoSorteio } from "./../componentes/state/hooks/useResultadoSorteio";

jest.mock("./../componentes/state/hooks/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});
jest.mock("./../componentes/state/hooks/useResultadoSorteio", () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});
describe("na pagina de sorteio", () => {
  const participantes = ["Abimael", "Gigi", "Irene"];
  const resultado = new Map([
    ["Abimael", "Gigi"],
    ["Gigi", "Irene"],
    ["Irene", "Abimael"],
  ]);
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });
  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const opcoes = screen.queryAllByRole("option");
    expect(opcoes).toHaveLength(participantes.length);
  });
  test("o amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: { value: participantes[0] },
    });
    const botao = screen.getByRole("button");
    fireEvent.click(botao);
    const amigoSecreto = screen.getByRole("alert");
    expect(amigoSecreto).toBeInTheDocument();
  });
});
