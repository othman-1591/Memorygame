import {CARDS} from '../Cardsimage/cards'

const sortCards = CARDS.sort(() => Math.random() - 0.5).slice(0,16)

const initialState = sortCards.concat(sortCards).sort(() => Math.random() - 0.5)
function sliceWithPairs(arr, limit) {
        
    if(arr.length !== limit)
    {
        var length = arr.length;
       // console.log("length: ", length);
        for(let i = 0; i < (length - limit) / 2; i++) {
            console.log("intteration : ", i+1);
            const random = Math.floor(Math.random() * (arr.length - 1))
            //console.log(random, arr[random].key)
            arr = arr.filter( e => e.key !== arr[random].key);
           
          }

          for(let i = 0; i< limit; i++ )
          {
            console.log(arr[i].img)
          }
    }
   
  return arr;
}
const cardReducer = (state = initialState, action) => {
    let newState = [...state]
    let openCards = []

    switch (action.type) {
        case 'OPEN_CARD':
            newState.forEach((card) => {
                if ((card.open === true) && (card.match === false)) {
                    openCards.push(card) 
                } 
            })

            if (openCards.length < 2) {
                newState = [...state]
                newState[action.index] = {...newState[action.index], open: true}
            }
            
            return newState

        case 'MATCH_CARD':
            newState = [...state]

            newState.forEach((card) => {
                if ((card.open === true) && (card.match === false)) {
                    openCards.push(card) 
                } 
            })

            if (openCards.length < 2) {
                return newState
            }

            if (openCards[0]["key"] === openCards[1]["key"]) {
                return state.map(card =>
                    card.key === action.key ? { ...card, match: true } : card
                );
            }

            return state.map(card =>
                (card.open === true && card.match === false) ? { ...card, open: false } : card
            );
        case 'BEFORE_START':
            return newState.map(card =>
                {
                    return {...card, open: true, match: false}
                }
            ).sort(() => Math.random() - 0.5)
        case 'START_GAME':
            return newState.map(card =>
                {
                    return {...card, open: false, match: false}
                }
            )
        case 'REDUCE_CARDS':
            return sliceWithPairs(newState, action.count)

        default:
            return state
    }

}

export default cardReducer