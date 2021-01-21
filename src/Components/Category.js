import React, { Component } from 'react';
import {FormControl, FormControlLabel, FormGroup}   from "@material-ui/core";
import CheckBox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

const TealCheckbox = withStyles({
    root: {
      '&$checked': {
        color: teal[300],
      },
    },
    checked: {},
  })((props) => <CheckBox color="default" {...props} />);

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <FormControl className="">
                        <FormGroup className="arrangeSearch">
                            
                            <h2>CATEGORY</h2>
                            <FormControlLabel 
                                control = {
                                    <TealCheckbox value="1"  onChange={(e)=>this.props.onChange(e)}  size="small"/>
                                } label = {<span style={{ fontSize: '0.75em'}}>Delivery</span>}
                                labelPlacement = "end"
                            /> 
                            <FormControlLabel
                                control = {<TealCheckbox value="5" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label ={<span style={{ fontSize: '0.75em'}}>Take Away</span>}
                                labelPlacement = "end"
                            />
                            <FormControlLabel
                                control = {<TealCheckbox value="11" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label ={<span style={{ fontSize: '0.75em'}}>Bars and Pubs</span>}
                                labelPlacement = "end"
                            />
                            <FormControlLabel
                                control = {<TealCheckbox value="2" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
    
                                label ={<span style={{ fontSize: '0.75em'}}>Dining</span>}
                                labelPlacement = "end"
                            />    
                        </FormGroup>
    
                        
                    </FormControl>
        );
    }
}
 
export default Category;