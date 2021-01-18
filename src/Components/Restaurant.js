import React from 'react';

const Restaurant = ({key, name , thumb, locality, address, cuisines, cost, rating, phoneNumber, timings}) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>{address}, {locality}</p>
			<img src={thumb} alt=""/>
			<h6>CUISINES</h6>
			<h4>{cuisines}</h4>
			<h6>PHONE NUMBER</h6>
			<h4>{phoneNumber}</h4>
			<h6>OPENING HOURS</h6>
			<h4>Today {timings}</h4>
		</div>
	)
}

export default Restaurant;