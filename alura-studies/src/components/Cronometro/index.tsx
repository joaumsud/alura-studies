import Botao from "../Botao";
import Relogio from "./Relogio";

export function Cronometro (){
    return(
        <div>
            <p>Escolha um card e inicie um cronometro</p>
            <div>
            <Relogio />
            </div>
            <Botao  titulo = 'Começar'></Botao>
        </div>
    )
}