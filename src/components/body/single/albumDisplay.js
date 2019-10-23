import React from 'react'

export default function AlbumDisplay(props){
    return(
        <div>
            <img alt={props.data.name} src={props.data.image}/>
        </div>
    )
}