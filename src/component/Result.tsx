import type { Dispatch, SetStateAction } from "react"
import type { states, hands, result } from "../App"

type Props = {
    gameState: states,
    setGameState: Dispatch<SetStateAction<states>>
    firstPlayer: hands | null,
    secondPlayer: hands | null,
    firstPlayersName: string,
    secondPlayersName: string,
    result: result,
    setResult: Dispatch<SetStateAction<result>>
    reset:(result: result) => void
}

function Result({ gameState, firstPlayer, secondPlayer, firstPlayersName, secondPlayersName, result, setResult, reset }: Props) {
    if (firstPlayer === secondPlayer) {
        setResult("draw")
    } else if (firstPlayer === "グー" && secondPlayer === "チョキ" || firstPlayer === "チョキ" && secondPlayer === "パー" || firstPlayer === "パー" && secondPlayer === "グー"){
        setResult("firstPlayerWin")
    } else {
        setResult("secondPlayerWin")
    }


        return (
            <>
                {gameState === "result" && (
                    <>
                        <div>
                            <p>{firstPlayersName}:{firstPlayer}</p>
                            <p>{secondPlayersName}:{secondPlayer}</p>
                        </div>

                        {result === "firstPlayerWin" && (
                            <p>{firstPlayersName}さんの勝利！</p>
                        )}

                        {result === "secondPlayerWin" && (
                            <p>{secondPlayersName}さんの勝利！</p>
                        )}

                        {result === "draw" && (
                            <p>引き分け！もう一回</p>
                        )}



                        <button onClick={() => reset(result)}>{result === "draw" ? "もう一回手を選ぼう！" : "もう一度"}</button>
                    </>
                )}
            </>
        )
}

export default Result