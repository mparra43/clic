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

export interface CompanyRegister {
    documentType: string;
    documentNumber: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
    termsAndConditions?:boolean;
    dataProcessingPolicy?: string;
    companyName?: string;
    economicActivity?: string;
    phone?: string;
    city?: string;
    address?: string;
    names?: string;
    surname?: string;
    documentTypeUser?: string;
    documentNumberUser?: string;
    yearOfBirth?: string;
    position?: string;
    phoneUser?: string;
}