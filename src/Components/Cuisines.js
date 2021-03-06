import React from 'react';
import {FormControl, FormControlLabel, FormGroup}   from "@material-ui/core";
import CheckBox from '@material-ui/core/Checkbox';

import { withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import  '../App.css';

const TealCheckbox = withStyles({
    root: {
      '&$checked': {
        color: teal[300],
      },
    },
    checked: {},
  })((props) => <CheckBox color="default" {...props} />);

function Cuisines(props)  {
    
        return (  
            <FormControl>
            <FormGroup>
                
            
                <h2 className="input-text-h2">CUISINE</h2>
                <table>
                    <tr>
                        <td>
                        <FormControlLabel 
                            control = {
                            <TealCheckbox value="1039"  onChange={props.onChange} color="primary" size="small"/>
                        }
                            label= {<span className="input-text-span">Cafe Food</span>}
                            labelPlacement ="end"
                            
                        />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="161"  onChange={props.onChange} color="primary" size="small"/> }
                                label= {<span className="input-text-span">Coffee and Tea</span>}
                                labelPlacement ="end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="82" onChange={props.onChange} color="primary" size="small"/>
                                }label ={<span className="input-text-span">Pizza</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        
                    </tr>

                    <tr>
                    <td>
                        <FormControlLabel 
                                control = { <TealCheckbox value="304" onChange={props.onChange} color="primary" size="small"/>}
                                label={<span className="input-text-span">Sandwich</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="55" onChange={props.onChange} color="primary" size="small"/>}
                                label={<span className="input-text-span">Italian</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="5" onChange={props.onChange} color="primary" size="small"/>}
                                label = {<span className="input-text-span">Bakery</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="25" onChange={props.onChange} color="primary" size="small"/>}
                                label={<span className="input-text-span">Chinese</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="983" onChange={props.onChange} color="primary" size="small"/>} 
                                label={<span className="input-text-span">Pub Food</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="110" onChange={props.onChange} color="primary" size="small"/>}
                                label ={<span className="input-text-span">Other</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="40" onChange={props.onChange} color="primary" size="small"/>}
                                label={<span className="input-text-span">Fast Food</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="3" onChange={props.onChange} color="primary" size="small"/>}
                                label={<span className="input-text-span">Asian</span>}
                                labelPlacement = "end"
                            />
                        </td>
                    
                    </tr>
                </table>   
            </FormGroup>

            
        </FormControl>
        );
    
}
 
export default Cuisines;