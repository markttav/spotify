import React from 'react'
import Header from '../components/header/Header'
import { UseStore } from '../StoreProvider'

function Headercontainer() {

    const [{user}, dispatch] = UseStore()

    return (
        <div>
            <Header name={user?.display_name}
            src={user?.images[0]?.url} alt={user?.display_name}/>
        </div>
    )
}

export default Headercontainer
