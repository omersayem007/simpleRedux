import React from 'react';
import MessageInput from './MessageInput';


class MessageView extends React.Component {

    handledelete = (id) =>{
        const store = this.props.store;
        store.dispatch({
            type:"DeleteMessage",
            id
        })
    }

  render() {
      const messages = this.props.messages.map((message,index)=>(
          <div key={message.id} style={{border:'1px solid red'}}>
          <p> 
          {message.message}
          </p>
          <span>@{message.time}</span><br/>
          <button onClick={() =>this.handledelete(message.id)}>Delete</button>
          </div>
      ));
    return (
      <div>

          <h1>MessageView</h1>
          {messages}
          <MessageInput
        store={this.props.store}
        activeThreadId ={this.props.activeThreadId}
        />
        
       </div>
    );
  }
}


export default MessageView;