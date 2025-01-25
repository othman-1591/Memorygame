import { connect } from 'react-redux'
import { getPlayers } from '../actions'
import MenuFilter from '../components/history/MenuFilter'

const mapDispatchToProps = dispatch => ({
    getPlayers: () => dispatch(getPlayers())
})

const mapStateToProps = store => ({
    data: store.playerReducer
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuFilter)
