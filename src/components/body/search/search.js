import React from 'react'
import '../../../styling/search.css'

export default class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            displayValue:false,
            isSearchClass: "search ",
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.renderSuggestion = this.renderSuggestion.bind(this)
    }
    handleFocus(event){
        this.setState(prevState=>({
            isSearchClass: prevState.isSearchClass+" is-type is-focus"
        }))
    }
    handleBlur(event){
        this.setState(prevState=>({
            isSearchClass: (prevState.isSearchClass.indexOf('is-type is-focus')>=0)?prevState.isSearchClass.replace('is-type is-focus',''):prevState.isSearchClass
        }))
    }
    renderSuggestion(props){
        const { cursor,suggestions,query } = props
        if (suggestions[0] === "No Result" && query === ''){
            return null
        }
        return(
            <ul>
                {suggestions.map((item,index)=> <li key={index} className={cursor === index ? 'active' : null} onClick={()=>props.onSelection(item)}>{item} </li>)}
            </ul>
        )
    }
    render(){
        return(
            <div className={this.state.isSearchClass}>
            <div className="title-container">
                <h1 className="title">It's all about context.</h1>
                <h1 className="title-down">{`Finding ${this.props.api}`}</h1>
                </div>
            <fieldset className="field-container">
                <input type="text" placeholder={`Search ${this.props.api}...`} className="field" 
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.props.onTextChange}
                    value={this.props.query}
                    onKeyDown={this.props.handleKeyDown}
                    onKeyPress={this.props.onEnter}/>
                    <div className="icons-container">
                        <div className="icon-search"></div>
                        <div className="icon-close">
                            <div className="x-up"></div>
                            <div className="x-down"></div>
                    </div>
                </div>
                {(this.props.displayAutocomplete)?
                <div className="suggestion">
                    {this.renderSuggestion(this.props)}
                </div>:
                ""}
            </fieldset>
            
        </div>
        )
    }
}