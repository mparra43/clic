

import { ValidationRule } from 'react-hook-form';
import { Button, Icon, Label } from './components';
import { TypeConfirmation, TypeInput } from '@/enum';

export interface Patterns {
  [key: string]: ValidationRule<any>;
}

export type ValueAs = 'number' | 'string' | 'format'
export type FormatAs = 'currency'

export type Rules = {
  required?: string | ValidationRule<boolean>
  min?: ValidationRule<string | number>
  max?: ValidationRule<string | number>
  maxLength?: ValidationRule<number>
  minLength?: ValidationRule<number>
  pattern?: {
    value: string
    message: string
  }
  validate?:(value:any)=> boolean | string;
}

export interface FormData {
  form: string;
  data: any
}

export interface Form {
  companyId?: string
  companyLogo?: string
  button: Button
  inputs: Input[];
  paragraph: string
  paragraphStyles?: string;
  title: string
  titleStyles?: string;
  name: string
  numberofSteps?:number;
  step?:number
}

export interface ContainerForm {
  className?: string
  confirmationMessages: Confirmations
  form: Form
  icon: Icon
  image: string
}

export interface OptionForm {
  Id: number | string,
  Message: string,
}

export interface Confirmations {
  success: ConfirmationMessage,
  error: ConfirmationMessage,
  confirmation: ConfirmationMessage,
  warning?: ConfirmationMessage
}

export interface Confirmation {
  show: boolean
  type: TypeConfirmation | null
  response?: any
}

export interface ConfirmationMessage {
  button?: Button
  paragraph?: string
  textButton?: Button
  linkButton?: Button
  title?: string
}

export interface Pattern {
  value: RegExp
}

export interface ValidateInput {
  required: boolean | string;
  min: number
  max: number
  minLength: number
  maxLength: number
  pattern: {
    value: string | RegExp
    message: string
  }
}

export interface Option {
  label: string;
  value: any;
}

export interface OptionJson {
  url: string;
  name: string;
}

export interface InputBase {
  name: string;
  placeholder?: string;
  rules: Rules
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
  type?: TypeInput
  defaultValue?: string | null
  format?:string
}


export interface Input extends InputBase {
  label: string;
  field?: string
  options?: Option[] 
}



export interface Selelctor extends InputBase {
  label: string;
  field?: string
  options: OptionJson
}

export interface CheckboxProps extends InputBase {
  label: string | Label[];
}