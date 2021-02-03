import  React, { Component } from 'react';

import {FormControl, FormControlLabel, FormGroup}   from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import RadioGroup from '@material-ui/core/RadioGroup';

const GreenRadio = withStyles({
    root: {
      '&$checked': {
        color: teal[300],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

function Cities(props){
    const[value, setValue] = React.useState("297")
    
    const handleChange = (event) => {
        setValue(event.target.value)
        props.onChange(event)
    }
    return ( 

            <FormControl >
                <RadioGroup value={value} onChange={handleChange}>
                <h2 className="input-text-h2">CITIES</h2>
                <table>
                    <tr>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio  value="297"   
                                size="small" />
                            } label = {<span className="input-text-span">Adelaide</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        <td>
                            <FormControlLabel 
                                control = {
                                    <GreenRadio value="260"   size="small"/>
                                } label = {<span className="input-text-span">Sydney</span>}
                                labelPlacement = "end"
                            /> 
                        </td>
                       
                        
                    </tr>

                    <tr>
                    <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="259"   size="small"/>
                            } label = {<span className="input-text-span">Melbourne</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="296"    size="small"/>
                            } label = {<span className="input-text-span">Perth</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = {
                                    <GreenRadio value="1323"   size="small"/>
                                } label = {<span className="input-text-span">Darwin</span>}
                                labelPlacement = "end"
                            /> 
                        </td>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="313"    size="small"/>
                            } label = {<span className="input-text-span">Canberra</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        </tr>
                    <tr>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="5537"    size="small"/>
                            } label = {<span className="input-text-span">Hobart</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="298"   size="small"/>
                            } label = {<span className="input-text-span">Brisbane</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                    
                    </tr>
                </table>
                </RadioGroup>
            </FormControl>
           
         );
}
 
export default Cities;