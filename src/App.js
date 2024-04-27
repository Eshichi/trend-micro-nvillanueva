import React, { useState, useEffect } from 'react';
import './style.css';
import Card from './components/Card';

const Style = {
    container: {
        padding: '20px',
    },
    headerTagDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardContainer2by2: {
        display: 'grid',
        gridTemplateColumns: `repeat(2, 1fr) `,
        gridGap: '10px'
    },
    cardContainer4by4: {
        display: 'grid',
        gridTemplateColumns: `repeat(4, 1fr) `,
        gridGap: '10px'
    },
    cardContainer6by6: {
        display: 'grid',
        gridTemplateColumns: `repeat(6, 1fr) `,
        gridGap: '10px'
    }
}


export default function App() {
    const startingNumbers = [
        {
            value:  1,
            matched: false
        },
        {
            value:  2,
            matched: false
        },
        {
            value:  3,
            matched: false
        },
        {
            value:  4,
            matched: false
        },
        {
            value:  5,
            matched: false
        },
        {
            value:  6,
            matched: false
        },
        {
            value:  7,
            matched: false
        },
        {
            value:  8,
            matched: false
        },
        {
            value:  9,
            matched: false
        },
        {
            value:  10,
            matched: false
        },
        {
            value:  11,
            matched: false
        },
        {
            value:  12,
            matched: false
        },
        {
            value:  13,
            matched: false
        },
        {
            value:  14,
            matched: false
        },
        {
            value:  15,
            matched: false
        },
        {
            value:  16,
            matched: false
        },
        {
            value:  17,
            matched: false
        },
        {
            value:  18,
            matched: false
        }
    ]
    const [gameMode, setGameMode] = useState(0)
    const [gameView, setGameView] = useState(Style.cardContainer2by2)
    const [isGameGoing, setIsGameGoing] = useState(true)
    const [randomNumbers, setRandomNumbers] = useState([])
    const [firstNumber, setFirstNumber] = useState(null)
    const [secondNumber, setSecondNumber] = useState(null)
    const [totalMatched, setTotalMatched] = useState(0)
    const [isClickDisabled, setIsClickDisabled] = useState(false)
    
    const ShuffleNumbers=() =>{
        const sliceArray = startingNumbers.slice(0,gameMode)
        const placeHolderArray = [...sliceArray, ...sliceArray].sort(()=> Math.random() - 0.5).map((number => ({...number , id: Math.random()} )))
        setRandomNumbers(placeHolderArray)
        setTotalMatched(0)
        setIsGameGoing(true)
    }

    const ClickedCard = (number) => {
        if(!isClickDisabled){
            firstNumber ? setSecondNumber(number) :  setFirstNumber(number)
        }
    }

    useEffect(()=>{
        ShuffleNumbers()
        switch (gameMode) {
            case 2:
                setGameView(Style.cardContainer2by2)
                break;
            case 8:
                setGameView(Style.cardContainer4by4)
                break;
            case 18:
                setGameView(Style.cardContainer6by6)
                break;
        
            default:
                break;
        }
    },[gameMode])


    useEffect(()=>{
        if(firstNumber && secondNumber){
            setIsClickDisabled(true)
            if(firstNumber.value === secondNumber.value){
                //removes from array
                // setRandomNumbers(prev => {
                //     return prev.filter(number => number.value != firstNumber.value || number.value != secondNumber.value).map(number => {
                //             console.log(number ,"number")
                //             setTotalMatched(totalMatched+1)
                //             return number
                //     })
                // })
                setRandomNumbers(prev => {
                    return prev.map(number => {
                        if(number.value === firstNumber.value) {
                            setTotalMatched(totalMatched+1)
                            return { ...number, matched:true}
                        }else{
                            return number
                        }
                    })
                })
                setTimeout(() => 
                    {
                        resetChoices();
                    }, 1000
                );
            }else {
                setTimeout(() => 
                    {
                        resetChoices();
                    }, 1000
                );
            }
        }
        if(totalMatched == gameMode){
            setIsGameGoing(false)
        }
        
    },[firstNumber, secondNumber])


    const resetChoices = () => {
        setFirstNumber(null)
        setSecondNumber(null)
        setIsClickDisabled(false)
    }
    return (
        <div style={Style.container}>
            <div>
                <div style={Style.headerTagDiv} >
                    <h1>Memory Game</h1>
                    
                </div>
               {
                gameMode == 0  &&
                 <div>
                    <button onClick={() => setGameMode(2)}>2 x 2</button>
                    <button onClick={() => setGameMode(8)}>4 x 4</button>
                    <button onClick={() => setGameMode(18)}>6 x 6</button>
                </div>
               }
            </div>

            {
                gameMode > 0 && isGameGoing &&
                <>
                        <button onClick={ShuffleNumbers}>Restart</button>
                        <div style={gameView}>
                            {
                                randomNumbers.map((number , index) => {
                                    return(
                                        <Card key={index} number={number} flipCard={number === firstNumber || number === secondNumber} removeCard={number.matched} ClickedCard={ClickedCard}/>
                                    )
                                })
                            }
                        </div> 
                </> 
            }
            {
                gameMode > 0 && !isGameGoing &&
                <>
                    <button onClick={ShuffleNumbers}>Play Again!</button>
                </>
            }
            
            <p>Start editing to see some magic happen :)</p>
        </div>
    );
}
