import { useEffect, useState } from "react"
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
    cardDivRemove : {
        width: '100%',
        height: '140px',
        display: 'none'
    },
    number: {
        opacity: '1'
    },
    numberFlip: {
        transition: 'opacity 1s'  ,
        opacity: '1'
    }
}

export default function Card ({number , flipCard, removeCard , ClickedCard }) {

    const [cardStyle , setCardStyle] = useState(Style.cardDiv)
    
    useEffect(()=>{
        if(flipCard){
            setCardStyle(Style.cardDivFlip)
        }else{
            setCardStyle(Style.cardDiv)
        }

        if(removeCard){
            setCardStyle(Style.cardDivFlip)
            setTimeout(() => 
                    {
                        setCardStyle(Style.cardDivRemove)
                    }, 1000
                );
            
        }
    },[removeCard,  flipCard])

    const ClickedHandler = () => {
        ClickedCard(number)
    }
    return (
        <div>
            <button style={ cardStyle } onClick={ClickedHandler}>
                <span style={flipCard ? Style.numberFlip: Style.number }>{number.value}</span>
            </button>
        </div>
    )
}