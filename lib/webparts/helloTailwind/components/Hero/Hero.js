import * as React from 'react';
import { imageSlides as IMAGESLIDES } from '../../constants';
import { Carousel, CarouselButtonsDisplay, CarouselButtonsLocation, CarouselIndicatorsDisplay } from '@pnp/spfx-controls-react';
import styles from '../HelloTailwind.module.scss';
export var CarouselComponent = function (_a) {
    var element = _a.element;
    return (React.createElement("div", { className: "tw-w-full tw-mt-5" },
        React.createElement(Carousel, { buttonsLocation: CarouselButtonsLocation.center, buttonsDisplay: CarouselButtonsDisplay.buttonsOnly, isInfinite: true, element: element, pauseOnHover: true, contentContainerStyles: styles.containerStyles, indicatorsDisplay: CarouselIndicatorsDisplay.block, slide: true })));
};
var Hero = function () {
    return (React.createElement("div", { className: "tw-w-full tw-overflow-hidden tw-md:py-10 tw-max-sm:px-5" },
        React.createElement(CarouselComponent, { element: IMAGESLIDES })));
};
export default Hero;
//# sourceMappingURL=Hero.js.map