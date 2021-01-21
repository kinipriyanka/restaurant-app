import React, { Component } from 'react';

import  '../App.css';
import "rsuite/dist/styles/rsuite-default.min.css";
import Category from './Category';
import Cuisines from './Cuisines';
import Sliders from './Sliders';
import Restaurant from './Restaurant';
import Cities  from "./Cities";
// import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
// import RangeSlider from 'react-bootstrap-range-slider';

class SearchRestaurants extends Component {
    constructor(props){
        super(props);
        this.getRestaurantDescription = this.getRestaurantDescription.bind(this);
        // this.updateCityId = this.updateCityId.bind(this.state);
        this.state = {
            restaurant : [],
            categories : [],
            cuisines : [],
            cityId: "297",
            maxRate : 5,
            minRate : 0,
            valueRate : [],
            minCost : 10,
            maxCost : 100,
            valueCost: [],
            restDescription : {},
            tempAddress: false,
            marksCost: [{value:10, label:'10$'},{value:100, label:'100$'}],
            marksRate: [{value:0, label:'0'},{value:5, label:'5'}]
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

    updateCityId = (e) => {
        // e.preventDefault();
        this.setState({cityId:e.target.value},() => this.getRestaurants())    
    }

    //fetch restaurants from zomato api based on category and cuisines
    getRestaurants = async () => {
        console.log('here',this.state.cityId);
        if(this.state.categories.length > 0 || this.state.cuisines.length > 0 || this.state.cityId !== "0"){
            const response = await fetch(
				`https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&cuisines=${this.state.cuisines}&category=${this.state.categories}&count=100`, 
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
    updateRate = (e,value) => {
        console.log("getting rate", value)
        this.setState({valueRate:[value[0],value[1]]})
        console.log(this.state.valueRate)
        let data = this.state.restaurant
        if(data.length > 0) {
            data.filter(rest=> rest.restaurant.user_rating.aggregate_rating > value[0] && rest.restaurant.user_rating.aggregate_rating < value[1])
        }
        this.setState({restaurant:data})
        
    }
    updateCost = (e, value) => {
        this.setState({valueCost:[value[0],value[1]]})
        console.log(e[0], e[1],this.state.valueCost)
        let data = this.state.restaurant
        if(data.length > 0) {
            data.filter(rest=> rest.restaurant.average_cost_for_two > value[0] && rest.restaurant.average_cost_for_two < value[1])
        }
        this.setState({restaurant:data})
    }
    
    render() {
        return (
            <div >
                <form className="input_row ">
                    <Category className="input_column " onChange={(e)=>this.updateCategory(e)}/>
                    <Cuisines onChange={(e)=> this.updateCuisine(e)}/>
                    <Cities onChange={(e) => this.updateCityId(e)}></Cities>
                    <table className="input_column">
                        <tr>
                            <div className="arrangeSearch text-responsive"><h2>RATING</h2></div>
                                <Sliders className="text-responsive"min={this.state.minRate} max= {this.state.maxRate} step={0.1} defaultValue = {[1,2]} marks={this.state.marksRate} onChange={(e,value)=> this.updateRate(e,value)}/>
                            
                        </tr>
                        <tr>
                        <div className="arrangeSearch text-responsive"><h2>COST</h2></div>
                            <Sliders min={this.state.minCost} max={this.state.maxCost} step={10} defaultValue = {[20,50]} marks={this.state.marksCost} onChange={(e,value)=> this.updateCost(e,value)}/>
                        </tr>
                    </table>
                    
                    
                </form>
                
                
                <div className="row1">
                    <div className="result_column">
                        {this.state.restaurant.length>0 ? 
                        (<div className="result_heading "><strong>RESULTS</strong></div>): (<div></div>)}
                        
                        {this.state.restaurant.map(rest => (
                            <button className="result " key={rest.restaurant.id} onClick={(e) => this.getRestaurantDescription(e, rest.restaurant)}>{rest.restaurant.name}</button>
                        ))}
                    </div>
                    <div className="columnN text-responsive">
                        { this.state.tempAddress ? (
                            <Restaurant key = {this.state.restDescription.id}
                                name = {this.state.restDescription.name}
                                thumb = {this.state.restDescription.thumb}
                                featuredImage = {this.state.restDescription.featured_image}
                                locality = {this.state.restDescription.location.locality}
                                address = {this.state.restDescription.location.address}
                                cuisines = {this.state.restDescription.cuisines}
                                cost = {this.state.restDescription.average_cost_for_two}
                                rating = {this.state.restDescription.user_rating.aggregate_rating}
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
                </div>    
            </div>
        );
    }
    
      
}

export default SearchRestaurants;
