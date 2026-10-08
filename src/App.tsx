import { useState, type Dispatch, type SetStateAction } from 'react'
import './App.css'
import Home from './component/Home';
import FirstSelect from './component/FirstSelect';
import FtS from "./component/FtS"
import SecondSelect from './component/SecondSelect';
import StR from './component/StR';
import Result from './component/Result';

export type states = "home" | "firstSelect" | "FtS" | "secondSelect" | "StR" | "result";

export type Props = {
  gameState: states,
  setGameState: Dispatch<SetStateAction<states>>
}

export type hands = "グー" | "チョキ" | "パー";

export type result = "draw" | "firstPlayerWin" | "secondPlayerWin"

function App() {
  const [firstPlayersName, setFirstPlayersName] = useState<string>("");
  const [secondPlayersName, setSecondPlayersName] = useState<string>("");
  const [firstPlayer, setFirstPlayer] = useState<hands | null>(null);
  const [secondPlayer, setSecondPlayer] = useState<hands | null>(null);
  const [gameState, setGameState] = useState<states>("home");
  const [result, setResult] = useState<result>("draw")

  const hands: hands[] = ["グー", "チョキ", "パー"];

  const reset = (result: result) => {
    if (result === "draw") {
      setGameState("firstSelect");
    } else {
      setGameState("home");
      setFirstPlayersName("");
      setSecondPlayersName("");
    }
  }

  return (
    <>
      <Home
        gameState={gameState}
        firstPlayersName={firstPlayersName}
        secondPlayersName={secondPlayersName}
        setFirstPlayersName={setFirstPlayersName}
        setSecondPlayersName={setSecondPlayersName}
        setGameState={setGameState}
      />

      <FirstSelect
        gameState={gameState}
        firstPlayersName={firstPlayersName}
        hands={hands}
        setFirstPlayer={setFirstPlayer}
        setGameState={setGameState}
      />

      <FtS
        gameState={gameState}
        setGameState={setGameState}
      />

      <SecondSelect
        gameState={gameState}
        secondPlayersName={secondPlayersName}
        hands={hands}
        setSecondPlayer={setSecondPlayer}
        setGameState={setGameState}
      />

      <StR
        gameState={gameState}
        setGameState={setGameState}
      />

      <Result
        gameState={gameState}
        setGameState={setGameState}
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
        firstPlayersName={firstPlayersName}
        secondPlayersName={secondPlayersName}
        result={result}
        setResult={setResult}
        reset={reset}
      />
    </>
  )
}

export default App
