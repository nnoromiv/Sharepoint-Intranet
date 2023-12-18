var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Feeder, Footer, Hero, Navbar } from '.';
var HelloTailwind = /** @class */ (function (_super) {
    __extends(HelloTailwind, _super);
    function HelloTailwind() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloTailwind.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Navbar, { toBeActive: "/" }),
            React.createElement(Hero, null),
            React.createElement(Feeder, null),
            React.createElement(Footer, null)));
    };
    return HelloTailwind;
}(React.Component));
export default HelloTailwind;
//# sourceMappingURL=HelloTailwind.js.map