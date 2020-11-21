import React,{useEffect} from 'react'
import { getTokenFromResponse } from '../components/spotify/spotify'
import Logincontainer from './Logincontainer'
import Playercontainer from './Playercontainer'
import {UseStore} from '../StoreProvider'
import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi()


function Index() {

    const [{token}, dispatch] = UseStore()

    useEffect(()=>{
        const hash = getTokenFromResponse()
        
        window.location.hash = ''
        const _token = hash.access_token

        if(_token){
        dispatch({
            type: 'SET-TOKEN',
            token: _token
        })
            
        spotifyApi.setAccessToken(_token)            
        spotifyApi.getMe().then(user=>{
            dispatch({
                type: 'SET-USER',
                user
            })
        })
        spotifyApi.getUserPlaylists().then(playlists=>{
            
            dispatch({
                type: 'SET-PLAYLISTS',
                playlists
            })
        })


        // Built in Playlist
        spotifyApi.getPlaylist('37i9dQZF1DX8f6VxHEcGCN').then(response=>{

            dispatch({
              type: "SET-YOUR-PLAYLIST",
              yourplaylist: response
            })
        })
                
        }
    },[token,dispatch])

    return (
        <div>
        { token ? 
        <Playercontainer spotify={spotifyApi}/> :
        <Logincontainer />
        }            
        </div>
    ) 
}

export default Index