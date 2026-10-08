import type { Dispatch, SetStateAction } from "react"
import type { states } from "../App"
import FormsInput from "./FormsInput"

type Props = {
    gameState: states
    firstPlayersName: string,
    secondPlayersName: string,
    setFirstPlayersName: Dispatch<SetStateAction<string>>
    setSecondPlayersName: Dispatch<SetStateAction<string>>
    setGameState: Dispatch<SetStateAction<states>>
}

function Home({ gameState, firstPlayersName, secondPlayersName, setFirstPlayersName, setSecondPlayersName, setGameState }: Props) {
    return (
        <>
            {gameState === "home" && (
                <>
                    <h2>名前を入力してください</h2>

                    <FormsInput 
                        playersName={firstPlayersName}
                        setPlayersName={setFirstPlayersName}
                        placeholder="player1の名前を入力してください"
                    />

                    <FormsInput 
                        playersName={secondPlayersName}
                        setPlayersName={setSecondPlayersName}
                        placeholder="player2の名前を入力してください"
                    />

                    <button onClick={() => setGameState("firstSelect")}>じゃんけんスタート</button>
                </>
            )}
        </>
    )
}

export default Home