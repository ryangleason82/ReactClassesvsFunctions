import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor(props) {
		// React.Component has a constructor. This overrides that function. Super makes sure that the parents constructor function is still called so we can use its functionality.
		super(props);

		this.state = { lat: null };
	}

	//React says we must define render!
	render() {
		window.navigator.geolocation.getCurrentPosition(
			position => console.log(position),
			err => console.log(err)
		);
		return <div>Latitude: </div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
