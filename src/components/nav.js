import React from 'react'
import './../styling/sidenav.css'

export default function Nav(props){
    return (
        <div className="side-panel a">
            <ul>
                 {/* eslint-disable-next-line*/}
                <li><a><span className="entypo-plus-circled"></span><span className="menu-item">Social Media</span></a>
                <ul>
                     {/* eslint-disable-next-line*/}
                    <li><a name="facebook" className="brandico-facebook-rect">Facebook</a></li>
                     {/* eslint-disable-next-line*/}
                    <li><a name= "instagram" className="brandico-instagram">Instagram</a></li>
                     {/* eslint-disable-next-line*/}
                    <li><a name="twitter" className="brandico-twitter-bird">Twitter</a></li>
                </ul>
                </li>
                 {/* eslint-disable-next-line*/}
                <li><a><span name= "youtube" className="brandico-facebook-rect"></span><span className="menu-item">Youtube</span></a></li>
                 {/* eslint-disable-next-line*/}
                <li><a ><span title="album" className="entypo-heart" onClick={props.click}></span><span className="menu-item">Albums</span></a></li>
                 {/* eslint-disable-next-line*/}
                <li><a><span name="wikipedia" className="entypo-doc-text-inv"></span><span className="menu-item">Wikipedia</span></a></li>
                 {/* eslint-disable-next-line*/}
                <li><a><span name="spotify" className="entypo-layout"></span><span className="menu-item">Spotify</span></a></li>
                 {/* eslint-disable-next-line*/}
                <li><a><span name="itunes" className="entypo-rocket"></span><span className="menu-item">Itunes</span></a></li>
                 {/* eslint-disable-next-line*/}
                <li><a><span title="artist" className="entypo-cog" onClick={props.click}></span><span className="menu-item">Artist</span></a></li>
            </ul>
        </div>
    )
}