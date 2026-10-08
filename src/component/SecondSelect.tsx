import type { Dispatch, SetStateAction } from "react"
import type { states, hands } from "../App"

type Props = {
    gameState: states,
    secondPlayersName: string,
    hands: hands[],
    setSecondPlayer: Dispatch<SetStateAction<hands | null>>,
    setGameState: Dispatch<SetStateAction<states>>
}

function SecondSelect({ gameState, secondPlayersName, hands, setSecondPlayer, setGameState }: Props) {
    const handleSecondSelect = (secondPlayHand: hands) => {
        if (!secondPlayHand) {
            return;
        }
        setSecondPlayer(secondPlayHand)
        setGameState("StR")
    }

    return (
        <>
            {gameState === "secondSelect" && (
                <>
                    <h2>{secondPlayersName}さん。出す手を決めてください</h2>
                    
                    {hands.map(hand => (
                        <button onClick={() => handleSecondSelect(hand)}>{hand}</button>
                    ))}
                </>
            )}
        </>
    )
}

export default SecondSelect