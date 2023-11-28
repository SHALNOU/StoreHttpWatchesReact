import React, { Component } from 'react';

export default class ClockInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			timeZone: '',
		};
	}

	inputNameZone = (event) => {
		this.setState({ name: event.target.value });
	};

	inputTimezone = (event) => {
		this.setState({ timeZone: event.target.value });
	};

	buttonSubmit = (event) => {
		event.preventDefault();
		const { name, timeZone } = this.state;
		const newClock = {
			name,
			timeZone,
			offset: parseInt(timeZone, 10),
		};
		this.props.onAddClock(newClock);
		this.setState({ name: '', timeZone: '' });
	};

	render() {
		const { name, timeZone } = this.state;
		return (
			<form onSubmit={this.buttonSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Название:
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={name}
						onChange={this.inputNameZone}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="timezone" className="form-label">
						Временная зона:
					</label>
					<input
						type="text"
						className="form-control"
						id="timezone"
						value={timeZone}
						onChange={this.inputTimezone}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Добавить
				</button>
			</form>
		);
	}
}
