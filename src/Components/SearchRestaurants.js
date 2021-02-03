import React, { Component } from 'react';

import  '../App.css';
import "rsuite/dist/styles/rsuite-default.min.css";
import Category from './Category';
import Cuisines from './Cuisines';
import Sliders from './Sliders';
import Restaurant from './Restaurant';
import Cities  from "./Cities";

class SearchRestaurants extends Component {
    constructor(props){
        super(props);
        //this.getRestaurantDescription = this.getRestaurantDescription.bind(this);
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
       this.setState({cityId:e.target.value},() => this.getRestaurants())    
    }

    //fetch restaurants from zomato api based on category, cuisines and city
   getRestaurants = async () => {
        console.log('here',this.state.cityId);
        let data1 = []
        for(let i=0; i< 81; i=i+20){
            if(this.state.categories.length > 0 || this.state.cuisines.length > 0 || this.state.cityId !== "0"){
                const response = await fetch(
                    `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&cuisines=${this.state.cuisines}&category=${this.state.categories}&start=${i}&count=20`, 
                    {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'user-key': 'c1d331ff7e4dcfb200d33fa7efb9b184'
                        }
                    }
                );
                let data = await response.json();
                console.log('no of rest fetched', data.restaurants.length)
                data1 = data1.concat(data.restaurants)
                console.log('no of rest fetched each loop', data1.length)
                
            }
        }
        this.setState({restaurant:data1})        
        console.log('-----------no of rest fetched total------------', this.state.restaurant.length)            
	};

    getRestaurantDescription = (e, rest) => {
        //e.preventDefault();
        console.log(rest.R.has_menu_status.delivery);
        this.setState({restDescription: rest});
        this.setState({tempAddress:true})
    }

    //filter based on rating
    updateRate = (e,value) => {
        console.log("getting rate", value[0], value[1])
        this.setState({valueRate:[value[0],value[1]]})
        console.log(this.state.valueRate)
        let data = this.state.restaurant
        let filteredData = [];
        console.log('data length before:',data.length);
        if(data.length > 0) {
            console.log('here')
            filteredData = data.filter(rest=> rest.restaurant.user_rating.aggregate_rating > value[0] && rest.restaurant.user_rating.aggregate_rating < value[1])
            console.log(filteredData.length)
        }
        console.log('data length after:',data.length);
        this.setState({restaurant:filteredData})
           
    }
    updateCost = (e, value) => {
        this.setState({valueCost:[value[0],value[1]]})
        console.log(this.state.valueCost)
        let data = this.state.restaurant
        let filteredData = [];
        if(data.length > 0) {
            filteredData = data.filter(rest=> rest.restaurant.average_cost_for_two > value[0] && rest.restaurant.average_cost_for_two < value[1])
        }
        this.setState({restaurant:filteredData })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <form>
                    <div className="row align-items-start">
                        <div className="col-sm-2"> <Category onChange={(e)=>this.updateCategory(e)}/> </div>
                        
                        <div className="col-sm-4" ><Cuisines  onChange={(e)=> this.updateCuisine(e)}/></div>
                        <div className="col-sm-3"> <Cities onChange={(e) => this.updateCityId(e)}></Cities> </div>
                        
                        <div className="col-sm-3">
                            <table >
                                <tr>
                                    <div><h2 className="input-text-h2">RATING</h2></div>
                                        <Sliders min={this.state.minRate} max= {this.state.maxRate} step={0.1} defaultValue = {[1,2]} marks={this.state.marksRate} onChange={(e,value)=> this.updateRate(e,value)}/>
                                    
                                </tr>
                                <tr>
                                <div><h2 className="input-text-h2">COST</h2></div>
                                    <Sliders min={this.state.minCost} max={this.state.maxCost} step={10} defaultValue = {[20,50]} marks={this.state.marksCost} onChange={(e,value)=> this.updateCost(e,value)}/>
                                </tr>
                            </table>
                        </div>
                    </div>
                </form>
                
                <br></br>
                <div className="row align-items-start">
                    {this.state.restaurant.length>0 && 
                        <div className="col-sm-3 align-items-start result">
                            <div className="result_heading"><strong>RESULTS</strong></div>
                            
                            {this.state.restaurant.map(rest => (
                                <div key={rest.restaurant.id}>
                                    <button className=" result-button"  onClick={(e) => this.getRestaurantDescription(e, rest.restaurant)}>
                                        {rest.restaurant.name}
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                    }
                    <div className="col-sm-9">
                        { this.state.tempAddress &&
                            <Restaurant 
                                id = {this.state.restDescription.id}
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
                        }
                    </div>
                </div>    
            </div>
        );
    }
    
      
}

export default SearchRestaurants;
