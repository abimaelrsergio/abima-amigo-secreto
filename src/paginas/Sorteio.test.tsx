import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "./../componentes/state/hooks/useListaParticipantes";
import Sorteio from "./Sorteio";

jest.mock("./../componentes/state/hooks/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

describe("na pagina de sorteio", () => {
  const participantes = [
    "Abimael",
    "Gigi",
    "Irene",
    "Shirley",
    "Patricia",
    "Bruna",
    "David",
    "Jonathan",
    "Bruno",
    "Adriano",
    "Tio Zezinho",
    "Victor",
    "Rebeca",
    "Tia Acassia",
    "Ingrid",
    "Igor",
    "Helena",
    "Fabi",
    "Dorinha",
    "Salvan",
  ];
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
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
});
