import React, { Component } from 'react';
// import {RangeSlider} from 'rsuite';
import {FormGroup, FormControl}   from "@material-ui/core";
import Slider from '@material-ui/core/Slider';
import { teal } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const TealSlider = withStyles({
    root: {
      color: teal[300],
      width: 250,
      '&$onChange': {
        color: teal[300],
      },
    },
    checked: {},
  })((props) => <Slider color="default" {...props} />);

class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <FormControl>
                <FormGroup className="input_column">

                    <div className="rangeSlider">
                        <TealSlider
                            defaultValue = {this.props.defaultValue}
                            max= {this.props.max}
                            min={this.props.min}
                            step = {this.props.step}
                            marks = {this.props.marks}
                            onChange = {(e) => this.props.onChange(e)}
                            valueLabelDisplay="0"
                        />
                    </div>
                </FormGroup>
            </FormControl>
        );
    }
}
 
export default Sliders;