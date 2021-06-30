import React from 'react'
import Note from './Note';

const Notelist = ({valueofdata}) => {
    return (
        <div className="NoteListing">
            Note_list
            {valueofdata?(valueofdata.map((detail)=>{
                return <Note noteAfterMap={detail} key={detail.id}/>
                })
            )
            :('Nothing is found')}
        </div>
    )
}

export default Notelist
