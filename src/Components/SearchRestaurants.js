import React, { Component } from 'react';

import  '../App.css';
import "rsuite/dist/styles/rsuite-default.min.css";
import Category from './Category';
import Cuisines from './Cuisines';
import Sliders from './Sliders';
import Restaurant from './Restaurant';


class SearchRestaurants extends Component {
    constructor(props){
        super(props);
        this.getRestaurantDescription = this.getRestaurantDescription.bind(this);
        this.state = {
            restaurant : [],
            categories : [],
            cuisines : [],
            maxRate : 5,
            minRate : 0,
            valueRate : [],
            minCost : 1,
            maxCost : 3,
            valueCost: [],
            restDescription : {},
            tempAddress: false,
        }
    }

    updateCategory = (e) => {
        if(e.target.checked){
            let data = this.state.categories;
            data.push(e.target.value);
             this.setState({categories: data});
        }
        else{
            let index = this.state.categories.indexOf(e.target.value);
            let data = this.state.categories;
            data.splice(index,1);
            this.setState({categories: data});
        }
        
        console.log("setting category",this.state.categories);
        this.getRestaurants();
    }

    updateCuisine = (e) => {
        if(e.target.checked){
            let data = this.state.cuisines;
            data.push(e.target.value);
            this.setState({cuisines:data})
        }
        else{
            let index = this.state.cuisines.indexOf(e.target.value);
            let data = this.state.cuisines;
            data.splice(index,1);
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
				`https://developers.zomato.com/api/v2.1/search?entity_id=297&entity_type=city&cuisines=${this.state.cuisines}&category=${this.state.categories}&start=20&count=50`, 
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

    getRestaurantDescription = (e, rest) => {
        e.preventDefault();
        console.log(rest.R.has_menu_status.delivery);
        this.setState({restDescription: rest});
        this.setState({tempAddress:true})
    }

    //filter based on rating
    //Still on progress
    updateRate = (e) => {
        this.setState({valueRate:[e[0],e[1]]})
        console.log(e[0], e[1],this.state.valueRate)
        if(this.state.restaurant.length > 0) {
            this.state.restaurant.filter(rest=> rest.restaurant.user_rating.aggregate_rating > e[0] && rest.restaurant.user_rating.aggregate_rating < e[1])
        }
        
    }
    updateCost = (e) => {
        this.setState({valueCost:[e[0],e[1]]})
        console.log(e[0], e[1],this.state.valueCost)
        if(this.state.restaurant.length > 0) {
            this.state.restaurant.filter(rest=> rest.restaurant.price_range > e[0] && rest.restaurant.price_range < e[1])
        }
        
    }
    
    render() {
        return (
            <div >
                <form >
                    <Category onChange={(e)=>this.updateCategory(e)}/>
                    <Cuisines onChange={(e)=> this.updateCuisine(e)}/>
                    <Sliders min={this.state.minRate} max= {this.state.maxRate} step={1} defaultValue = {[1,2]} onChange={(e)=> this.updateRate(e)}/>
                    <Sliders min={this.state.minCost} max={this.state.maxCost} step={1} defaultValue = {[1,2]} onChange={(e)=> this.updateCost(e)}/>
                 </form>
                
                
                
                {this.state.restaurant.length>0 ? (<h2>Results</h2>): (<div></div>)}
                {this.state.restaurant.map(rest => (
                    
                    <button className="result" key={rest.restaurant.id} onClick={(e) => this.getRestaurantDescription(e, rest.restaurant)}>{rest.restaurant.name}</button>
                    
                ))}
                 
                 { this.state.tempAddress ? (
                     <Restaurant key = {this.state.restDescription.id}
                        name = {this.state.restDescription.name}
                        thumb = {this.state.restDescription.thumb}
                        featuredImage = {this.state.restDescription.featured_image}
                        locality = {this.state.restDescription.location.locality}
                        address = {this.state.restDescription.location.address}
                        cuisines = {this.state.restDescription.cuisines}
                        cost = {this.state.restDescription.average_cost_for_two}
                        rating = {this.state.restDescription.aggregate_rating}
                        phoneNumber = {this.state.restDescription.phone_numbers}
                        timings = {this.state.restDescription.timings}
                        deliveryAvailable = {this.state.restDescription.R.has_menu_status.delivery}
                        bookingAvailable = {this.state.restDescription.has_table_booking}
                     >
                      
                    </Restaurant>
                 ): (
                    <div></div>
                 )}
                
    
                
            </div>
        );
    }
    
      
}

export default SearchRestaurants;
