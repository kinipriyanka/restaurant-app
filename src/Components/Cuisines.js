import React, { Component } from 'react';
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

class Cuisines extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <FormControl className="">
            <FormGroup className="arrangeSearch">
                
            
                <h2>CUISINE</h2>
                <table className="input_column">
                    <tr>
                        <td>
                        <FormControlLabel 
                            control = {
                            <TealCheckbox value="1039"  onChange={(e)=>this.props.onChange(e)} color="primary" />
                        }
                            label= {<span style={{ fontSize: '0.75em'}}>Cafe Food</span>}
                            labelPlacement ="end"
                            
                        />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="161"  onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/> }
                                label= {<span style={{ fontSize: '0.75em'}}>Coffee and Tea</span>}
                                labelPlacement ="end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="82" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>
                                }label ={<span style={{ fontSize: '0.75em'}}>Pizza</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        
                    </tr>

                    <tr>
                    <td>
                        <FormControlLabel 
                                control = { <TealCheckbox value="304" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label={<span style={{ fontSize: '0.75em'}}>Sandwich</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="55" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label={<span style={{ fontSize: '0.75em'}}>Italian</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="5" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label = {<span style={{ fontSize: '0.75em'}}>Bakery</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="25" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label={<span style={{ fontSize: '0.75em'}}>Chinese</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="983" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>} 
                                label={<span style={{ fontSize: '0.75em'}}>Pub Food</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="110" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label ={<span style={{ fontSize: '0.75em'}}>Other</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="40" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label={<span style={{ fontSize: '0.75em'}}>Fast Food</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <TealCheckbox value="3" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label={<span style={{ fontSize: '0.75em'}}>Asian</span>}
                                labelPlacement = "end"
                            />
                        </td>
                    
                    </tr>
                </table>   
            </FormGroup>

            
        </FormControl>
        );
    }
}
 
export default Cuisines;