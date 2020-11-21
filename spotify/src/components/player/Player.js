import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import styles from './style/player.module.css'
import Bodycontainer from '../../containers/Bodycontainer'
import Footercontainer from '../../containers/Footercontainer'


function Player({spotify}) {
    return (
        <div className={styles.player}>
         <section className={styles.player__body}>
         <Sidebar />
         <Bodycontainer spotify={spotify}/>
         </section>
         <Footercontainer />
        </div>
    )
}

export default Player
