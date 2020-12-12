import React from 'react';

class Player extends React.Component {


    render () {
        const { player } = this.props;
        return (
            
            <div className="player">
                <p>{player.position} {player.name} -- ${player.contract_value} million ({player.contract_length}) </p>
            </div>
            
        )
    }
}
    
export default Player;
