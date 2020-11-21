import React from 'react'
import Player from '../components/player/Player'

function Playercontainer({spotify}) {
    return (
        <div>
        <Player spotify={spotify}/>            
        </div>
)
}

export default Playercontainer
