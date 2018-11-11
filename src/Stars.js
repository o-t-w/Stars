import React, { useState } from 'react';

function Star(props) { 
	const starButtonStyle = {
		border: 0,
		fontSize: '23px',
		color: 'transparent',
        backgroundColor: (props.number > props.rating) ? 'gray' : 'gold',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text'
	}

	return(
		<button type="button" onClick={() => props.setRating(props.number)} style={starButtonStyle}>⭐</button>
	)
}

export default function Stars() {
	const [rating, setRating] = useState(0);

	const numbers = [1,2,3,4,5];
	
	const stars = numbers.map((number) => {
		return (<Star setRating={setRating} key={number} rating={rating} number={number}/>)
	})

	return (
		<div>
			{stars}
		</div>
	)
}