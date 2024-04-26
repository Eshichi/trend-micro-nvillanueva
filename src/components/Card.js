import { useState } from "react"
const Style = {
    cardDiv : {
        width: '100%',
        height: '140px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C5D5EA',
        padding: '5px'
    },
    cardDivFlip : {
        width: '100%',
        height: '140px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C5D5EA',
        padding: '5px',
        transform: 'rotateY(180deg)',
        transition :'transform 0.6s'
    }
}

export default function Card () {
    const [flipCard , setFlipCard] = useState(true)
    return (
        <div style={flipCard ? Style.cardDiv : Style.cardDivFlip} onClick={() => setFlipCard(!flipCard)}>
            <span>6</span>
        </div>
    )
}