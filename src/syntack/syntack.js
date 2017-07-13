import React, {Component} from 'react';
import {def, atomic, emacs, warm, cli_win} from './themes.js';
import {parsedFunc} from './syntax.js'
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
				break
			case 'emacs':
				theme = emacs;
				break
			case 'warm':
				theme = warm;
				break
			case 'cli_win':
				theme = cli_win;
				break;
		}

		return (
			<div style={theme.wrapper} id='test'>
				<pre dangerouslySetInnerHTML={{__html : parsedFunc(this.props.code, theme)}}></pre>
			</div>
		);
	}
}
