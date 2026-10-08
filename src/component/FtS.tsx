import type { Props } from "../App"


function FtS({ gameState, setGameState }: Props) {
    return (
        <>
            {gameState === "FtS" && (
                <>
                    <h2>次の人にPCを渡してください</h2>
                    <button onClick={() => setGameState("secondSelect")}>受けとった</button>
                </>
            )}
        </>
    )
}

export default FtS