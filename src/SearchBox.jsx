import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox() {

    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b24b0cb871a5b46bebaaf3a44749d2eb";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return (

        <div className="SearchBox">
            <h3>Search for Weather</h3>

            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} 
            onChange={handleChange}/>

            <br></br> <br></br>
            <Button variant="contained" type="submit">
        Send
      </Button>
            </form>
        </div>
    )
}