export default (state, action) => {
    switch(action.type){
        case "ADD_GAME_TO_BACKLOG":
            return{
                ...state,
                backlog: [action.payload, ...state.backlog]
            }
        case "REMOVE_GAME_FROM_BACKLOG":
            return{
                ...state,
                backlog: state.backlog.filter(game => game.id !== action.payload.id)
            }
        case "ADD_GAME_TO_PLAYED":
            return{
                ...state,
                played: [action.payload, ...state.played],
                backlog: state.backlog.filter(game => game.id !== action.payload.id)
            }
        case "REMOVE_GAME_FROM_PLAYED":
            return{
                ...state,
                played: state.played.filter(game => game.id !== action.payload.id)
            }
        default:
            return state;

    }

}