
import Link from 'next/link';
import clsx from 'clsx'
import { Carousel, } from 'flowbite-react';
import { themeSlider } from '@/lib/theme';
import { Button, CarouselData, themeSliderProps } from '@/interfaces';
import { Suspense, useState, useEffect, JSX } from 'react';
import { Item } from '../../../interfaces/components';

export interface CarouselWhitGridProps {
    button?: Button
    carouselClassDesktop?: string
    carouselClassMobile?: string
    children?: React.ReactNode
    classNameDesktop?: string
    classNameMobile?: string
    classNameSection?: string
    items: Array<Array<JSX.Element>>
    itemsMobile: Array<any>
    indicators?: boolean;
    // theme: themeSliderProps;
    title?: string;
    subtitle?: string;
    slideInterval?: number;
}


const theme = {
    rootBase: 'relative w-full h-[28rem]',
    leftControl: 'hidden',
    rightControl: 'hidden',
    indicatorsActiveOff: 'bg-gray-200 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
    indicatorsBase: 'w-6 h-2.5 rounded',
    indicatorsActiveOn: 'bg-primary dark:bg-gray-800',
    indicatorsWrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
    scrollContainerBase: 'flex h-full snap-mandatory',
    scrollContainerSnap: 'snap-x',
    itemBase: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
    itemWrapperOn: 'w-full flex-shrink-0 transform cursor-grab snap-center',
    itemWrapperOff: 'w-full flex-shrink-0 transform cursor-default snap-center'
}



export const CarouselWhitGrid = ({
    children,
    carouselClassDesktop = 'h-[28rem]',
    carouselClassMobile = 'h-[20rem]',
    classNameDesktop = 'w-5/6 grid grid-rows-1 grid-cols-4 gap-4 mx-auto',
    classNameMobile = 'w-full grid grid-cols-1 gap-2 mx-auto mt-6',
    classNameSection,
    button,
    items,
    indicators = true,
    title,
    subtitle,
    slideInterval = 10000,
}: CarouselWhitGridProps) => {



    return (
        <section className={clsx(classNameSection)} data-testid='carousel'>
            <div className='w-full md:w-[38rem] mx-auto '>
                <h3 className='text-2xl/6 md:text-2xl text-center font-normal md:px-12  font-ubuntu '>{subtitle}</h3>
                <h2 className='text-2xl md:text-3xl font-bold text-center font-ubuntu'>{title}</h2>
            </div>
            <Carousel className={clsx('hidden md:block', carouselClassDesktop)} theme={themeSlider(theme)} indicators={indicators} slideInterval={slideInterval && slideInterval} data-testid='carouselDesktop' >
                {items?.map((item, index) => (<div className={clsx(classNameDesktop)} key={index}>{item}</div>))}
            </Carousel>
            <Carousel className={clsx('block md:hidden', carouselClassMobile, classNameMobile)} theme={themeSlider(theme)} indicators={false} slideInterval={slideInterval && slideInterval} data-testid='carouselMobile' >
                {items?.map((item) => item)}
            </Carousel>

        </section>
    );
}