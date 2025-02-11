import { themeSliderProps } from "@/interfaces"

export const themeSlider = ({ rootBase, leftControl, rightControl, indicatorsBase, indicatorsWrapper, indicatorsActiveOff, indicatorsActiveOn, itemBase, itemWrapperOff, itemWrapperOn, controlBase, controlIcon, scrollContainerBase, scrollContainerSnap }: themeSliderProps  ) => {

    return {
        root: {
            base: rootBase,
            leftControl: leftControl,
            rightControl: rightControl
        },
        indicators: {
            active: {
                off: indicatorsActiveOff,
                on: indicatorsActiveOn
            },
            base: indicatorsBase,
            wrapper: indicatorsWrapper
        },
        item: {
            base: itemBase,
            wrapper: {
                off: itemWrapperOff,
                on: itemWrapperOn
            }
        },
        control: {
            base: controlBase,
            icon: controlIcon
        },
        scrollContainer: {
            base: scrollContainerBase,
            snap: scrollContainerSnap
        }
    }
}
