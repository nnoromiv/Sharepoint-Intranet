import * as React from 'react';
import { announcements } from '../../constants';
import { CarouselComponent } from '../Hero/Hero';
var Feeder = function () {
    return (React.createElement("div", { className: 'tw-w-full tw-gap-1 tw-grid tw-grid-cols-2 tw-max-sm:tw-grid-cols-1' },
        React.createElement("div", { className: 'tw-w-full tw-border tw-text-center tw-rounded-lg' },
            React.createElement("h1", { className: 'tw-text-black tw-pt-3 tw-text-3xl tw-font-extrabold' }, " Announcement"),
            React.createElement("div", { className: 'tw-p-3 tw-text-left tw-overflow-hidden tw-w-full' },
                React.createElement(CarouselComponent, { element: announcements }))),
        React.createElement("div", { className: 'tw-w-full' },
            React.createElement("div", { className: 'tw-border tw-mb-3 tw-p-3 tw-border-red-900 tw-text-left tw-rounded-lg' },
                React.createElement("h1", { className: 'tw-pt-3 tw-text-red-900 tw-text-center tw-text-3xl tw-font-extrabold' }, " Projects "),
                React.createElement("ul", null,
                    React.createElement("li", { className: 'tw-m-2' },
                        React.createElement("p", { className: 'tw-text-lg tw-text-red-800 tw-font-bold' },
                            "Redpay: ",
                            React.createElement("span", { className: 'tw-text-lg tw-text-red-900 tw-font-normal' }, "Our customers and partners, including some of the biggest companies in Africa, rely on our solutions to serve and secure their organizations."))),
                    React.createElement("li", { className: 'tw-m-2' },
                        React.createElement("p", { className: 'tw-text-lg tw-text-red-800 tw-font-bold' },
                            "IT Consult: ",
                            React.createElement("span", { className: 'tw-text-lg tw-text-red-900 tw-font-normal' }, "Our customers and partners, including some of the biggest companies in Africa, rely on our solutions to serve and secure their organizations."))),
                    React.createElement("li", { className: 'tw-m-2' },
                        React.createElement("p", { className: 'tw-text-lg tw-text-red-800 tw-font-bold' },
                            "Services: ",
                            React.createElement("span", { className: 'tw-text-lg tw-text-red-900 tw-font-normal' }, "Our customers and partners, including some of the biggest companies in Africa, rely on our solutions to serve and secure their organizations."))))),
            React.createElement("div", { className: 'tw-border tw-mb-3 tw-p-3 tw-border-red-900 tw-text-left tw-rounded-lg' },
                React.createElement("h1", { className: 'tw-pt-3 tw-text-red-900 tw-text-center tw-text-3xl tw-font-extrabold' }, " Products "),
                React.createElement("ul", null,
                    React.createElement("li", { className: 'tw-m-2' },
                        React.createElement("p", { className: 'tw-text-lg tw-text-red-800 tw-font-bold' },
                            "Redpay: ",
                            React.createElement("span", { className: 'tw-text-lg tw-text-red-900 tw-font-normal' }, "Our customers and partners, including some of the biggest companies in Africa."))),
                    React.createElement("li", { className: 'tw-m-2' },
                        React.createElement("p", { className: 'tw-text-lg tw-text-red-800 tw-font-bold' },
                            "Redpay: ",
                            React.createElement("span", { className: 'tw-text-lg tw-text-red-900 tw-font-normal' }, "Our customers and partners, including some of the biggest companies in Africa."))))))));
};
export default Feeder;
//# sourceMappingURL=Feeder.js.map