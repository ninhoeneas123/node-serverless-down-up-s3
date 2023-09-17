import { APIGatewayProxyEvent } from "aws-lambda";
import { downloadFile, uploadFile } from "../handler";
import { assembleEventBody } from "./mocks/events/upload-event";
import * as fs from "fs";
import { createMultipartBody } from "./mocks/multpart-body";

jest.useRealTimers();

describe('User Handler test', () => {
    let fileName: string

    it('Test Upload file function', async () => {
        const fileContent = fs.readFileSync('src/user/tests/mocks/images/testa2.jpeg')
        const multipartBody = createMultipartBody(fileContent)
        const event: APIGatewayProxyEvent = await assembleEventBody('POST', '/upload-file', 'multipart/form-data; boundary=--------------------------348617315008494581489624', undefined, multipartBody.body);
        const response = await uploadFile(event);
        const body = JSON.parse(response.body)
        fileName = body.fileName

        expect(response).toHaveProperty('statusCode')
        expect(response.statusCode).toBe(200);
        expect(response).toHaveProperty('headers');
        expect(response.headers).toEqual({
            'Content-Type': 'application/json'
        })
        expect(response).toHaveProperty('body');
        expect(body.message).toEqual("Upload done successfully.");
    })

    it('Test download file function ', async () => {

        const event = assembleEventBody('GET', `/download-file/${fileName}`, `image/jpeg`, fileName, null);
        const response = await downloadFile(event);
        console.log(response);
        console.log(fileName)

        expect(response).toHaveProperty('statusCode')
        expect(response.statusCode).toBe(200);
        expect(response).toHaveProperty('headers');
        expect(response.headers).toEqual({
            'Content-Disposition': 'inline',
            'Content-Type': 'image/jpeg'
        })
        expect(response).toHaveProperty('body');

        try {
            const decodedBody = Buffer.from(response.body, 'base64').toString('utf-8');
            expect(decodedBody).toBeTruthy();
        } catch (error) {
            fail('Response body is not a valid Base64 string');
        }
    })

});