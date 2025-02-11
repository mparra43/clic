import { TypeConfirmation } from '@/enum';

export interface ApplicationManager {
    option: string,
    content?: string
    form?: string;
    data?: {
        [key: string]: any;
    }
}

export interface ConfirmationForm {
    type: TypeConfirmation,
    response: any;
}

export interface Data {
    [key: string]: any;
}

export interface MatrixDivision {
    grups: any[];
    pagination: number[];
}

export interface FilterParams {
    query: string
    page: number;

}

export interface Event {
    title: string;
    description: string;
    image: string;
}