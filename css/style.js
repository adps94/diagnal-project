import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "100%",
        "overflow": "hidden",
        "backgroundColor": "black !important"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "100%",
        "overflow": "hidden",
        "backgroundColor": "black !important"
    },
    "navbar": {
        "borderRadius": "0px !important"
    },
    "nav-home": {
        "zIndex": 10,
        "height": "65px !important",
        "backgroundImage": "linear-gradient(to top,#000000,#000000 103%) !important",
        "border": "none !important",
        "WebkitBoxShadow": "0px -2px 46px 30px rgba(0,0,0,0.87) !important",
        "MozBoxShadow": "0px -2px 46px 30px rgba(0,0,0,0.87) !important",
        "boxShadow": "0px -2px 30px 15px rgba(0,0,0,1) !important",
        "backgroundColor": "#060606 !important",
        "marginBottom": "0px !important"
    },
    "nav-search": {
        "backgroundColor": "white !important",
        "marginBottom": "0px !important"
    },
    "navbar-header": {
        "width": "100% !important"
    },
    "navbar-text": {
        "position": "absolute",
        "width": "75%",
        "left": 50,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "fontSize": 22,
        "color": "white !important",
        "lineHeight": 1,
        "fontFamily": "'Titillium Web', sans-serif"
    },
    "video-list": {
        "position": "absolute",
        "top": 70,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "overflowY": "scroll"
    },
    "search-list": {
        "position": "absolute",
        "top": 52,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "overflowY": "scroll",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "navbar-nav": {
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important"
    },
    "container-fluid": {
        "paddingTop": "10px !important",
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important",
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important"
    },
    "marg-0": {
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important"
    },
    "search-video": {
        "fontSize": 18,
        "paddingTop": 12,
        "paddingRight": 20,
        "paddingBottom": 12,
        "paddingLeft": 20,
        "border": "none",
        "width": "40%"
    },
    "a:focus a:hover": {
        "background": "transparent !important"
    },
    "search-section": {
        "paddingTop": "0px !important"
    },
    "outer": {
        "display": "table",
        "position": "absolute",
        "height": "92%",
        "width": "100%"
    },
    "middle": {
        "display": "table-cell",
        "verticalAlign": "middle"
    },
    "inner": {
        "marginLeft": "auto",
        "marginRight": "auto",
        "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
        "transition": "0.3s",
        "paddingTop": 35,
        "paddingRight": 35,
        "paddingBottom": 35,
        "paddingLeft": 35
    },
    "input:focus": {
        "outline": "none"
    },
    "select:focus": {
        "outline": "none"
    },
    "textarea:focus": {
        "outline": "none"
    },
    "button:focus": {
        "outline": "none"
    },
    "arrow-icon": {
        "float": "left",
        "height": 50,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "arrow-icon-img": {
        "width": 20
    },
    "search-icon": {
        "float": "right",
        "height": 55,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "cursor": "pointer"
    },
    "search-icon-left": {
        "float": "left",
        "height": 50,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "cursor": "pointer"
    },
    "cancel-search": {
        "float": "right",
        "height": 50,
        "paddingTop": 13,
        "paddingRight": 15,
        "paddingBottom": 13,
        "paddingLeft": 15,
        "cursor": "pointer",
        "borderLeft": "1px solid black",
        "textDecoration": "none"
    },
    "clear-search": {
        "float": "right",
        "height": 50,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "textDecoration": "none"
    },
    "search-bar-icons": {
        "fontSize": "20px !important",
        "color": "black"
    },
    "cancel-search-text": {
        "fontSize": 17,
        "color": "black",
        "fontFamily": "'Titillium Web', sans-serif"
    },
    "search-icon-img": {
        "width": 20,
        "paddingBottom": 10,
        "marginLeft": 16
    },
    "search-text": {
        "color": "white",
        "fontSize": 22,
        "fontFamily": "'Titillium Web', sans-serif"
    },
    "video-profile": {
        "float": "left",
        "width": "33%",
        "height": 200,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "marginBottom": 32
    },
    "video-profile-img": {
        "height": "90%",
        "width": "100%",
        "backgroundSize": "contain"
    },
    "video-profile-desc": {
        "color": "white",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "fontFamily": "'Titillium Web', sans-serif"
    },
    "empty-video-list": {
        "fontSize": 20,
        "color": "white",
        "textAlign": "center"
    }
});