

import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import { themeSlider } from '@/lib';
import { SliderItem } from '@/interfaces';

interface SliderProps {
    className: string;
    items: SliderItem[];
    file: string;
    slideInterval?: number;
}

const theme = {
    rootBase: 'relative h-full w-full',
    leftControl: ' absolute top-0 left-0 hidden lg:flex h-full items-center justify-center px-4 focus:outline-none',
    rightControl: ' absolute top-0 right-0 hidden lg:flex h-full items-center justify-center px-4 focus:outline-none',
    indicatorsBase: ' hidden lg:inline h-3 w-3 rounded-full ',
    indicatorsWrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
    indicatorsActiveOff: 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
    indicatorsActiveOn: 'bg-white dark:bg-gray-800',
    itemBase: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
    itemWrapperOff: 'w-full flex-shrink-0 transform cursor-default snap-center',
    itemWrapperOn: 'w-full flex-shrink-0 transform cursor-grab snap-center',
    controlBase: 'inline-flex h-8 w-8 items-center justify-center rounded-sm bg-primary/30 group-hover:bg-primary/50  dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
    controlIcon: 'h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6',
    scrollContainerBase: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden',
    scrollContainerSnap: 'snap-x !rounded-none',
}

export const Slider = ({ className, items, file, slideInterval = 8000 }: SliderProps) => {

    return (
        <Carousel className={className} indicators={false} theme={themeSlider(theme)} data-testid='sliderCarousel' slideInterval={slideInterval}>
            {items.map(({ src, alt }, index) => (
                <div  key={index} className='h-full py-4 px-2 sm:p-0'>
                    <div className='w-full' data-testid='itemSliderDesktop'>
                        <Image  className='w-full h-60 md:h-full object-cover object-center'  data-fetchpriority='high' loading='lazy' src={`/images/${file}/${src}`} alt={alt} width={600} height={100} />
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

