import { useListaParticipantes } from './useListaParticipantes';
import { resultadoDoAmigoSecreto } from './../atom';
import { useSetRecoilState } from 'recoil';
import { realizarSorteio } from './../helpers/realizarSorteio';

export const useSorteador = () => {
    const participantes = useListaParticipantes();
    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);
    return () => {
        const resultado = realizarSorteio(participantes);
        setResultado(resultado);
    }
}