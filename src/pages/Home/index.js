import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { 
    Button, 
    Container
} from 'reactstrap';

import style from '../../assets/style/home.module.css'
const Home = () => {
    const [modal, setModal] = useState(false);
    const [ cardsCount, setCardsCount ] = useState(16)
    const toggle = () => setModal(!modal);
    const setSettings = () => {
        toggle();
    }
    

    return (
        <Container className={style.home}>
            <section className={style.content}>
                <h2>Play Match Memory Game</h2>
                <p>Click the button below to play the game.</p>
                <Button to="/game" tag={Link} className={style.btn}>Play Game</Button>
            </section>
            <section className={style.content}>
                <h2>Show History</h2>
                <p>Click the button below to display the historical records of Match Memory Game players.</p>
                <Button to="/history" tag={Link} className={style.btn}>Show History</Button>
            </section>
            
        </Container>
    )
}

export default Home