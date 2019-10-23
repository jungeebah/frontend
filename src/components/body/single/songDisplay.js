import React from 'react'
import song from '../../image/song.jpg'

export default function SongDisplay(props){
    return(
        <div>
            <img alt={props.data.name} src={song}/>
        </div>
    )
}