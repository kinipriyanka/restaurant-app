import React, { Component } from 'react';

import  '../App.css';
import "rsuite/dist/styles/rsuite-default.min.css";
import Category from './Category';
import Cuisines from './Cuisines';
import Sliders from './Sliders';

class SearchRestaurants extends Component {
    constructor(props){
        super(props);
        this.state = {
            restaurant : [],
            categories : [],
            cuisines : [],
            maxRate : 5,
            minRate : 0,
            valueRate : [],
            minCost : 0,
            maxCost : 100,
            valueCost: [],
        }
    }

    updateCategory = (e) => {
        if(e.target.checked){
            let data = this.state.categories;
            data.push(e.target.value);
            // setCategory(data);
            this.setState({categories: data});
        }
        else{
            let index = this.state.categories.indexOf(e.target.value);
            let data = this.state.categories;
            data.splice(index,1);
            // setCategory(data);
            this.setState({categories: data});
        }
        
        console.log("setting category",this.state.categories);
        this.getRestaurants();
    }

    updateCuisine = (e) => {
        if(e.target.checked){
            let data = this.state.cuisines;
            data.push(e.target.value);
            // setCuisines(data);
            this.setState({cuisines:data})
        }
        else{
            let index = this.state.cuisines.indexOf(e.target.value);
            let data = this.state.cuisines;
            data.splice(index,1);
            // setCuisines(data);
            this.setState({cuisines:data})
        }
        
        console.log("Setting cuisines",this.state.cuisines);
        this.getRestaurants();
    }

    //fetch restaurants from zomato api based on category and cuisines
    getRestaurants = async () => {
        console.log('here',this.state.categories);
        if(this.state.categories.length > 0 || this.state.cuisines.length > 0){
            const response = await fetch(
				`https://developers.zomato.com/api/v2.1/search?category=${this.state.categories}&entity_id=297&entity_type=city&cuisines=${this.state.cuisines}`, 
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'user-key': 'c1d331ff7e4dcfb200d33fa7efb9b184'
					}
				}
			);
			const data = await response.json();
            // setRest(data.restaurants);
            console.log('no of rest fetched', data.restaurants.length)
            this.setState({restaurant:data.restaurants})
        }
	};

    getRestbyID = (rest) => {
        console.log('botton clicked',rest);
    }

    //filter based on rating
    updateRate = (e) => {
        this.setState({valueRate:[e[0],e[1]]})
        console.log(e[0], e[1],this.state.valueRate)
        if(this.state.restaurant.length > 0) {
            this.state.restaurant.filter(rest=> rest.restaurant.user_rating.aggregate_rating > e[0] && rest.restaurant.user_rating.aggregate_rating < e[1])
        }
        
    }
    
    render() {
        return (
            <div >
                <form >
                    <Category onChange={(e)=>this.updateCategory(e)}/>
                    <Cuisines onChange={(e)=> this.updateCuisine(e)}/>
                    <Sliders onChange={(e)=> this.updateRate(e)}/>
                    
                 </form>
                
                
                
                <h2>Results</h2>
                {this.state.restaurant.map(rest => (
                    
                    <button className="result" key={rest.restaurant.id} >{rest.restaurant.name}</button>
                    
                ))}
                
                
    
                
            </div>
        );
    }
    
      
}

export default SearchRestaurants;
