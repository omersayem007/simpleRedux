import React, { Component } from 'react';
const uuidv1 = require('uuid/v1');
var moment = require('moment');



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
            id:uuidv1(),
            time:moment().format('MMMM Do YYYY, h:mm:ss a'),
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
