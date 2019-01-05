import React, { Component } from 'react';



class MessageInput extends Component {

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
        const store = this.props.store;
        store.dispatch({
            type:'AddMessage',
            message:this.state.message
        });
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


export default MessageInput;
