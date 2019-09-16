import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import { fetchRates } from "../../api/Api";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			writing: "",
			sgd: 0,
			deccanValue: 0
		};
	}

	async componentDidMount() {
		try {
			const exchange = await fetchRates();
			this.setState({ sgd: exchange.rates.SGD });
		} catch (err) {
			const errorMessage = err.response
				? err.response.data
				: "No response from server";
			console.log(errorMessage);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.writing !== prevState.writing) {
			const newValue = this.state.sgd * Number(this.state.writing);
			return this.setState({ deccanValue: newValue });
		}
	}

	handleInput = event => {
		this.setState({ [event.target.name]: event.target.value });
		return;
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				<main>
					<div>
						<input
							className="input-test"
							name="writing"
							value={this.state.wrting}
							onChange={event => this.handleInput(event)}
						/>
					</div>
					<p>{`${this.state.writing} dollars are ${this.state.deccanValue}`}</p>
				</main>
			</div>
		);
	}
}

export default App;
