import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

// Jest
// AAA (Arrange, Act and Assert).
// (ARRANGE) Arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)
// (ACT) Agimos (realizamos clicks, definimos valores)
// (ASSERT) Afirmamos o que queremos (onde realizamos as expectativas)

test("quando o input esta vazio, novos participantes nao podem ser adicionados.", () => {
  // Renderizar o componente
  render(<Formulario />);

  // Encontrar no DOM o input
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  // Encontrar o botao pela sua responsabilidade na tela (submeter)
  const botao = screen.getByRole("button");

  // Garantir que o input esteja no documento
  expect(input).toBeInTheDocument();

  // Garantir que o botao esteja desabilitado
  expect(botao).toBeDisabled();
});

test("adicionar um participante caso exista um nome preenchido", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  const botao = screen.getByRole("button");
  // inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: "Ana Catarina",
    },
  });
  // clicar no botão de submeter
  fireEvent.click(botao);

  // garantir que o input esteja com o foco ativo
  expect(input).toHaveFocus();

  // garantir que o input não tenha um valor
  expect(input).toHaveValue("");
});
