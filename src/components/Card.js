import { useState } from "react"
const Style = {
    cardDiv : {
        width: '100%',
        height: '140px',
        backgroundColor: '#C5D5EA',
        transform: 'rotateY(180deg)',
        transition :'transform 0.6s',
        transformStyle: 'preserve-3d'
    },
    cardDivFlip : {
        width: '100%',
        height: '140px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C5D5EA',
        padding: '5px',
        transform: 'rotateY(0deg)',
        transition :'transform 0.6s',
        transformStyle: 'preserve-3d',
        fontWeight: 'bold',
        fontSize: '2rem'
    },
    number: {
        opacity: '0'
    },
    numberFlip: {
        transition: 'opacity 1s'  ,
        opacity: '1'
    }
}

export default function Card ({number , flipCard, matched , ClickedCard}) {

    // const [flipCard , setFlipCard] = useState(false)
    
    const ClickedHandler = () => {
        // console.log(turnCounter , "turnCounter")
        ClickedCard(number)
        // console.log(flipCard , "false" )
        // flipCard && console.log(flipCard , "flipCard" , number)
        
    }
    return (
        <div>
            <button style={flipCard ? Style.cardDivFlip : Style.cardDiv } onClick={ClickedHandler}>
                <span style={flipCard ? Style.numberFlip: Style.number }>{number.value}</span>
            </button>
        </div>
    )
}