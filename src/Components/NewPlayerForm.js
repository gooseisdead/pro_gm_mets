import React from "react";

class NewPlayerForm extends React.Component {

  state = {
    name: '',
    position: '',
    contract_value: '',
    contract_length: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  localHandleNewPlayer = (event) => {
    this.props.handleNewPlayer(this.state)
    this.setState({
      name: '',
      position: '',
      contract_value: '',
      contract_length: ''
    })
  }


  render() {
    return (
      <form className="new-bid-form" onSubmit={this.localHandleNewPlayer}>
        <input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
        <br></br>
        <input placeholder="Position" name="position" value={this.state.position} onChange={this.handleChange}/>
        <br></br>
        <input placeholder="Value" name="contract_value" value={this.state.contract_value} onChange={this.handleChange}/>
        <br></br>
        <input placeholder="Length" name="contract_length" value={this.state.contract_length} onChange={this.handleChange}/>
        <br></br>
        <input placeholder="Team" name="current_team" value={this.state.current_team} onChange={this.handleChange}/>
        <br></br>
        <input type="submit" value="Submit Player" />
      </form>
    );
  }
}

export default NewPlayerForm;
