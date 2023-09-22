import shuffle from 'just-shuffle';
import { useListaParticipantes } from './useListaParticipantes';
import { resultadoDoAmigoSecreto } from './../atom';
import { useSetRecoilState } from 'recoil';

export const useSorteador = () => {
    const participantes = useListaParticipantes();
    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);
    const embaralhado = shuffle(participantes);
    const resultado = new Map<string, string>();
    return () => {
        const totalParticipantes = participantes.length;
        for (let index = 0; index < totalParticipantes; index++) {
            // o index é igual ao último?  reterno o primeiro : retorna o próximo   
            const indiceDoAmigo = index === (totalParticipantes - 1) ? 0 : index + 1;
            resultado.set(embaralhado[index], embaralhado[indiceDoAmigo]);
        }
        setResultado(resultado);
    }
}