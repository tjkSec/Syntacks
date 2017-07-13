export var parsedFunc = (__code__, __theme__) => {
	var strReg1 = /"(.*?)"/g,
	  strReg2 = /'(.*?)'/g,
	  specialReg = /\b(new|const|class|let|var|if|do|function|while|switch|for|forEach|in|continue|break|return)(?=[^\w])/g,
	  specialJsGlobReg = /\b(document|window|Array|String|Object|Number|\$)(?=[^\w])/g,
	  specialJsReg = /\b(getElementsBy(TagName|ClassName|Name)|getElementById|typeof|instanceof|alert)(?=[^\w])/g,
	  specialMethReg = /\b(indexOf|match|split|splice|replace|toString|length|push|join|textContent)(?=[^\w])/g,
	  specialCommentReg = /(\/\*.*\*\/)/g,
	  inlineCommentReg = /(\/\/.*)/g;
	  /* BUG: Highlights the numbers within the <span/> style.
	  * numerical_ = /([0-9].*?)/g; */
	var code = __code__,
	  parsed = code.replace(
		strReg1,
		`<span style="${__theme__.quotes}">"$1"</span>`
	  );
	/* BUG: Highlights the numbers within the <span/> style.
	* parsed = parsed.replace(numerical_, `<span style="${__theme__.numerical}">$1</span>`); */
	parsed = parsed.replace(strReg2, `<span style="${__theme__.quotes}">'$1'</span>`);
	parsed = parsed.replace(specialReg, `<span style="${__theme__.condition}">$1</span>`);
	parsed = parsed.replace(
	  specialJsGlobReg,
	  `<span style="${__theme__.globals}">$1</span>`
	);
	parsed = parsed.replace(specialJsReg, `<span style="${__theme__.special}">$1</span>`);
	parsed = parsed.replace(
	  specialMethReg,
	  `<span style='${__theme__.basicMethod}'>$1</span>`
	);
	parsed = parsed.replace(
	  specialCommentReg,
	  `<span style='${__theme__.comment}'>$1</span>`
	);
	return parsed = parsed.replace(
	  inlineCommentReg,
	  `<span style="${__theme__.comment}">$1</span>`
	);
}
