import axiosCurrencyRates from "./Axios";

export const fetchRates = async () => {
	const response = await axiosCurrencyRates.get("/");
	console.log("res.dat", response.data);
	return response.data;
};

// export const fetchUser = async (username, password) => {
// 	const data = { username, password };
// 	const response = await axios.post("/jwt/login", data);
// 	return response.data;
// };

// export const fetchFeedback = async headers => {
// 	const response = await axios.get("/feedback", { headers });
// 	return response.data;
// };

// export const createFeedback = async (text, session, category, headers) => {
// 	const data = { text, session, category };
// 	const response = await axios.post("/feedback", data, { headers });
// 	return response.data;
// };

// export const deleteFeedback = async (text, category, headers) => {
// 	const data = { text, category };
// 	const response = await axios.delete("/feedback", { data, headers });
// 	return response.data;
// };

// export const archiveFeedback = async headers => {
// 	const response = await axios.put("/feedback/archive", { headers });
// 	return response.data;
// };
