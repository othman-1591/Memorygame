import {
    getFromLocalStorage,
    
    addItemToLocalStorage,
    removeItemFromLocalStorage
} from '../utils/localStorageUtils'; 


export const openCard = (key, index) => ({
    type: "OPEN_CARD",
    key,
    index,
});

export const matchCard = (key) => ({
    type: "MATCH_CARD",
    key,
});

export const beforeStart = () => ({
    type: "BEFORE_START",
});

export const startGame = () => ({
    type: "START_GAME",
});

export const ReduceCards = (count) => ({
    type: "REDUCE_CARDS",
    count
});

export const getPlayers = () => (dispatch) => {
    const players = getFromLocalStorage('match-memory-game') || [];
    dispatch({
        type: "GET_PLAYERS",
        payload: players,
    });
};


export const saveRecord = (score, name, total, flipCount) => (dispatch) => {
    console.log("flipCount in saveRecord:", flipCount);
    if (flipCount === undefined) {
        console.error("flipCount is undefined!"); 
    }
    addItemToLocalStorage('match-memory-game', { score, name, total, flipCount });
};

export const removeRecord = (key) => (dispatch) => {
    removeItemFromLocalStorage('match-memory-game', key);
};
