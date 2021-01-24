import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
import  '../App.css';
import image_not_found from '../images/image_not_found.jpg'
const Restaurant = ({key, name , thumb, featuredImage, locality, address, cuisines, cost, rating, 
	phoneNumber, timings, deliveryAvailable, bookingAvailable}) => {
		
	return (
		
		<div className="row">
			<div >{console.log(rating)}</div>
			<div className="col-sm-3">
				<img className="img-thumbnail" src={thumb || featuredImage || image_not_found} alt="" style={{marginRight:"auto", marginLeft:"auto", display:"block"}}/>
			</div>
			<div className="col-sm-5">
				<h2 className="result-text-h2">{name}</h2>
				<p className="result-address">{address}</p>
				<br></br>
				<div>
					{bookingAvailable ? (
						<FontAwesomeIcon icon={faCheck} className="result-check-icon" />
						):(
						<FontAwesomeIcon icon={faTimes} className="result-times-icon"/>)} 
					{bookingAvailable ? (
						<span className="result-text-span">Bookings Available</span>
						):(
						<span className="result-text-span">No Bookings</span> )}
				
				</div>
				
				<div>
					{deliveryAvailable ? (
						<FontAwesomeIcon icon={faCheck} className="result-check-icon" />
						):(
						<FontAwesomeIcon icon={faTimes} className="result-times-icon"/>)}
					{deliveryAvailable ? (
						<span className="result-text-span">Delivery Available</span>
						):(
						<span className="result-text-span">No Delivery</span> )}
				</div>

				<br></br>
				<p className="result-text-p"><strong>CUISINES</strong></p>
				<h5 className="result-text-h5">{cuisines}</h5>
				<br></br>

				<p className="result-text-p"><strong>PHONE NUMBER</strong></p>
				<h5 className="result-text-h5">{phoneNumber}</h5>
				<br></br>

				<p className="result-text-p"><strong>OPENING HOURS</strong></p>
				<h5 className="result-text-h5">{timings}</h5>
				
			</div>
			
		</div>
	)
}

export default Restaurant;