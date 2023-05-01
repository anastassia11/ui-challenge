"use strict";
exports.__esModule = true;
var Header_1 = require("@/components/header/Header");
var google_1 = require("next/font/google");
var inter = google_1.Inter({ subsets: ["latin"] });
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1.Header, null)));
}
exports["default"] = Home;
