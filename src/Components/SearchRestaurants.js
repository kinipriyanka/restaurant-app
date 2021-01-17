import React, {useState, useEffect } from 'react';

import {FormControl, FormControlLabel, FormGroup, FormLabel}   from "@material-ui/core";
import CheckBox from '@material-ui/core/Checkbox'

import Restaurant from './Restaurant'
import  '../App.css';

function SearchRestaurants () {
    
    const [restaurant, setRest] = useState([]);
    const [categories, setCategory] = useState([]);
    const [cuisines, setCuisines] = useState([]);
   
    // useEffect(() => {
    //     getRestaurants();
    // }, [categories.length, cuisines.length]);

    const updateCategory = (e) => {
        if(e.target.checked){
            let data = categories;
            data.push(e.target.value);
            setCategory(data);
        }
        else{
            let index = categories.indexOf(e.target.value);
            let data = categories;
            data.splice(index,1);
            setCategory(data);
        }
        
        console.log("setting category",categories);
        getRestaurants();
    }

    const updateCuisine = (e) => {
        if(e.target.checked){
            let data = cuisines;
            data.push(e.target.value);
            setCuisines(data);
        }
        else{
            let index = cuisines.indexOf(e.target.value);
            let data = cuisines;
            data.splice(index,1);
            setCuisines(data);
        }
        
        console.log("Setting cuisines",cuisines);
        getRestaurants();
    }

    const getRestaurants = async () => {
        console.log('here',categories);
        if(categories.length > 0 || cuisines.length > 0){
            const response = await fetch(
				`https://developers.zomato.com/api/v2.1/search?category=${categories}&entity_id=297&entity_type=city&cuisines=${cuisines}&count=100`, 
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'user-key': 'c1d331ff7e4dcfb200d33fa7efb9b184'
					}
				}
			);
			const data = await response.json();
			setRest(data.restaurants);
        }
	};

    
    
    return (
        <div >
            <form >
                <FormControl className="">
                    <FormGroup className="arrangeSearch">
                        <h1>CATEGORY</h1>
                        <FormControlLabel 
                            control = {
                                <CheckBox value="1"  onChange={(e)=>updateCategory(e)} color="primary"/>
                            } label = "Delivery"
                            labelPlacement = "end"
                            
                            iconStyle = {{fill: 'green'}}
                        /> 
                        <FormControlLabel
                            control = {<CheckBox value="5" onChange={(e)=>updateCategory(e)} color="primary"/>}
                            label ="Take Away"
                            labelPlacement = "end"
                        />
                        <FormControlLabel
                            control = {<CheckBox value="11" onChange={(e)=>updateCategory(e)} color="primary"/>}
                            label ="Bars and Pubs"
                            labelPlacement = "end"
                        />
                        <FormControlLabel
                            control = {<CheckBox value="2" onChange={(e)=>updateCategory(e)} color="primary"/>}

                            label ="Dining"
                            labelPlacement = "end"
                        />

                        <h1>CUISINE</h1>
                        <FormControlLabel 
                            control = {<CheckBox value="1039"  onChange={(e)=>updateCuisine(e)}/>}
                            label= "Cafe Food"
                            labelPlacement ="end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="161"  onChange={(e)=>updateCuisine(e)} /> }
                            label= "Coffee and Tea"
                            labelPlacement ="end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="82" onChange={(e)=>updateCuisine(e)} />
                            }label ="Pizza"
                            labelPlacement = "end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="40" onChange={(e)=>updateCuisine(e)} />}
                            label="Fast Food"
                            labelPlacement = "end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="3" onChange={(e)=>updateCuisine(e)} />}
                            label="Asian"
                            labelPlacement = "end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="5" onChange={(e)=>updateCuisine(e)} />}
                            label = "Bakery"
                            labelPlacement = "end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="55" onChange={(e)=>updateCuisine(e)} />}
                            label="Italian"
                            labelPlacement = "end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="304" onChange={(e)=>updateCuisine(e)} />}
                            label="Sandwich"
                            labelPlacement = "end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="25" onChange={(e)=>updateCuisine(e)} />}
                            label="Chinese"
                            labelPlacement = "end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="983" onChange={(e)=>updateCuisine(e)} />} 
                            label="Pub Food"
                            labelPlacement = "end"
                        />
                        <FormControlLabel 
                            control = { <CheckBox value="110" onChange={(e)=>updateCuisine(e)} />}
                            label ="other"
                            labelPlacement = "end"
                        />
                    </FormGroup>

                    
                </FormControl>
                
             </form>
            
            
            
            
            <h1>Results</h1>
            {restaurant.map(rest => (
                
                <Restaurant
                    key = {rest.restaurant.id}
                    name= {rest.restaurant.name}
                />
				
			))}
        </div>
    );
      
}

export default SearchRestaurants;
