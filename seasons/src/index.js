import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor(props) {
		// React.Component has a constructor. This overrides that function. Super makes sure that the parents constructor function is still called so we can use its functionality.
		super(props);

		// Only time we do direct assignment.
		this.state = { lat: null };

		window.navigator.geolocation.getCurrentPosition(
			position => {
				// need to call setState. No direct assignments!
				this.setState({ lat: position.coords.latitude });
			},
			err => console.log(err)
		);
	}
	//React says we must define render!
	render() {
		return <div>Latitude: {this.state.lat}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
