import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    return (
        <div>
            <h2> Mole Container </h2>
            <Mole />
        </div>
    )
}
export default MoleContainer