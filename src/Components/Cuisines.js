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
                            <CheckBox value="1039"  onChange={(e)=>this.props.onChange(e)} color="primary" size="small" />
                        }
                            label= {<span style={{ fontSize: '0.75em'}}>Cafe Food</span>}
                            labelPlacement ="end"
                            
                        />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="161"  onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/> }
                                label= {<span style={{ fontSize: '0.75em'}}>Coffee and Tea</span>}
                                labelPlacement ="end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="82" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>
                                }label ={<span style={{ fontSize: '0.75em'}}>Pizza</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        
                    </tr>

                    <tr>
                    <td>
                        <FormControlLabel 
                                control = { <CheckBox value="304" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label={<span style={{ fontSize: '0.75em'}}>Sandwich</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="55" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label={<span style={{ fontSize: '0.75em'}}>Italian</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="5" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label = {<span style={{ fontSize: '0.75em'}}>Bakery</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="25" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label={<span style={{ fontSize: '0.75em'}}>Chinese</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="983" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>} 
                                label={<span style={{ fontSize: '0.75em'}}>Pub Food</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="110" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label ={<span style={{ fontSize: '0.75em'}}>Other</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="40" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
                                label={<span style={{ fontSize: '0.75em'}}>Fast Food</span>}
                                labelPlacement = "end"
                            />
                        </td>
                        <td>
                            <FormControlLabel 
                                control = { <CheckBox value="3" onChange={(e)=>this.props.onChange(e)} color="primary" size="small"/>}
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