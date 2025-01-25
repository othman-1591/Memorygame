import { connect } from 'react-redux'
import { openCard, matchCard, startGame, saveRecord, getPlayers, removeRecord, beforeStart, ReduceCards } from '../actions'
import MemoryGame from '../components/game/MemoryGame'

const mapDispatchToProps = dispatch => ({
    openCard: (key, index) => dispatch(openCard(key, index)),
    matchCard: (key) => dispatch(matchCard(key)),
    beforeStart: () => dispatch(beforeStart()),
    startGame: () => dispatch(startGame()),
    saveRecord: (score, name, total, flipCount) => dispatch(saveRecord(score, name, total, flipCount)),
    getPlayers: () => dispatch(getPlayers()),
    removeRecord: (key) => dispatch(removeRecord(key)),
    ReduceCards: (count) => dispatch(ReduceCards(count))
})

const mapStateToProps = store => ({
    cards: store.cardReducer,
    players: store.playerReducer
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemoryGame)
