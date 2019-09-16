import axios from "axios";

const axiosCurrencyRates = axios.create({
	baseURL: process.env.REACT_APP_RATES
	// baseURL: process.env.REACT_APP_HOST
});

export default axiosCurrencyRates;