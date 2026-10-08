import type { Dispatch, SetStateAction } from "react"
import type { states, hands } from "../App"

type Props = {
    gameState: states,
    firstPlayersName:string,
    hands: hands[],
    setFirstPlayer: Dispatch<SetStateAction<hands | null>>,
    setGameState:Dispatch<SetStateAction<states>>
}

function FirstSelect({ gameState, firstPlayersName, hands, setFirstPlayer, setGameState}: Props) {
    const onFirstSelect = (firstPlayerHand:hands) => {
        if (!firstPlayerHand) {
            return;
        }

        setFirstPlayer(firstPlayerHand)
        setGameState("FtS")
    }

    return (
        <>
            {gameState === "firstSelect" && (
                <>
                    <p>{firstPlayersName}さん。出す手を選んでください</p>
                    
                    {hands.map((hand) => (
                        <button 
                            key={hand}
                            onClick={() => onFirstSelect(hand)}
                        >{hand}</button>
                    ))}
                </>
            )}
        </>
    )
}

export default FirstSelect