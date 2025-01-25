import React, { useState, useEffect, useCallback, useMemo } from 'react';
import GameCard from './GameCard';
import Timer from '../main/Timer';
import { Container, Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import style from '../../assets/style/game.module.css';

const MemoryGame = (props) => {
    const { 
        cards, 
        players, 
        openCard, 
        matchCard, 
        beforeStart, 
        startGame,
        username, 
        saveRecord, 
        getPlayers,
        cardsCount,
        ReduceCards
    } = props;

    const [cardShowed, setCardShowed] = useState(false);
    const [start, setStart] = useState(false);
    const [end, setEnd] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [current, setCurrent] = useState({ score: "", name: "", total: "", flipCount: "" });
    const [flipCount, setFlipCount] = useState(0); 
    const [openCards, setOpenCards] = useState([]);
 
    const prepareGame = useCallback(() => {
        beforeStart();
        setCardShowed(true);
        setTimeout(() => {
            setStart(true);
            startGame();
            setEnd(false);
        });
        ReduceCards(cardsCount)
    }, [beforeStart, startGame, cardsCount, ReduceCards]);

    
    const verifyCards = useCallback(() => {
        const matchCards = cards.filter(card => card.open && card.match);

        if (cards.length === matchCards.length) {
            setEnd(true);
        }
    }, [cards]);

    const submitScore = useCallback(() => {
        console.log("Submitting score with flipCount:", current.flipCount); 
        console.log("Submitting score with score:", current.flipCount); 
       
        saveRecord(current.score, current.name, current.total, current.flipCount); 
        setIsSubmit(false);
    }, [current, saveRecord]);

    useEffect(() => {
        if (!cardShowed) {
            prepareGame();
        }

        if (start && players.length === 0) {
            getPlayers();
        }

        if (start) {
            verifyCards();

            if (isSubmit) {
                submitScore();
            }
        }
    }, [
        players,
        cardShowed,
        prepareGame, 
        start,
        verifyCards,
        isSubmit,
        getPlayers,
        submitScore
    ]);

  
    const flipCard = (key, index) => {
        if (openCards.length < 2) {
            openCard(key, index);
            setOpenCards(prevOpenCards => [...prevOpenCards, { key, index }]);
        }

        if (openCards.length === 1) {
          
            setFlipCount(prevCount => prevCount + 1);

            setTimeout(() => {
                matchCard(key);
                setOpenCards([]); 
            }, 1000);
        }

        console.log(key, index, openCards)

    };

    
    const saveScore = (score) => {
        const timeArray = score.split(":");
        const total = (parseInt(timeArray[0]) * 3600) + 
                      (parseInt(timeArray[1]) * 60) + 
                      parseInt(timeArray[2]);

        console.log("flipCount:", flipCount); 

 
        setCurrent({ 
            score: score, 
            name: username, 
            total: total,
            flipCount: flipCount 
        });
      
        setIsSubmit(true);
    };

    
    return (
        <Container fluid="sm">
            <div className={style.timer}>
                {!start && <span>Score: 00:00:00</span>}
                {start && <span>Score: <Timer stop={end} actionOnStop={saveScore} /></span>}
                <span>Username: {username}</span>
                <span>Flips: {flipCount}</span> {}
            </div>
            {end && <Alert color="success" className={style.alerttext}>
                Congratulations! You Finished the game!
            </Alert>}
            <Container fluid="sm" className={style.deck}>
                {cards.map((item, index) => (
                    <GameCard 
                        key={index} 
                        content={item} 
                        openCard={() => flipCard(item.key, index)} 
                    />
                ))}
            </Container>
        </Container>
    );
};

const cardsShape = {
    open: PropTypes.bool,
    img: PropTypes.string,
    cardsCount: PropTypes.number,
    match: PropTypes.bool,
    key: PropTypes.number
};

MemoryGame.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape(cardsShape).isRequired
    ).isRequired,
    openCard: PropTypes.func.isRequired,
    matchCard: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    saveRecord: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    cardsCount: PropTypes.number,
    ReduceCards: PropTypes.func.isRequired,
};

export default MemoryGame;
