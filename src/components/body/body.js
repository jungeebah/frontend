import React from 'react'
import Search from './search/search'
import Cards from './resultDisplay'
import './../../styling/body.css'
import ArtistDisplay from './single/artistDisplay'
import AlbumDisplay from './single/albumDisplay'
import SongDisplay from './single/songDisplay'

export default class Body extends React.Component{
    constructor(){
        super()
        this.state={
            displaySingle: false,
            singleInfo:{}
        }
        this.onClick = this.onClick.bind(this)
        this.goBack = this.goBack.bind(this)
    }
    goBack(){
        this.setState({
            displaySingle: false
        })
    }
    onClick(event){
        let name = ""
        event.target.tagName ==="IMG"?
        name= event.target.name:
        name= event.target.innerText
        const info = this.props.information.results.filter(item=>item.name===name)
        this.setState({
            singleInfo: info[0],
            displaySingle: true
        })

    }
    render(){
        const cards = 
            (this.props.information.results !== undefined && this.props.total > 0) && 
            this.props.information.results.map(
            (item,index) => 
                <Cards
                    information={item}
                    key={index}
                    apiCall={this.props.api}
                    onClick={this.onClick}
                />
            )
        const {api,handleKeyDown,onTextChange,cursor,query,suggestions,onEnter,onSelection,displaySearch} = this.props
        let infoCard = ""
        if (api === "artist"){
            infoCard = <ArtistDisplay data={this.state.singleInfo} apiCall={api}/>
        }else if (api === "album"){
            infoCard = <AlbumDisplay data={this.state.singleInfo} apiCall={api}/>
        }else{
            infoCard = <SongDisplay data={this.state.singleInfo} apiCall={api}/>
        }
        const singleDisplay = 
            <div className="single-display">
                <button className="back" style={{float: "right"}} onClick={this.goBack}>Back</button>
                {infoCard}
            </div>
        return(
            
            <div className="body" >
                {displaySearch?
                <Search 
                    api={api} 
                    onTextChange={onTextChange}
                    query={query}
                    suggestions={suggestions}
                    cursor={cursor}
                    handleKeyDown = {handleKeyDown}
                    onEnter = {onEnter}
                    onSelection={onSelection}
                    displayAutocomplete={this.props.displayAutocomplete}
                />
                :(this.state.displaySingle)?
                    singleDisplay:
                    <div className="displayResult" 
                        style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', gridAutoRows: 'minMax(100px, auto)'}}
                    >
                        {(this.props.information.results !== undefined)?cards:""}
                </div>
                }
            </div>
        )
    }
}