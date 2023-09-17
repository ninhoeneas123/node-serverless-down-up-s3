import { APIGatewayProxyEvent } from 'aws-lambda';
export declare const test: () => Promise<void>;
export declare const uploadFile: (event: APIGatewayProxyEvent) => Promise<import("./interface/response-model.interface").ResponseModel>;
export declare const downloadFile: (event: any) => Promise<{
    statusCode: any;
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
