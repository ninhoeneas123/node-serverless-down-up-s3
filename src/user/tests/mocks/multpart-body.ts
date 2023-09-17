import { MultipartBodyReturn } from "../../interface/multipart.interface";

export function createMultipartBody(bodyData: Blob|Buffer): MultipartBodyReturn{
    const boundary = '----WebKitFormBoundaryABC123';
    const body = `----------------------------348617315008494581489624\r\n` +
    `Content-Disposition: form-data; name="files"; filename="Teste.jpeg"\r\n` +
    `Content-Type: image/jpeg\r\n` +
    `\r\n` +
    `${bodyData.toString('base64')}\r\n` +
    `----------------------------348617315008494581489624--\r\n`

    return {
        body,
        headers: {
            'ContentType': `multipart/form-data; boundary=${boundary}`
        },
    };
}
