import React from 'react';


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
          <div key={message.id}>
          <p> 
          {message.text}
          <span>@{message.time}</span>
          <button onClick={() =>this.handledelete(message.id)}>Delete</button>
           </p>
          
          </div>
      ));
    return (
      <div>

          <h1>MessageView</h1>
          {messages}
        
       </div>
    );
  }
}


export default MessageView;