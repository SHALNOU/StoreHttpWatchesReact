import React, { Component } from "react";
import './clock.css';

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: new Date(),
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.updateTime();
		}, 1000);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.clock.timeZone !== this.props.clock.timeZone) {
			this.updateTime();
		}
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	handleRemove = () => {
		const { onRemove } = this.props;
		if (typeof onRemove === 'function') {
			onRemove();
		}
	};

	updateTime() {
		const { clock } = this.props;
		const currentTime = new Date();
		const timezoneOffset = clock.offset * 60 * 60 * 1000;
		const newTime = new Date(currentTime.getTime() + timezoneOffset);
		this.setState({ currentTime: newTime });
	}

	render() {
		const { clock } = this.props;
		const { currentTime } = this.state;
		const hours = currentTime.getHours();
		const minutes = currentTime.getMinutes();
		const seconds = currentTime.getSeconds();

		const hourAngle = (hours % 12) * 30 + minutes / 2;
		const minuteAngle = minutes * 6 + seconds / 10;
		const secondAngle = seconds * 6;

		return (
			<div className="clock">
				<button className="remove-button" onClick={this.handleRemove}>
					&#10005;
				</button>
				<h3 className="clock-name">{clock.name}</h3>
				<div className="clock-face">
					<div
						className="hand hour-hand"
						style={{ transform: `rotate(${hourAngle}deg)` }}
					></div>
					<div
						className="hand minute-hand"
						style={{ transform: `rotate(${minuteAngle}deg)` }}
					></div>
					<div
						className="hand second-hand"
						style={{ transform: `rotate(${secondAngle}deg)` }}
					></div>
				</div>
			</div>
		);
	}
}
