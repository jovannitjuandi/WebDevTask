// JavaScript Document
class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentID: 0,
			datas: [
			{	id: 0,
				name: 'Sydney',
				low: 16,
				current: 18,
				high: 20,
			 	weather: 'Rainy',
				refreshed: 0
			}, {id: 1,
				name: 'Melbourne',
				low: 7,
				current: 14,
				high: 19,
				weather: 'Sunny',
				refreshed: 0
			}, {id: 2,
				name: 'Brisbane',
				low: 16,
				current: 18,
				high: 20,
				weather: 'Thundershowers',
				refreshed: 0
			}]
		}
	}

	selectWeatherImage() {
		if (this.state.datas[this.state.currentID].refreshed == 1) {
			return this.state.datas[this.state.currentID].weather;
		} else {
			return "refresh";
		}
	}
	
	displayCurrentInfo() {
		if (this.state.datas[this.state.currentID].refreshed) {
		return (
		<div><div class="row" id="current-weather">	
			<div class="col-sm-12">
				<h1>{this.state.datas[this.state.currentID].current}<span>&#176;</span></h1>
			</div>
		</div>
		<div class="row d-flex justify-content-center" id="current-weather">	
			<div class="col-sm-4">
				<h2>{this.state.datas[this.state.currentID].low}<span>&#176;</span></h2>
			</div>
			<div class="col-sm-4">
				<h2>{this.state.datas[this.state.currentID].high}<span>&#176;</span></h2>
			</div>
		</div>
		<div class="row" id="current-weather">	
			<div class="col-sm-12">
				<h1>{this.state.datas[this.state.currentID].weather}</h1>
			</div>
		</div></div>
		)}
	}
	
	render() {
		return (
		<div><div class="row">
			<div class="col-sm-12 d-flex justify-content-center" id="suburb-heading"><h1>{this.state.datas[this.state.currentID]['name']}</h1></div>	
		</div>
		<div class="row">
			<div class="col-sm-4 left d-flex justify-content-center align-items-center" id="stage2-left">
				<img src="IMG/leftArrow.png" class="img-fluid" onClick = {this.handleLeftClick.bind(this)}/>
			</div>
			<div class="col-sm-4 mid d-flex justify-content-center align-items-center" id="stage2-middle">
					<img src={"IMG/".concat(this.selectWeatherImage(), ".png")} class="img-fluid" onClick = {this.handleRefreshClick.bind(this)}/>
			</div>
			<div class="col-sm-4 right d-flex justify-content-center align-items-center" id="stage2-right">
				<img src="IMG/rightArrow.png" class="img-fluid" onClick = {this.handleRightClick.bind(this)}/>
			</div>
		</div>
			{this.displayCurrentInfo()}
		</div>
		);
	}



	handleRefreshClick() {
		this.updateArrayState(this.state.currentID, {refreshed: 1});
	}

	handleLeftClick() {
		switch(this.state.currentID) {
			case 0:
				this.setState({currentID: 2}, () => {console.log('changed')});
				break;
			case 1:
				this.setState({currentID: 0}, () => {console.log('changed')});
				break;
			case 2:
				this.setState({currentID: 1}, () => {console.log('changed')});
				break;
		}
	}
	handleRightClick() {
		switch(this.state.currentID) {
			case 0:
				this.setState({currentID: 1}, () => {console.log('changed')});
				break;
			case 1:
				this.setState({currentID: 2}, () => {console.log('changed')});
				break;
			case 2:
				this.setState({currentID: 0}, () => {console.log('changed')});
				break;
		}
		
	}

	updateArrayState(id, attribute) {
		var index = this.state.datas.findIndex(x=> x.id === id);
		if (index === -1) {
			
		}
		// handle error
		else {
			this.setState({
				datas: [
				 ...this.state.datas.slice(0,index),
				 Object.assign({}, this.state.datas[index], attribute),
				 ...this.state.datas.slice(index+1)
				]
			});
		}
	}
}