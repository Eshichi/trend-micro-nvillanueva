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
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
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
    const [randomNumbers, setRandomNumbers] = useState([])
    const [firstNumber, setFirstNumber] = useState(null)
    const [secondNumber, setSecondNumber] = useState(null)
    const [totalMatched, setTotalMatched] = useState(0)
    const [isClickDisabled, setIsClickDisabled] = useState(false)

    const ShuffleNumbers=() =>{
        const placeHolderArray = [...startingNumbers, ...startingNumbers].sort(()=> Math.random() - 0.5).map((number => ({...number , id: Math.random()} )))
        setRandomNumbers(placeHolderArray)
        setTotalMatched(0)
    }

    const ClickedCard = (number) => {
        if(!isClickDisabled){
            firstNumber ? setSecondNumber(number) :  setFirstNumber(number)
        }
    }
    useEffect(()=>{
        ShuffleNumbers()
        setTotalMatched(0)
        resetChoices()
    },[])

    useEffect(()=>{
        if(firstNumber && secondNumber){
            setIsClickDisabled(true)
            if(firstNumber.value === secondNumber.value){
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

        console.log(totalMatched , "totalMatched" , startingNumbers.length)
    },[firstNumber, secondNumber])

    const resetChoices = () => {
        setFirstNumber(null)
        setSecondNumber(null)
        setIsClickDisabled(false)
    }

    return (
        <div style={Style.container}>
            <div style={Style.headerTagDiv} >
                <h1>Memory Game</h1>
            </div>
            {/* <button onClick={RumbleNumbers}>Start</button> */}
            {
                totalMatched < startingNumbers.length ? 
                <>
                        <button onClick={ShuffleNumbers}>Restart</button>
                        <div style={Style.cardContainer}>
                            
                            {
                                randomNumbers.map((number , index) => {
                                    number === secondNumber && console.log(number === secondNumber , "map")
                                    return(
                                        <Card key={index} number={number} flipCard={number === firstNumber || number === secondNumber} removeCard={number.matched} ClickedCard={ClickedCard}/>
                                    )
                                })
                            }
                        </div>
                </> : <>
                <button onClick={ShuffleNumbers}>Play Again!</button>
                </>
            }
            
            <p>Start editing to see some magic happen :)</p>
        </div>
    );
}
