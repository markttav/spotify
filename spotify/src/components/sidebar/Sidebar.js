import React from 'react'
import styles from './style/Sidebar.module.css'
import SpotifyLogo from '../images/spotify.jpg'
import SidebarOptions from '../sidebaroptions/SidebarOptions'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { UseStore } from '../../StoreProvider'

function Sidebar() {

    const [{playlists}, dispatch] = UseStore()

    return (
        <div className={styles.sidebar}>
            <img src={SpotifyLogo} alt='' className={styles.sidebar__logo}/>
        
        <SidebarOptions Icon={HomeIcon} option='Главная' className={styles.sidebar__options}/>
        <SidebarOptions Icon={SearchIcon} option='Поиск'/>
        <SidebarOptions Icon={LibraryMusicIcon} option='Моя медиатека'/>
        
        <br />
        <strong className={styles.sidebar__title}>Плейлисты</strong>


        <hr />
        {playlists?.items?.map(playlist => <SidebarOptions option={playlist.name}/>)}
        
        </div>
    )
}

export default Sidebar 
