import React, { Component } from 'react';
import {FormControl, FormControlLabel, FormGroup}   from "@material-ui/core";
import CheckBox from '@material-ui/core/Checkbox'

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
                                    <CheckBox value="1"  onChange={(e)=>this.props.onChange(e)} color="primary"/>
                                } label = "Delivery"
                                labelPlacement = "end"
                            /> 
                            <FormControlLabel
                                control = {<CheckBox value="5" onChange={(e)=>this.props.onChange(e)} color="primary" />}
                                label ="Take Away"
                                labelPlacement = "end"
                            />
                            <FormControlLabel
                                control = {<CheckBox value="11" onChange={(e)=>this.props.onChange(e)} color="primary"/>}
                                label ="Bars and Pubs"
                                labelPlacement = "end"
                            />
                            <FormControlLabel
                                control = {<CheckBox value="2" onChange={(e)=>this.props.onChange(e)} color="primary"/>}
    
                                label ="Dining"
                                labelPlacement = "end"
                            />    
                        </FormGroup>
    
                        
                    </FormControl>
        );
    }
}
 
export default Category;