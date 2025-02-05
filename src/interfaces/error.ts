export interface Error {
    error:string,
    errorId: number,
    artefact:string
}

export interface ErrorMessage extends  Omit<Error, 'artefact'> {
    categoryName: string,
    code: number,
    message: string,
}