import { APIGatewayProxyEvent } from 'aws-lambda';
import { ResponseModel } from '../interface/response-model.interface';
declare class UserController {
    uploadFile(event: APIGatewayProxyEvent, fileName: string): Promise<ResponseModel>;
    getFile(event: APIGatewayProxyEvent): Promise<{
        statusCode: number;
        body: string;
        headers: {
            'Content-Type': string;
        };
    } | {
        statusCode: number;
        headers: {
            'Content-Disposition': string;
            'Content-Type': string;
        };
        body: any;
        isBase64Encoded: boolean;
    }>;
}
declare const _default: UserController;
export default _default;
