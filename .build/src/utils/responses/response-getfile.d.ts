export declare function responseModelDownloadfile(response: any, statusCode: number): {
    statusCode: number;
    headers: {
        'Content-Disposition': string;
        'Content-Type': string;
    };
    body: any;
    isBase64Encoded: boolean;
};
