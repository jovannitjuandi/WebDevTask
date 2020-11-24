// JavaScript Document
class State extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Sydney',
			id: 1
		}
	}

	render() {
		return <h1>{this.state.name}</h1>
	}
}