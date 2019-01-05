import React, { Component } from 'react';



class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      
    }
  
    handleChange= (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {


        const options = this.props.tabInfos.map((t)=>(
            <option value={t.name}>{t.name}</option>
        ))
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              {options}
            </select>
          </label>
          <input type="submit" value="select" />
        </form>
      );
    }
  }

  export default FlavorForm;