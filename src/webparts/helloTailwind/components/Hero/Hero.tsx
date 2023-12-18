import * as React from 'react'
import { CarouselComponentProps } from '../../types'
import { imageSlides as IMAGESLIDES } from '../../constants'
import { Carousel, CarouselButtonsDisplay, CarouselButtonsLocation, CarouselIndicatorsDisplay } from '@pnp/spfx-controls-react'
import styles from '../HelloTailwind.module.scss'

export const CarouselComponent = ({element} : CarouselComponentProps) => {
    return   (
        <div className="tw-w-full tw-mt-5">
        <Carousel 
            buttonsLocation={CarouselButtonsLocation.center}
            buttonsDisplay={CarouselButtonsDisplay.buttonsOnly}
            isInfinite={true}
            element={element}
            pauseOnHover={true}
            contentContainerStyles={styles.containerStyles}
            indicatorsDisplay={CarouselIndicatorsDisplay.block}
            slide
            />
        </div>
    )
}

const Hero = () => {
  return (
    <div className="tw-w-full tw-overflow-hidden tw-md:py-10 tw-max-sm:px-5" >
        <CarouselComponent element={IMAGESLIDES} />
    </div>
  )
}

export default Hero