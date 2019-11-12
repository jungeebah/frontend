import React from 'react'
import '../../../styling/artistDisplay.css'
import album from '../../image/album.jpg';
import artist from '../../image/artist.jpg'
import song from '../../image/song.jpg'
import Nav from '../../nav'
export default function ArtistDislpay(props){
    let image = ""
    if(props.apiCall==="artist"){
       image= artist
    }else if (props.apiCall==="album"){
        image=album
    }else{
        image=song
    }
    const filtered_bio = props.data.bio.substring(0, props.data.bio.indexOf('<a'));
    const more_bio = filtered_bio === ""?"":props.data.bio.substring(props.data.bio.indexOf('<a')).match(/.*href="(.*)">.*/)[1]
    const learn_more = more_bio===""?"":<a href={more_bio}>Learn more</a>
    return(
        <div className="artistDisplay"> 
            <Nav/>
            <section>
                <h1>{props.data.name}</h1>
                <div className="content">
                    <p>{filtered_bio}</p>{learn_more}
                </div>
                <div className="img">
                    <img alt={props.data.name}src={props.data.image===""?image:props.data.image}/>
                </div>
            </section>
        </div>
    )
}