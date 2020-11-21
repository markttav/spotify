import React from 'react'
import styles from './style/login.module.css'
import Spotifyimg from '../images/spotify.jpg'
import { loginUrl } from '../spotify/spotify'

function Login() {
    return (
        <div className={styles.login}>
            <img
                src={Spotifyimg}
                alt=""
            />
            <a href={loginUrl}>ВОЙТИ В SPOTIFY</a>
        </div>
    )
}

export default Login
