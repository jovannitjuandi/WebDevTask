// JavaScript Document
class Weather extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				name: 'Sydney',
				clicked: false,
				currentTemp: 19,
				lowTemp: 16,
				highTemp: 22,
				id: 1
			}
			this.handleClick = this.handleClick.bind(this);
		}
		
		handleClick() {
			this.state.name = 'Melbourne';
			console.log(this.state.name);
		}
		
		render() {
			return (
				<div id="weather-info">
					<a href="#" onclick="handleClick()"><img src="IMG/refresh.png" class="img-fluid"/></a>
				</div>
			);
		}
	}