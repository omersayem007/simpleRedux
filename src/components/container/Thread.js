import React from 'react';
import MessageList from '../ui/MessageList';
import TextFieldSubmit from '../ui/TextFieldSubmit';


const Thread = (props) => (
    <div className='ui center aligned basic segment'>
      <MessageList
        messages={props.messages}
        onClick={props.onMessageClick}
      />
      <TextFieldSubmit
        onSubmit={props.onMessageSubmit}
      />
    </div>
  );

  export default Thread;