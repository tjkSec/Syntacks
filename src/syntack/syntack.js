import React, {Component} from 'react';
import {
	def,
	atomic,
	emacs,
	warm,
	cli_win,
	cli_gnome,
	folk,
	distinct
} from './themes.js';
import {parsedFunc} from './syntax.js';
import './syntack.css';
export class Syntack extends Component {
	render() {

		// Redefined this.props.theme
		var theme = def;

		// Theme Coniditoning
		switch (this.props.theme) {
			default:
				theme = def;
				break;
			case 'atomic':
				theme = atomic;
				break;
			case 'emacs':
				theme = emacs;
				break;
			case 'warm':
				theme = warm;
				break;
			case 'cli_win':
				theme = cli_win;
				break;
			case 'cli_gnome':
				theme = cli_gnome;
				break;
			case 'folk':
				theme = folk;
				break;
			case 'distinct':
				theme = distinct;
				break;
		}
		return (
			<div style={theme.wrapper} id='test'>
				<pre id='sytacked' dangerouslySetInnerHTML={{__html : parsedFunc(this.props.code, theme)}}></pre>
			</div>
		);
	}
}
