import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'

const Restaurant = ({key, name , thumb, featuredImage, locality, address, cuisines, cost, rating, 
	phoneNumber, timings, deliveryAvailable, bookingAvailable}) => {
		
	return (
		<div>
			<h2>{name}</h2>
			<p>{address}, {locality}</p>
			<img src={thumb || featuredImage} alt=""/>
			<div>
				{bookingAvailable ? (
					<FontAwesomeIcon icon={faCheck} style={{color: "green"}}/>
					):(
					<FontAwesomeIcon icon={faTimes} style={{color: "red"}}/>)} 
				{bookingAvailable ? (
					<span> Bookings Available</span>
					):(
					<span> No Bookings</span> )}
			
			</div>
			
			<div>
				{deliveryAvailable ? (
					<FontAwesomeIcon icon={faCheck} style={{color: "green"}}/>
					):(
					<FontAwesomeIcon icon={faTimes} style={{color: "red"}}/>)}
				{deliveryAvailable ? (
					<span> Delivery Available</span>
					):(
					<span> No Delivery</span> )}
			</div>

			
			<h6>CUISINES</h6>
			<h4>{cuisines}</h4>
			<h6>PHONE NUMBER</h6>
			<h4>{phoneNumber}</h4>
			<h6>OPENING HOURS</h6>
			<h4>{timings}</h4>
		</div>
	)
}

export default Restaurant;