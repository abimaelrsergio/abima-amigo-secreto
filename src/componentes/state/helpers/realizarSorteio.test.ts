import { realizarSorteio } from "./realizarSorteio";

describe('dato um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = ['ana', 'catarina', 'juliana', 'abimael', 'joao', 'Gigi'];
        const sorteio = realizarSorteio(participantes);
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})