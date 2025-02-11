import { MatrixDivision } from "@/interfaces";

export const splitArraysEquals = (array: Array<any> = [], size: number): MatrixDivision => {
  let page = 0
  const pagination: Array<number> = [];
  const grups: Array<Array<any>> = [];

  for (let i = 0; i < array.length; i += size) {
    page = page + 1
    grups.push(array.slice(i, i + size));
    pagination.push(page)
  }

  return { grups, pagination }
}


export const normalizeText = (text: string) => {
  return text?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export const filterOptionsToSelect = (data: any[], term: string, propertyCompare: string) => {
  return data.filter(item => normalizeText(item[propertyCompare])?.includes(term?.toLowerCase()))
}