import { TypeButton } from "@/enum";
import { JSX } from "react";

export interface StyleSectionForm {
    article: string,
    container: string,
    internalContainer: string,
}

export interface Route {
    base: string;
    page?: string;
    previousPage?: string;
}

export interface Button {
    active?: string;
    disabled?: string;
    label: string;
    style?: string;
    link?: string
    type: TypeButton;
}

export interface Label {
    className?: string;
    text: string;
    link?: string
}

export interface Icon {
    icon: string
    className?: string;
    name?: string;
    path?: string;
}

export interface Imagen {
    url: string
    className: string;
}

export interface LinkImagen extends Imagen {
    link: string
}



export interface Page {
    article: {
        className: string
        // container: {}
    },
    route: Route
}

export interface NavItem {
    text: string;
    path: string;
}


export interface SliderItem {
    src: string;
    alt: string;
}

export interface Service {
    label: string;
    icon: string;
    path: string;
}





export interface TextLink {
    paragraph?: string;
    textLink: string;
    path: string;
};

export interface Item {
    classNameItem?: string
    name: string;
    icon?: string;
    value?: string;
}

export interface MenuItem extends Item {
    path: string;
}

export interface Article {
    title: string;
    paragraph: string[]
    button: Button
}

export interface CarouselData {
    desktop: Array<Array<JSX.Element>>;
    mobile: Array<Array<JSX.Element>>
}


export interface HandleSearchParameters {
    term: string,
    selectedOption?: boolean,
    filterSearch?: boolean
}

export interface ShowInputPassword {
    password: boolean;
    passwordConfirmation: boolean;
}