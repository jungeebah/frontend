import React from 'react';
import HeaderButton from './HeaderButton'
import '../../styling/header.css'

function Header(props){
    const buttonList = props.button
    const button = buttonList.map((item,index)=>
        <HeaderButton 
            action={props.buttonClick}
            called = {props.apiCall}
            key = {index}
            text = {item}/>)
    return(
        <div>
            <div className="header">
            <div className='web-title'>Mero Geet</div>
                <div className='box'>
                    <div className='wave -one'></div>
                    <div className='wave -two'></div>
                    <div className='wave -three'></div>
                </div>
                <div className="header-right">
                    {button}
                </div>
            </div> 
        </div>
    )
}

export default Header;