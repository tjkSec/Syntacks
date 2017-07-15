<img src='http://i.imgur.com/sRlENh2.jpg'/>

> Dependency free syntax highlighter for react.

![](http://i.imgur.com/y2xjYfG.gif)

The component is scaled 100% wide and 100% high relative to the div .wrapper which contains it. This allows for a full customization for height, width and other things such as transitions and box shadows.

Download via npm: https://www.npmjs.com/package/syntacks

``` npm install syntacks ```

Demo: <https://git.io/vQ9Nj>

Upload/browse themes: <https://goo.gl/iUrPZ7>

## Installation
Copy the file your download like so...
<img src="http://i.imgur.com/HbLuHKU.gif"/>

Import it into your file...
<img src="http://i.imgur.com/HwMK5Lv.gif"/>

Add your syntack box...
<img src="http://i.imgur.com/2i7itWY.gif"/>

## Current Themes

Default themes are found here <https://git.io/vQ9Nj> and user uploaded custom themes here <https://goo.gl/iUrPZ7>

## Creating custom themes

To create or use [custom themes](), all you have to do is define one with its properties like so. The parameters follow the below template.

```javascript
/*
  > color
  > bgColor
  > spineColor
  > quotesColor
  > conditionColor
  > globalsColor
  > standardMethodsColor
  > specialMethodsColor
  > commentColor
*/
```

### Defining template and its theme.

```javascript
import { Syntack, SyntackThemes } from '../syntack/syntack.js';

const myCoolTheme = new SyntackThemes(
    'rgb(255, 255, 255)',
    'rgb(41, 43, 57)',
    'rgb(29, 31, 42)',
    'rgb(138, 154, 181)',
    'rgb(47, 162, 124)',
    'rgb(203, 89, 192)',
    'rgb(230, 28, 26)',
    'rgb(174, 95, 230)',
    'rgb(67, 135, 153)'
);

/* Note: Don't get confused,
* you don't need to specifically
* use rgb it's just what I am using in this example. */
```

### Adding and compling your theme.

```javascript
// Use the customTheme prop instead of the default, theme.
<Syntack customTheme={myCoolTheme.compiled()} code={myCode}/>
```

### It works!

![](http://i.imgur.com/aY0qpH4.png)

## Real time editor /w syntax

In order to create an input into the syntack component we just have to use some super simple vanilla react.

```javascript
import React, {Component} from 'react';
import {Syntack} from '../syntack/syntack.js';

class myComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { editedCode: ''};
  }
  handleCode(e) {
    this.setState({editedCode: e.target.value});
  }
  render() {
    const SyntaxOutput = {
      "width":"500px",
      "height":"350px",
      "position":"absolute",
      "transform":"translate(-50%, -50%)",
      "left":"50%",
      "top":"40%"
    };


    const defaultInput = {
      "width":"500px",
      "height":"200px",
      "position":"absolute",
      "transform":"translate(-50%, -50%)",
      "left":"50%",
      "top":"80%"
    };

    return(
        <div>
          <div style={SyntaxOutput}>
            <Syntack theme='github' code={this.state.editedCode}/>
          </div>
          <textarea onChange={e => this.handleCode(e)} style={defaultInput} />
        </div>
      );
    )
  }
}
```
