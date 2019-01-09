import React from 'react';
import Thread from './Thread';
import addMessage from '../../redux/actions/message/Add';
import deleteMessage from '../../redux/actions/message/Delete';


class ThreadDisplay extends React.Component {

  
  onMessageSubmit = (text) =>{
    const {store,activeThreadId} = this.props ; 
    store.dispatch(addMessage(text,activeThreadId));
  }

  onMessageClick = (id) =>{
    const store = this.props.store;
        store.dispatch(deleteMessage(id));
  }
    
  
    render() {
  
      return (
        <Thread
          messages={this.props.messages}
          onMessageClick={this.onMessageClick}
          onMessageSubmit={this.onMessageSubmit}
        />
      );
    }
  }

  export default ThreadDisplay; 