import { useState } from "react"
import "./velha.css"

function Velha() {
    const [jogadas, setJogadas] = useState([
        '', '', '',
        '', '', '',
        '', '', ''
    ])

    return (
        <>
            <h3>
                Jogo da velha
            </h3>
            <div id="game">
                {jogadas.map((item, index) => (
                    <button
                        class="buttonGame"
                        onClick="clickDoJogador(${i})"
                    >{item}</button>
                ))}
            </div>
            <label id="status">
                Vez do jogador X
            </label>


        </>
    )
}

export default Velha