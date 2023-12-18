import { ImageFit } from "@fluentui/react";
import * as React from "react";
export interface NavbarProps {
    toBeActive: string;
}
declare type imageSlides = {
    imageSrc: string;
    title?: string;
    titleStyle?: React.CSSProperties;
    imageFit?: ImageFit;
    description?: string;
    imgStyle?: React.CSSProperties;
    detailsStyle?: React.CSSProperties;
    style?: React.CSSProperties;
};
export declare type CarouselComponentProps = {
    element: imageSlides[];
};
export {};
//# sourceMappingURL=index.d.ts.map