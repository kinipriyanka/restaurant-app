import React, { Component } from 'react';
import {FormControl, FormControlLabel, FormGroup}   from "@material-ui/core";
import CheckBox from '@material-ui/core/Checkbox';


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
                <table>
                    <tr>
                        <td>
                        <FormControlLabel 
                            control = {
                            <CheckBox value="1039"  onChange={(e)=>this.props.onChange(e)} color="primary"/>
                        }
                            label= "Cafe Food"
                            labelPlacement ="end"
                        />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="161"  onChange={(e)=>this.props.onChange(e)} color="primary"/> }
                                label= "Coffee and Tea"
                                labelPlacement ="end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="82" onChange={(e)=>this.props.onChange(e)} color="primary"/>
                                }label ="Pizza"
                                labelPlacement = "end"
                            />
                        </td>
                        
                    </tr>

                    <tr>
                    <td>
                        <FormControlLabel 
                                control = { <CheckBox value="304" onChange={(e)=>this.props.onChange(e)} color="primary"/>}
                                label="Sandwich"
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="55" onChange={(e)=>this.props.onChange(e)} color="primary"/>}
                                label="Italian"
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="5" onChange={(e)=>this.props.onChange(e)} color="primary"/>}
                                label = "Bakery"
                                labelPlacement = "end"
                            />
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="25" onChange={(e)=>this.props.onChange(e)} color="primary"/>}
                                label="Chinese"
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="983" onChange={(e)=>this.props.onChange(e)} color="primary"/>} 
                                label="Pub Food"
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="110" onChange={(e)=>this.props.onChange(e)} color="primary"/>}
                                label ="other"
                                labelPlacement = "end"
                            />
                        </td>
                        </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="40" onChange={(e)=>this.props.onChange(e)} color="primary"/>}
                                label="Fast Food"
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="3" onChange={(e)=>this.props.onChange(e)} color="primary"/>}
                                label="Asian"
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