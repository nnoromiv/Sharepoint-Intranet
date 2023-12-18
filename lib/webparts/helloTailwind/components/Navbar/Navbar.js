"use client";
import * as React from 'react';
import { Image, Link } from '@fluentui/react';
import { navigation, redtechLogo } from '../../constants';
var Navbar = function (_a) {
    var toBeActive = _a.toBeActive;
    var _b = React.useState(""), active = _b[0], setActive = _b[1];
    console.log(active);
    return (React.createElement("header", { className: "tw-w-full", onLoad: function (e) { e.preventDefault; setActive(toBeActive); } },
        React.createElement("div", { className: "tw-navbar tw-glass lg:px-24" },
            React.createElement(Link, { className: 'tw-mr-auto tw-pl-4', to: "/" },
                React.createElement(Image, { src: redtechLogo, width: 150, alt: 'Logo' })),
            React.createElement("div", { className: "tw-navbar-center tw-flex" },
                React.createElement("ul", { className: "tw-menu tw-menu-horizontal tw-px-1 tw-text-xl tw-font-semibold" }, navigation === null || navigation === void 0 ? void 0 : navigation.map(function (nav, index) { return (nav.link === toBeActive
                    ?
                        React.createElement("li", { key: index },
                            React.createElement(Link, { href: nav.link, className: 'tw-text-red-900' }, nav.title))
                    :
                        React.createElement("li", { key: index },
                            React.createElement(Link, { href: nav.link, className: 'tw-text-red-900' }, nav.title))); }))))));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map