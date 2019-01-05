import React, { Component } from 'react';
import MessagView from './components/MessageView';
import MessageInput from './components/MessageInput';
import Redux from './redux/Redux';
const store = Redux.createStore(Redux.reducer,Redux.initialState);

class App extends Component {


  constructor(props){
    super(props);
  
  this.state={
    messages:[]
  }

  }

 componentDidMount (){
  let messages = store.getState().messages;
  this.setState({messages}); 
  store.subscribe(()=>this.forceUpdate());
  }



  render() {

    return (
      <div className="App">
        <MessagView
        messages={this.state.messages}
        />
        <MessageInput
        store={store}
        messages={this.state.messages}
        />
      </div>
    );
  }
}

export default App;
