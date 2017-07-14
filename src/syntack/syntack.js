import React, { Component } from "react";
import {
  def,
  atomic,
  emacs,
  warm,
  cli_win,
  cli_gnome,
  folk,
  distinct,
  dracula,
  github
} from "./themes.js";
import { parsedFunc } from "./syntax.js";
export class SyntackThemes {
  constructor(
    color,
    bgColor,
    spineColor,
    quotesColor,
    conditionColor,
    globalsColor,
    standardMethodsColor,
    specialMethodsColor,
    commentColor
  ) {
    this.color = color;
    this.bgColor = bgColor;
    this.spineColor = spineColor;
    this.quotesColor = quotesColor;
    this.conditionColor = conditionColor;
    this.globalsColor = globalsColor;
    this.standardMethodsColor = standardMethodsColor;
    this.specialMethodsColor = specialMethodsColor;
    this.commentColor = commentColor;
  }
  compiled() {
    var theme = {
      wrapper: {
        width: "100%",
        height: "100%",
        paddingLeft: 40,
        overflow: "scroll",
        color: this.color,
        backgroundColor: this.bgColor,
        borderRadius: 5,
        fontWeight: "300",
        fontSize: 15,
        borderLeft: `40px solid ${this.spineColor}`,
        fontFamily: "'Cousine', monospace"
      },
      quotes: `color:${this.quotesColor}`,
      condition: `color:${this.conditionColor}`,
      globals: `color:${this.globalsColor}`,
      basicMethod: `color:${this.standardMethodsColor}`,
      special: `color:${this.specialMethodsColor}`,
      comment: `color:${this.commentColor}font-style: italic;`
    };
    return theme;
  }
}
export class Syntack extends Component {
  render() {
    // Redefined this.props.theme
    var theme = def;

    // Theme Coniditoning
    if (this.props.customTheme === undefined) {
      switch (this.props.theme) {
        default:
          theme = def;
          break;
        case "atomic":
          theme = atomic;
          break;
        case "emacs":
          theme = emacs;
          break;
        case "warm":
          theme = warm;
          break;
        case "cli_win":
          theme = cli_win;
          break;
        case "cli_gnome":
          theme = cli_gnome;
          break;
        case "folk":
          theme = folk;
          break;
        case "distinct":
          theme = distinct;
          break;
    		case 'dracula':
    		  theme = dracula;
    		  break;
        case 'github':
          theme = github;
          break;
      }
    } else {
      theme = this.props.customTheme;
    }
    console.log(JSON.stringify(def))
    return (
      <div style={theme.wrapper} id="test">
        <pre
          id="sytacked"
          dangerouslySetInnerHTML={{
            __html: parsedFunc(this.props.code, theme)
          }}
        />
      </div>
    );
  }
}
