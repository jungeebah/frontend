import React from 'react'
import '../../../styling/artistDisplay.css'
import Nav from '../../nav'

export default function ArtistDislpay(props){
    return(
        <div className="artistDisplay">
            
                <div className="row">
                    <Nav></Nav>
                    <div id="container">
                <div id="pic">
                <img alt={props.data.name} src={props.data.image}/>
            </div>
            <div id="text">
                <h1>{props.data.name}</h1>
                <p>{props.data.bio}</p>
                <div className="detail">View more</div>
            </div>
        </div>
                </div>
        </div>
    )
}