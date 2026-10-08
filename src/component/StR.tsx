import type { Props } from "../App"

function StR({ gameState, setGameState }: Props) {
    return (
        <>
            {gameState === "StR" && (
                <>
                    <h2>結果を表示します</h2>
                    <button onClick={() => setGameState("result")}>結果</button>
                </>
            )}
        </>
    )
}

export default StR