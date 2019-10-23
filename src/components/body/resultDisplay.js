import React from 'react'
import { Card } from 'antd';
import '../../styling/card.css'
import album from '../image/album.jpg';
import artist from '../image/artist.jpg'
import song from '../image/song.jpg'

function Cards(props){
    let image = ""
    if(props.apiCall==="Artist"){
       image= artist
    }else if (props.apiCall==="Album"){
        image=album
    }else{
        image=song
    }
    const { Meta } = Card;
    return(
        <div onClick={props.onClick}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img name = {props.information.name} alt={props.information.name} src={(props.information.image==="")?image:props.information.image} />}
                
            >
                <Meta  name={props.information.name} title={props.information.name} />
            </Card>
        </div>
    )
}

export default Cards