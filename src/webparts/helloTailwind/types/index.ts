import { ImageFit } from "@fluentui/react"
import * as React from "react"

export interface NavbarProps {
    toBeActive: string,
}

type imageSlides = {
    imageSrc: string,
    title?: string,
    titleStyle?: React.CSSProperties,
    imageFit?: ImageFit,
    description?: string,
    imgStyle?: React.CSSProperties,
    detailsStyle?: React.CSSProperties
    style?: React.CSSProperties,
}

export type CarouselComponentProps = {
    element: imageSlides[],
}