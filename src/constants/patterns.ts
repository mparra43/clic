import { Patterns } from '@/interfaces';

export const patternForms: Patterns = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  phoneColombia: /^(?:\+?57)?(?:[ ]?\d{3}[ ]?){2}\d{4}$/,
  yearOfBirth: /^(200[0-5])|(19\d\d)$/,
  strongPassword:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/]).+$/
}

export const connectionStringPattern = /^Endpoint=(.*);Id=(.*);Secret=(.*)$/;

export const formatPattern  = {
  nit: (nitLength: number) => { return `${"#".repeat(nitLength)}`}
}