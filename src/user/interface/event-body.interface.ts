interface File {
    content: Blob | Buffer
    filename: string,
    contentType: string,
    encoding: string,
    fieldname: string
}

export interface EventBody {
    files: Array<File>;
}