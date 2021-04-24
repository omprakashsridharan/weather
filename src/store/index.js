import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";

const API_KEY = "251a405e70a8beaa53d899e5b91ae17c";

// Ex: http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=251a405e70a8beaa53d899e5b91ae17c

const weatherInitialState = {
	currentCity: "",
	coord: {
		lon: 0.0,
		lat: 0.0,
	},
	weather: [],
	main: {
		temp: 0.0,
		feels_like: 0.0,
		temp_min: 0.0,
		temp_max: 0.0,
		pressure: 0,
		humidity: 0,
	},
	name: "",
	wind: {
		speed: 0.0,
	},
};

const weatherReducer = (state = weatherInitialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default createStore(weatherReducer, applyMiddleware(ReduxThunk));
