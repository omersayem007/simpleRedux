import React  from 'react';
import Select from '../ui/Select';



class FlavorForm extends React.Component {
  
  
    handleSubmit = (id) => {
      
      const store = this.props.store;
      store.dispatch({
        type:"OpenThread",
        id
      })
      
    }
  
    render() {

      return (
        <Select
        tabInfos={this.props.tabInfos}
        handleSubmit={this.handleSubmit}
        />
        
      );
    }
  }

  export default FlavorForm;