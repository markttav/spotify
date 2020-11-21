import React from 'react'
import styles from './style/sidebaroptions.module.css'

function SidebarOptions({option, Icon}) {
    return (
        <div className={styles.sidebaroptions}>
            {Icon && <Icon style={{width: '50px', padding: '0 10px' }} />}
            {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        </div>
    )
}

export default SidebarOptions
