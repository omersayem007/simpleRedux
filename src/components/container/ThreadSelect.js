import React  from 'react';
import Select from '../ui/Select';
import switchTab from '../../redux/actions/switchTab/switch';



class FlavorForm extends React.Component {
  
  
    handleSubmit = (id) => {
      
      const store = this.props.store;
      store.dispatch(switchTab(id));
      
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