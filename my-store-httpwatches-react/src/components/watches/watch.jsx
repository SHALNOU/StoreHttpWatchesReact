import React, { Component } from "react";
import Clock from "../returncCock/clock";
import ClockInput from "../inputClock/input";


export default class Watches extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clocks: [],
		};
	}

	addClock = (clock) => {
		const { clocks } = this.state;
		const newClocks = [...clocks, clock];
		this.setState({ clocks: newClocks });
	};

	removeClock = (index) => {
		const { clocks } = this.state;
		const newClocks = [...clocks];
		newClocks.splice(index, 1);
		this.setState({ clocks: newClocks });
	};

	render() {
		const { clocks } = this.state;
		return (
			<div className="container">
				<h2>Часы различных столиц</h2>
				<ClockInput onAddClock={this.addClock} />
				{clocks.map((clock, index) => (
					<Clock key={index} clock={clock} onRemove={() => this.removeClock(index)} />
				))}
			</div>
		);
	}
}
