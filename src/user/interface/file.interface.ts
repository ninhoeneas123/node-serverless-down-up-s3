interface File {
    content: Blob | Buffer
    filename: string,
    contentType: string,
    encoding: string,
    fieldname: string
}