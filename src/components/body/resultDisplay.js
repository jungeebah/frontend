import React from 'react'
import '../../styling/card.css'
import album from '../image/album.jpg';
import artist from '../image/artist.jpg'
import song from '../image/song.jpg'

function Cards(props){
    let image = ""
    if(props.apiCall==="artist"){
       image= artist
    }else if (props.apiCall==="album"){
        image=album
    }else{
        image=song
    }
    return(
        <div className="cards-list">
        <div className="card 1">
            <div className="card_image"> 
                <img alt={props.information.name} src= {(props.information.image==="")?image:props.information.image} onClick={props.onClick} name={props.information.name}/> 
            </div>
            <div className="card_title title-white">
                <p>{props.information.name}</p>
            </div>
        </div>
    </div>
    )
}

export default Cards