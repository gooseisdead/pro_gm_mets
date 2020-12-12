import React from 'react';
import Player from '../Components/Player'
import NewPlayerForm from '../Components/NewPlayerForm'
import Header from '../Components/Header'

class TeamContainer extends React.Component {

    state = {
        api: []
    }
    
    componentDidMount() {
        fetch("http://localhost:8000/players")
        .then(resp => resp.json())
        .then(data => this.setState( {api: data} ))
    }

    handleNewPlayer = (playerObj) => {
        fetch("http://localhost:8000/players", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify(playerObj)
        })
        .then(resp => resp.json())
        .then(newPlayer => this.setState({ api: [...this.state.api, newPlayer]}))
      }
      
    renderPlayers = () => {
        let filteredArray = this.state.api
        return filteredArray.map(el => <Player key={el.id} player={el} api={this.state.api} />)
    }

    render() {
        return (
            <div className="team-container">
                <Header team_name={this.state.api}/>
                {this.renderPlayers()}
                <NewPlayerForm handleNewPlayer={this.handleNewPlayer}/>
            </div>
        )
    }
}

export default TeamContainer