export var parsedFunc = (__code__, __theme__) => {
  var strReg1 = /"(.*?)"/g,
    strReg2 = /'(.*?)'/g,
    specialReg = /\b(function|break|const|let|var|switch|for|if|export|import|module.exports|else|delete|extends|super|constructor|catch|class|Class|catch|default|do|new|return|yeild|with|while|void|throw|try|while|finally|in|public|static|setInterval|setTimeout|clearInterval|RegExp)(?=[^\w])/g,
    specialJsGlobReg = /\b(document|Promise|window|Array|console|Object|Boolean|null|undefined|Number|String|Symbol|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|this|\$)(?=[^\w])/g,
    specialJsReg = /\b(getElementsBy(TagName|ClassName|Name|Id)|instanceof|alert|log|warn|querySelector|JSON|stringify)(?=[^\w])/g,
    specialMethReg = /\b(indexOf|match|split|splice|replace|toString|length|push|join|textContent|unshift|concat|abs|acos|acosh|add|addSaturate|allTrue|apply|asin|big|bind|blink|bold|call|cbrt|ceil|charAt|charCodeAt|check|clear|compile|construct|copy|copyWithin|cosh|cos|create|defineProperties|defineProperty|div|entries|map|filter|fill|get|set|getDay|getDate|getFloat32|getFullYear|getHours|getInt16)(?=[^\w])/g,
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
  parsed = parsed.replace(
    strReg2,
    `<span style="${__theme__.quotes}">'$1'</span>`
  );
  parsed = parsed.replace(
    specialReg,
    `<span style="${__theme__.condition}">$1</span>`
  );
  parsed = parsed.replace(
    specialJsGlobReg,
    `<span style="${__theme__.globals}">$1</span>`
  );
  parsed = parsed.replace(
    specialJsReg,
    `<span style="${__theme__.special}">$1</span>`
  );
  parsed = parsed.replace(
    specialMethReg,
    `<span style='${__theme__.basicMethod}'>$1</span>`
  );
  parsed = parsed.replace(
    specialCommentReg,
    `<span style='${__theme__.comment}'>$1</span>`
  );

  return (parsed = parsed.replace(
    inlineCommentReg,
    `<span style="${__theme__.comment}">$1</span>`
  ));
};
