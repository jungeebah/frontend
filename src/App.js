import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Body from './components/body/body'
import artist from './data/file'
import album from './data/album'
import song from './data/songs'

const Token = process.env.REACT_APP_TOKEN
class App extends React.Component {
  constructor(){
    super()
    this.state={
      token:Token,
      apiCall: "Artist",
      button: ["Artist", "Album", "Song"],
      suggestionCall: artist,
      query: "",
      information:{},
      suggestions: [],
      cursor: 0,
      total:0,
      displayAutocomplete: false,
      displaySearch: true,
      displaySingle: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.onSelection = this.onSelection.bind(this)
  }
  onTextChange(event){
    const {suggestionCall} = this.state
    this.setState({query:event.target.value,displayAutocomplete:true})
    let value = event.target.value
    let suggestions = []
    if (value.length > 0){
        value = value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        const regex = new RegExp(`^${value}`,'i');
        suggestions = suggestionCall.sort().filter(v=>regex.test(v))
    }else{
        this.setState({
            cursor: 0,
            information:{},
            displayAutocomplete:false
        })
    }
    this.setState(prevState=>({
        suggestions: (suggestions.length > 0)?suggestions.slice(0,5):["No Result"],
        cursor: (suggestions.length === 1)?0:prevState.cursor
    }))
}
handleKeyDown(e) {
  const { cursor} = this.state
  if (e.keyCode === 38 && cursor > 0) {
    this.setState( prevState => ({
      cursor: prevState.cursor - 1,
      query: this.state.suggestions[prevState.cursor - 1]
    }))
  } else if (e.keyCode === 40 && cursor < this.state.suggestions.length - 1) {
    this.setState( prevState => ({
      cursor: prevState.cursor + 1,
      query: this.state.suggestions[prevState.cursor + 1]
    }))
  }
}
  handleClick(event){
    let value = ""
    if (event.target.name === "Artist"){
      value = artist
    }else if (event.target.name === "Album"){
      value = album
    }else if (event.target.name === "Song"){
      value = song
    }
    this.setState({
      suggestionCall: value,
      query: "",
      displayAutocomplete: false,
      displaySearch: true,
      information:{}
    })
    event.target.name === "Search"?
    this.setState({
      button: ["Artist", "Album", "Song"],
  }):
    this.setState({
        apiCall: event.target.name,
    })
  }
  onEnter(event){
    if (event.key === 'Enter')
    {
      this.setState({
        query:event.target.value,
        suggestions:[],
        displayAutocomplete:false,
        displaySearch: false,
      })
      event.target.value.length > 2 &&
      fetch(`http://127.0.0.1:8000/api/${this.state.apiCall.toLowerCase()}s?search=${event.target.value}`, {
      headers : new Headers({
        'Authorization': `token ${Token}`, 
        'Content-Type': 'application/json'
      })})
      .then(response => response.json())
      .then(data=>{
        this.setState({
            isLoading: false,
            information: data,
            total: data.results.length,
        })
      })
  }
}
  onSelection(value){
    this.setState({
      query: value,
      suggestions: [],
      displayAutocomplete: false,
  })
  }
  render(){
    return (
      <div className="app">
      <Header 
        apiCall={this.state.apiCall} 
        buttonClick={this.handleClick} 
        button={this.state.button}
        />
      <Body
        api={this.state.apiCall.toLowerCase()}
        suggestions={this.state.suggestions}
        query={this.state.query}
        handleKeyDown = {this.handleKeyDown}
        onTextChange = {this.onTextChange}
        cursor = {this.state.cursor}
        information={this.state.information}
        onEnter = {this.onEnter}
        onSelection = {this.onSelection}
        displayAutocomplete={this.state.displayAutocomplete}
        displaySearch = {this.state.displaySearch}
        total={this.state.total}
        displaySingle={this.state.displaySingle}
        />
    </div>
    );
  }
}

export default App;
