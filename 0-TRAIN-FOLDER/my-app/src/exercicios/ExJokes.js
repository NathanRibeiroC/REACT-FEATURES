import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setisShown] = React.useState(false)

    function toggle(){
        setisShown(prevState => !prevState)
        console.log(isShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{!isShown ? "Show Punchline" : "Hide Punchline"}</button>
            <hr />
        </div>
    )
}