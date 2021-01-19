import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
import  '../App.css';
const Restaurant = ({key, name , thumb, featuredImage, locality, address, cuisines, cost, rating, 
	phoneNumber, timings, deliveryAvailable, bookingAvailable}) => {
		
	return (
		<div className="row1">
			<div className="image_column">
				<img className="image_resize" src={thumb || featuredImage} alt=""/>
			</div>
			<div className="rest_description_column">
				<h2 style={{color:"black", fontSize:"2.2em"}}>{name}</h2>
				<p style={{fontSize: "0.9em"}}>{address}, {locality}</p>
				<br></br>
				<div>
					{bookingAvailable ? (
						<FontAwesomeIcon icon={faCheck} style={{color: "green", fontSize:"0.9em"}}/>
						):(
						<FontAwesomeIcon icon={faTimes} style={{color: "red", fontSize:"0.9em"}}/>)} 
					{bookingAvailable ? (
						<span style={{paddingLeft:"0.5em",fontSize:"0.9em"}}> Bookings Available</span>
						):(
						<span style={{paddingLeft:"0.5em",fontSize:"0.9em"}}> No Bookings</span> )}
				
				</div>
				
				<div>
					{deliveryAvailable ? (
						<FontAwesomeIcon icon={faCheck} style={{color: "green", fontSize:"0.9em"}}/>
						):(
						<FontAwesomeIcon icon={faTimes} style={{color: "red", fontSize:"0.9em"}}/>)}
					{deliveryAvailable ? (
						<span style={{paddingLeft:"0.5em", fontSize:"0.9em"}}>Delivery Available</span>
						):(
						<span style={{paddingLeft:"0.5em", fontSize:"0.9em"}}>No Delivery</span> )}
				</div>

				<br></br>
				<p style={{fontSize: "0.75em",color:"rgb(68, 68, 68)"}}><strong>CUISINES</strong></p>
				<h5 style={{fontSize: "1.2em", color:"rgb(110, 110, 110)"}}>{cuisines}</h5>
				<br></br>

				<p style={{fontSize: "0.75em",color:"rgb(68, 68, 68)"}}><strong>PHONE NUMBER</strong></p>
				<h5 style={{fontSize: "1.2em", color:"rgb(110, 110, 110)"}}>{phoneNumber}</h5>
				<br></br>

				<p style={{fontSize: "0.75em",color:"rgb(68, 68, 68)"}}><strong>OPENING HOURS</strong></p>
				<h5 style={{fontSize: "1.2em", color:"rgb(110, 110, 110)"}}>{timings}</h5>
				
			</div>
			
		</div>
	)
}

export default Restaurant;