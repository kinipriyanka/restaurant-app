import  { Component } from 'react';

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

class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        }
    }
    render() { 
        return ( 

            <FormControl >
                <RadioGroup  className="arrangeSearch"value={this.state.cityId} onChange={(e)=>this.props.onChange(e)}>
                <h2 >CITIES</h2>
                <table className="input_column">
                    <tr>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio  value="297"    size="small"/>
                            } label = {<span style={{ fontSize: '0.75em'}}>Adelaide</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        <td>
                            <FormControlLabel 
                                control = {
                                    <GreenRadio value="260"   size="small"/>
                                } label = {<span style={{ fontSize: '0.75em'}}>Sydney</span>}
                                labelPlacement = "end"
                            /> 
                        </td>
                       
                        
                    </tr>

                    <tr>
                    <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="259"   size="small"/>
                            } label = {<span style={{ fontSize: '0.75em'}}>Melbourne</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="296"    size="small"/>
                            } label = {<span style={{ fontSize: '0.75em'}}>Perth</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <FormControlLabel 
                                control = {
                                    <GreenRadio value="1323"   size="small"/>
                                } label = {<span style={{ fontSize: '0.75em'}}>Darwin</span>}
                                labelPlacement = "end"
                            /> 
                        </td>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="313"    size="small"/>
                            } label = {<span style={{ fontSize: '0.75em'}}>Canberra</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        </tr>
                    <tr>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="5537"    size="small"/>
                            } label = {<span style={{ fontSize: '0.75em'}}>Hobart</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                        <td>
                        <FormControlLabel 
                            control = {
                                <GreenRadio value="298"   size="small"/>
                            } label = {<span style={{ fontSize: '0.75em'}}>Brisbane</span>}
                            labelPlacement = "end"
                        /> 
                        </td>
                    
                    </tr>
                </table>
                </RadioGroup>
            </FormControl>
           
         );
    }
}
 
export default Cities;