import shuffle from "just-shuffle";

export function realizarSorteio(participantes: string[]) {
    const totalParticipantes = participantes.length;
    const embaralhado = shuffle(participantes);
    const resultado = new Map<string, string>();
    for (let index = 0; index < totalParticipantes; index++) {
        // o index é igual ao último?  reterno o primeiro : retorna o próximo   
        const indiceDoAmigo = index === (totalParticipantes - 1) ? 0 : index + 1;
        resultado.set(embaralhado[index], embaralhado[indiceDoAmigo]);
    }
    return resultado;
}