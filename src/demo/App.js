import React, {Component} from 'react';
import {Syntack} from '../syntack/syntack.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {name: 'default'};
		this.state = {theme: 'def'};
	}
	handleChange(e) {
		this.setState({theme: e.target.value});
	}
	render() {
		const mySyntaxWrapper = {
			width: '550px',
			height: '350px',
			position: 'absolute',
			transform: 'translate(-50%, -50%)',
			left: '50%',
			top: '30%',
			'box-shadow':'0px 2px 26px -3px rgba(0,0,0,0.35)'
		}

		const SelectTheme = {
			width: '200px',
			height: '30px',
			position: 'absolute',
			transform: 'translate(-50%, -50%)',
			left: '96.5%',
			'-moz-appearance':'none',
			'-webkit-appearance':'none',
			top: '115%',
			'background-color':'rgb(232, 232, 232)',
			'border':'none',
			'padding':'2px'
		}

		const Header = {
			'font-family':"'Cousine', monospace",
			color:'rgb(65, 65, 65)',
			'background-color':'#E8E8E8',
			'padding-top':'13px',
			'padding-bottom':'13px',
			'margin-top':'30px',
			'width':'598px',
			'padding-left':'35px',
			'box-shadow':'0px 2px 26px -3px rgba(0,0,0,0.35)'
		}

		const myCode = `
function iHateDays() {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
  const noDays = [];
  days.forEach((el, id) => {
    const x = el.split("");
    x.splice(-3);
    noDays.push(x.join(""));
  });
  return noDays.join(" | ");
}

// I really hate the days of the week...
document.getElementById('#myheader').textContent = iHateDays();

/* I really, really hate them... */

`;
		return (
			<div>
				<div style={mySyntaxWrapper}>
					<Syntack theme={this.state.theme} code={myCode}/>
					<h4 style={Header}>
						Choose a theme! Current: {this.state.theme}
					</h4>
					<select style={SelectTheme} value={this.state.theme} onChange={e => this.handleChange(e)}>
						<option value="def">default</option>
						<option value="atomic">atomic</option>
						<option value="emacs">emacs</option>
						<option value="warm">warm</option>
						<option value="cli_win">cli-windows</option>
						<option value='cli_gnome'>cli-ubuntu/gnome</option>
						<option value='folk'>folk</option>
						<option value='distinct'>distinct</option>
					</select>
				</div>
				<span className='github'><a href='github.com'>github</a></span>
			</div>
		);
	}
}

export default App;
