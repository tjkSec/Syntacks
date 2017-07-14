# Syntacks
> Dependency free syntax highlighter for react.

This is still under development, I am still adding things and fixing bugs. When the I reach a point of stabiltity I am going to clean up this repo and make sure everything is optimised, clean and minimized.
I have created some default themes below if you want to see my progress as of late.
https://git.io/vQ9Nj

## Progress [13/07/2017]
- [ ] Other languages support
- [ ] More themes!
- [X] More customization
- [ ] Optimization
- [ ] Real time editability
- [ ] File size is current 20kb (not minimized or optimized), make this lower.

## Current Themes
Again demonstrated <a href='https://git.io/vQ9Nj'>here</a>, but here is a complete list.
- default(def)
- atomic
- emacs
- warm
- cli-windows(cli_win)
- cli-ubuntu/gnome(cli_gnome)
- folk
- distinct

## Creating custom themes
To create your own custom theme all you have to do is define one with its properties like so...
Note: The parameters follow the below template...
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

#### So lets define our template and it's syntax.

```javascript
import {Syntack, SyntackThemes} from '../syntack/syntack.js';

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

// Note: you don't need to specifically use rgb it's just what I am using in this example.
```

#### Finally add your cool new theme to your Syntack pre component.
```javascript
<Syntack customTheme={myCoolTheme.compiled()} code={myCode}/>
```

#### And wallaa your done!
<img src='http://i.imgur.com/aY0qpH4.png'/>
