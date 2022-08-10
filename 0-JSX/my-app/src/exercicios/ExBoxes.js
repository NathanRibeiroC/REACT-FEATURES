import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function ExBoxes() {
    const [squares, setSquares] = React.useState(boxes)
 
    // const styles={
    //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    // }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    // const squareElements = squares.map(square => (
    //     <Box 
    //         key={square.id} 
    //         on={square.on} 
    //     />
    // ))

    // function toggle(id) {
    //     setSquares(prevSquares => {
    //         const newSquares = []
    //         for(let i = 0; i < prevSquares.length; i++) {
    //             const currentSquare = prevSquares[i]
    //             if(currentSquare.id === id) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 newSquares.push(updatedSquare)
    //             } else {
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })
    // }
    // function toggle(id) {
    //     setSquares(prevSquares => {
    //         const newSquares = []
    //         for(let i = 0; i < prevSquares.length; i++) {
    //             const currentSquare = prevSquares[i]
    //             if(currentSquare.id === id) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 newSquares.push(updatedSquare)
    //             } else {
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })
    // }
    function toggle(id){
        setSquares(prevSquares => 
            prevSquares.map((square)=>{
                return square.id === id ? {...square, on: !square.on} : square
            })
        )
    }
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    return (
        <main>
            {squareElements}
        </main>
    )
}