import { Image } from '@fluentui/react';
import * as React from 'react';
import { redtechLogo } from '../../constants';
var Footer = function () {
    return (React.createElement("div", { className: 'tw-bg-gray-100 tw-p-4 tw-mt-5 tw-rounded-t tw-flex tw-justify-between' },
        React.createElement("div", null,
            React.createElement(Image, { src: redtechLogo, width: 150, alt: 'Logo' })),
        React.createElement("div", { className: 'tw-text-white' },
            React.createElement("h2", null, "Copyright \u00A9 2023"),
            React.createElement("p", null, "All rights reserved"))));
};
export default Footer;
//# sourceMappingURL=Footer.js.map