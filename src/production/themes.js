/* BUG: Highlights the numbers within the <span/> style.
* numerical:'color:rgb(218, 157, 19)', */

const __static__ = {
  width: "100%",
  height: "100%",
  paddingLeft: 40,
  overflow: "scroll",
  borderRadius: 5,
  fontWeight: "300",
  fontFamily: "'Cousine', monospace",
  fontSize: 15
};

export const def = {
  wrapper: {
    color: "rgb(83, 83, 83)",
    backgroundColor: "rgb(246, 246, 246)",
    borderLeft: "40px solid rgb(232, 232, 232)"
  },
  quotes: "color:rgb(124, 210, 106);",
  condition: "color:rgb(143, 104, 238);",
  globals: "color:rgb(11, 189, 200);",
  basicMethod: "color:rgb(55, 159, 255);",
  special: "color:rgb(42, 140, 230);",
  comment: "color:rgb(196, 196, 196);font-style: italic;"
};
Object.assign(def.wrapper, __static__);

export const atomic = {
  wrapper: {
    color: "rgb(210, 210, 210)",
    backgroundColor: "rgb(43, 43, 43)",
    borderLeft: "40px solid rgb(33, 33, 33)"
  },
  quotes: "color:rgb(210, 206, 106);",
  condition: "color:rgb(56, 252, 131);",
  globals: "color:rgb(40, 218, 197);",
  basicMethod: "color:rgb(55, 159, 255);",
  special: "color:rgb(237, 74, 103)",
  comment: "color:rgb(82, 82, 82);font-style: italic;"
};
Object.assign(atomic.wrapper, __static__);

export const emacs = {
  wrapper: {
    color: "rgb(0, 0, 0)",
    backgroundColor: "rgb(244, 244, 244)",
    borderLeft: "40px solid rgb(235, 235, 235)"
  },
  quotes: "color:rgb(136, 65, 55);",
  condition: "color:rgb(207, 50, 232);",
  globals: "color:rgb(154, 105, 33);",
  basicMethod: "color:rgb(0, 41, 255);",
  special: "color:rgb(20, 0, 255)",
  comment: "color:rgb(186, 66, 45);"
};
Object.assign(emacs.wrapper, __static__);

export const warm = {
  wrapper: {
    color: "rgb(170, 139, 139)",
    backgroundColor: "rgb(244, 244, 244)",
    borderLeft: "40px solid rgb(242, 223, 223)"
  },
  quotes: "color:rgb(233, 163, 105)",
  condition: "color:rgb(255, 92, 0);",
  globals: "color:rgb(242, 53, 53);",
  basicMethod: "color:rgb(222, 199, 47);",
  special: "color:rgb(180, 126, 126)",
  comment: "color:rgb(209, 180, 180);font-style: italic;"
};
Object.assign(warm.wrapper, __static__);

export const cli_win = {
  wrapper: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(0, 0, 0)",
    borderLeft: "40px solid rgb(29, 28, 28)"
  },
  quotes: "color:#C0C0C0",
  condition: "color:#00FF00",
  globals: "color:#00FEFE;",
  basicMethod: "color:#0000FF",
  special: "color:#800000",
  comment: "color:rgb(73, 73, 73);font-style: italic;"
};
Object.assign(cli_win.wrapper, __static__);

export const cli_gnome = {
  wrapper: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "#300A24",
    borderLeft: "40px solid #29081f"
  },
  quotes: "color:rgb(47, 87, 81)",
  condition: "color:#8AE234",
  globals: "color:rgb(209, 84, 240);",
  basicMethod: "color:rgb(67, 103, 14)",
  special: "color:#98ab21",
  comment: "color:rgb(153, 153, 153);font-style: italic;"
};
Object.assign(cli_gnome.wrapper, __static__);

export const folk = {
  wrapper: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "#312B38",
    borderLeft: "40px solid #2d2834"
  },
  quotes: "color:rgb(255, 237, 213)",
  condition: "color:#E7B186",
  globals: "color:rgb(219, 188, 175);",
  basicMethod: "color:#AB8CE1",
  special: "color:#996945",
  comment: "color:rgb(75, 75, 75);font-style: italic;"
};
Object.assign(folk.wrapper, __static__);

export const distinct = {
  wrapper: {
    color: "rgb(255, 255, 255)",
    backgroundColor: "#282C34",
    borderLeft: "40px solid #252830"
  },
  quotes: "color:rgb(255, 215, 255)",
  condition: "color:rgb(255, 70, 166)",
  globals: "color:rgb(114, 63, 222);",
  basicMethod: "color:#9b93f7",
  special: "color:#55a8ec",
  comment: "color:rgb(75, 75, 75);font-style: italic;"
};
Object.assign(distinct.wrapper, __static__);

export const dracula = {
  wrapper: {
    color: "rgb(180, 177, 177)",
    backgroundColor: "#282A36",
    borderLeft: "40px solid #232430"
  },
  quotes: "color:#a2f6b8",
  condition: "color:#78d4e8",
  globals: "color:rgb(158, 124, 228);",
  basicMethod: "color:#50FA7B",
  special: "color:#8caefa",
  comment: "color:rgb(62, 62, 62);font-style: italic;"
};
Object.assign(dracula.wrapper, __static__);

export const github = {
  wrapper: {
    color: "#24292E",
    backgroundColor: "rgb(246, 246, 246)",
    borderLeft: "40px solid rgb(238, 238, 238)"
  },
  quotes: "color:#17256f",
  condition: "color:#DC3A59",
  globals: "color:#449f63",
  basicMethod: "color: #2E5CC8",
  special: "color:#6D9152",
  comment: "color:rgb(89, 89, 89);font-style: italic;"
};
Object.assign(github.wrapper, __static__);

export const ice = {
  wrapper: {
    color: "#d4d4d4",
    backgroundColor: "rgb(66, 62, 116)",
    borderLeft: "40px solid rgb(54, 50, 96)"
  },
  quotes: "color:#8a9ba1",
  condition: "color:#82c0d1",
  globals: "color:#7ec295",
  basicMethod: "color: #58c9ae",
  special: "color:#bccdae",
  comment: "color:rgb(131, 131, 131);font-style: italic;"
};
Object.assign(ice.wrapper, __static__);

export const brass = {
  wrapper: {
    color: "#dbdbdb",
    backgroundColor: "rgb(96, 86, 75)",
    borderLeft: "40px solid rgb(85, 76, 66)"
  },
  quotes: "color:#d2b6af",
  condition: "color:#ff5a36",
  globals: "color:#c97e7e",
  basicMethod: "color: #c17a5b",
  special: "color:#bdb35c",
  comment: "color:rgb(131, 131, 131);font-style: italic;"
};
Object.assign(brass.wrapper, __static__);
