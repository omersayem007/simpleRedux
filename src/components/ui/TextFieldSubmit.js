import React, { Component } from 'react';



class TextFieldSubmit extends Component {

    constructor(props){
        super(props)

        this.state={
            message:''
          }
    }

    handleInput = (event) =>{

        event.preventDefault();
        this.setState({ message:event.target.value });
    }
    
    handleSubmit = () =>{
        this.props.onSubmit(this.state.message)
        this.setState({message:''})
    }

  render() {
    return (
      <div>

          <input type="text" onChange={this.handleInput} value={this.state.message}/>
          <button onClick={this.handleSubmit}>Submit</button>
        
       </div>
    );
  }
}


export default TextFieldSubmit;
