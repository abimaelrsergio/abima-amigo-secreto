import React from "react";
import { render, screen } from "@testing-library/react";

// Jest

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
