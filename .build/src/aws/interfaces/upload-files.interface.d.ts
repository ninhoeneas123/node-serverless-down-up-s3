export interface Metadata {
    httpStatusCode: number;
    requestId: string;
    extendedRequestId: string;
    cfId: string;
    attempts: number;
    totalRetryDelay: number;
}
export interface UploadFile {
    $metadata: Metadata;
    ETag: string;
    ServerSideEncryption: string;
}
