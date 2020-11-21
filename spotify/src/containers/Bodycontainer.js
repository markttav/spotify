import React from 'react'
import Body from '../components/body/Body'
import { UseStore } from '../StoreProvider'

function Bodycontainer() {

    const [{yourplaylist},dispatch] = UseStore()

    console.log(yourplaylist)

    return  yourplaylist ? 
            <Body 
            description={yourplaylist?.description}
            img={yourplaylist?.images[0]?.url}
            title={yourplaylist?.name}
            followers={yourplaylist?.followers?.total}
            songs={yourplaylist?.tracks.items}
            />
            : <div>loading</div>
        
    
}

export default Bodycontainer
