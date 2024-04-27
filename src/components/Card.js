import { useEffect, useState } from "react"
const Style = {
    cardDiv : {
        width: '100%',
        height: '140px',
        backgroundColor: '#C5D5EA',
        transform: 'rotateY(180deg)',
        transition :'transform 0.6s',
        transformStyle: 'preserve-3d',
        borderRadius: '12px'
        
    },
    cardDivWrong : {
        width: '100%',
        height: '140px',
        backgroundColor: '#ff5fab',
        transform: 'rotateY(180deg)',
        transition :'transform 0.6s',
        transformStyle: 'preserve-3d',
        borderRadius: '12px'
        
    },
    cardDivFlip : {
        width: '100%',
        height: '140px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6aa4f1',
        padding: '5px',
        transform: 'rotateY(0deg)',
        transition :'transform 0.6s',
        transformStyle: 'preserve-3d',
        fontWeight: 'bold',
        fontSize: '2rem',
        borderRadius: '12px'
    },
    cardDivFlipRemove : {
        width: '100%',
        height: '140px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#44f98f',
        padding: '5px',
        transform: 'rotateY(0deg)',
        transition :'transform 0.6s',
        transformStyle: 'preserve-3d',
        fontWeight: 'bold',
        fontSize: '2rem',
        borderRadius: '12px'
    },
    cardDivRemove : {
        width: '100%',
        height: '140px',
        display: 'none'
    },
    number: {
        opacity: '0'
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
                        setCardStyle(Style.cardDivFlipRemove)
                    }, 500
            );
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
                <span style={flipCard || removeCard  ? Style.numberFlip: Style.number }>{number.value}</span>
            </button>
        </div>
    )
}