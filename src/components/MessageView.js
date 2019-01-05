import React from 'react';


class MessageView extends React.Component {

    handledelete = (index) =>{
        const store = this.props.store;
        store.dispatch({
            type:"DeleteMessage",
            index
        })
    }

  render() {
      const messages = this.props.messages.map((message,index)=>(
          <div key={index}>
          <p> 
          {message}
          <button onClick={() =>this.handledelete(index)}>Delete</button>
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