import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections:[
                
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
              <MenuItem/>
            </div>
        );
    }
    
}
export default Directory;