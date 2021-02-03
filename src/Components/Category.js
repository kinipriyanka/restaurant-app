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

function Category(props) {

   return (  
            <FormControl >
                <FormGroup >
                    <h2 className="input-text-h2">CATEGORY</h2>
                    <FormControlLabel 
                        control = {
                            <TealCheckbox value="1"  onChange={props.onChange}  size="small"/>
                        } label = {<span className="input-text-span">Delivery</span>}
                        labelPlacement = "end"
                    /> 
                    <FormControlLabel
                        control = {<TealCheckbox value="5" onChange={props.onChange} color="primary" size="small"/>}
                        label ={<span className="input-text-span">Take Away</span>}
                        labelPlacement = "end"
                    />
                    <FormControlLabel
                        control = {<TealCheckbox value="11" onChange={props.onChange} color="primary" size="small"/>}
                        label ={<span className="input-text-span">Bars and Pubs</span>}
                        labelPlacement = "end"
                    />
                    <FormControlLabel
                        control = {<TealCheckbox value="2" onChange={props.onChange} color="primary" size="small"/>}

                        label ={<span className="input-text-span">Dining</span>}
                        labelPlacement = "end"
                    />   
                    
                </FormGroup>
    
                        
            </FormControl>
        );
}
 
export default Category;