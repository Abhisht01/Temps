import React from "react";
import { useState, useEffect } from "react";
import './main.css';
import 'tachyons/css/tachyons.min.css';
//import "tailwindcss/css/tailwind.min.css";
import './styles.css';

const About=()=> {
	const [city, setCity]=useState(null);
const [search, setSearch]= useState("Delhi");
useEffect(()=> {
	const fetchApi= async()=>{
		const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=46fd6c37b975dc4eb8838aa5bbd2b67c`;
	  	const response = await fetch(url);
      const resJson = await response.json();
			console.log(resJson);
				setCity(resJson.main);
				};
	fetchApi();
},[search])
	
  return (
		<>
		<div className="tbody box link black db mw5 br2 ba b--black-10 shadow-4 items-center decoration-clone bg-gradient-to-b from-green-400 to-blue-500 py-8 place-self-center bg-purple-900">
		 <div className="inputData db mb2 mw-100  ">
	         <input type="search" className="inputField" onChange={(event)=>{setSearch(event.target.value) }} /> 
					 </div>
	        {!city ? (<p className="errorMsg">No Data Found</p>) : (<main>
					<div className="info">
					<h3 className="location">
					<i className="fas fa-street-view"> </i>{search}
					</h3>
					<h1 className="temp font-mono">{city.temp}°C</h1>
					
				<h3 className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>
					</div>
					<div className="wave -one"></div>
					<div className="wave -two"></div>
					<div className="wave -three"></div>
					</main>)}
			</div>
					</>
					);
}
export default About;