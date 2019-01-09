import React from 'react';



const tabs = (props) =>(
  <form >
          <label>
          
            {
            props.tabInfos.map((t)=>(
              <select  onChange={props.handleChange(t.id)}>
                <option key={t.id} >{t.name}</option>
                </select>
            ))

            }
            
          </label>
        </form>
);


export default tabs;