import React from 'react'
import styles from './style/header.module.css'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


function Header({name, src, alt}) {

    return (
        <div className={styles.header}>
        <div className={styles.header__left}>
        <SearchIcon />
        <input 
        placeholder='Укажи исполнителя, трек или подкаст'
        type='text'/>            
        </div>

        <div className={styles.header__right}>
            <Avatar src={src} alt={alt} className={styles.header__avatar}/>
            <h4>{name}</h4>
        </div>            
        </div>
    )
}

export default Header
