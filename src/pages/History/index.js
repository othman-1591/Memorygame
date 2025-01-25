import React from 'react'
import HistoryGame from '../../containers/HistoryGame'
import { Container } from 'reactstrap'

const History = () => {
    return (
        <Container id="History">
            <h2>History</h2>
            <p>This page shows the highlights of Match Memory Game players</p>
            <HistoryGame/>
        </Container>
    )
}

export default History