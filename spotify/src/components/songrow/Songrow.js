import React from 'react'
import styles from './style/songrow.module.css'


function Songrow({track}) {
    
    return (
        <div className={styles.songrow}>
            <img className={styles.songrow__albumImg} src={track.album.images[0].url} alt=''/>
            <div className={styles.songrow__info}>
                <h1>{track.name}</h1>
                 <p>
                 {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
                 </p>
            </div>
        </div>
    )
}

export default Songrow
