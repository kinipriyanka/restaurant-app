import React, { Component } from 'react';
import {RangeSlider} from 'rsuite';
import {FormGroup, FormControl}   from "@material-ui/core";

class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <FormControl>
                <FormGroup className="arrangeSearch">

                    <div className="rangeSlider">
                        <label>Rating</label>
                        <RangeSlider
                            defaultValue = {[1,2]}
                            max= {5}
                            min={0}
                            graduated
                            renderMark={mark => {
                                return mark
                            }}
                            onChange = {(e) => this.props.onChange(e)}
                        />
                    </div>
                </FormGroup>
            </FormControl>
        );
    }
}
 
export default Sliders;