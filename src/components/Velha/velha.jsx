import { useEffect, useState } from "react"
import "./velha.css"

function Velha() {
    const [jogadas, setJogadas] = useState([
        '', '', '',
        '', '', '',
        '', '', ''
    ])

    const [gameover, setGameover] = useState(false)
    const [jogadorDaVez, setJogadorDaVez] = useState('X')
    const [status, setStatus] = useState('Vez do Jogador X')

    useEffect(() => {
        ganhador()
    }, [jogadas])

    function verificaCelulas(c1, c2, c3) {
        let ganhou =
            (jogadas[c1] != '' && jogadas[c2] != '' && jogadas[c3] != '' &&
                jogadas[c1] == jogadas[c2] && jogadas[c2] == jogadas[c3])

        if (ganhou)
            setStatus(`Jogador ${jogadas[c1]} Ganhou`)

        return ganhou
    }

    function ganhador() {
        if ((verificaCelulas(0, 1, 2)) || (verificaCelulas(0, 3, 6)) || (verificaCelulas(0, 4, 8))
            || (verificaCelulas(3, 4, 5)) || (verificaCelulas(6, 7, 8)) || (verificaCelulas(1, 4, 7))
            || (verificaCelulas(2, 5, 8)) || (verificaCelulas(2, 4, 6))) {
            setGameover(true)

        } else {
            const totalDeJogadas = jogadas.filter(x => x != '').length
            if (totalDeJogadas == 9) {
                setGameover(true)
                setStatus("Deu velha")
            }
        }

    }

    function playerMove(index) {

        if (jogadas[index] == '' && gameover == false) {

            let novasJogagadas = [...jogadas]
            novasJogagadas[index] = jogadorDaVez
            setJogadas(novasJogagadas)

            if (jogadorDaVez == 'X') {
                setJogadorDaVez('O')
                setStatus('Vez do Jogador O')
            } else {
                setJogadorDaVez('X')
                setStatus('Vez do Jogador X')
            }

        }

    }

    return (
        <>
            <h3>
                Jogo da velha
            </h3>
            <div id="game">
                {jogadas.map((item, index) => (
                    <button
                        className="buttonBoard"
                        onClick={() => { playerMove(index) }}
                    >{item}</button>
                ))}
            </div>
            <label id="status">
                {status}
            </label>
        </>
    )
}

export default Velha