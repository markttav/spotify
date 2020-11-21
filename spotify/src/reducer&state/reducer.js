////////////////////////////////
// ACTION TYPES
const SET_USER = 'SET-USER'
const SET_TOKEN = 'SET-TOKEN'
const SET_PLAYLISTS = 'SET-PLAYLISTS'
const SET_YOUR_PLAYLIST = 'SET-YOUR-PLAYLIST'

export const reducer = (state,action) => {

    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_TOKEN:
            return{
                ...state,
                token: action.token 
            }
        case SET_PLAYLISTS:
            return{
                ...state,
                playlists: action.playlists
            }
        case SET_YOUR_PLAYLIST:
            return{
                ...state,
                yourplaylist: action.yourplaylist
            }



        default:
            return state
    }


}
