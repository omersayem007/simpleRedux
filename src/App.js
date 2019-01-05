import React, { Component } from 'react';
import MessagView from './components/MessageView';
import MessageInput from './components/MessageInput';
import Redux from './redux/Redux';
const Store = Redux.createStore(Redux.reducer,Redux.initialState);

class App extends Component {

 componentDidMount (){
  Store.subscribe(() => this.forceUpdate());
  }

  render() {
    const messages = Store.getState().messages;
    return (
      <div className="App">
        <MessagView
        messages={messages}
        store={Store}
        />
        <MessageInput
        store={Store}
        />
      </div>
    );
  }
}

export default App;
