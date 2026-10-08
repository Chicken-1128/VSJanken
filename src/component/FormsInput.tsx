import type { Dispatch, SetStateAction } from "react"

type Props ={
    playersName:string,
    setPlayersName:Dispatch<SetStateAction<string>>,
    placeholder:string
}

function FormsInput({playersName, setPlayersName, placeholder}: Props) {
    return (
        <>
            <input
                placeholder={placeholder}
                value={playersName}
                onChange={(e) => setPlayersName(e.target.value)}
            />
        </>
    )
}

export default FormsInput