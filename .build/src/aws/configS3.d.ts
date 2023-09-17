import { S3Client, PutObjectCommandOutput } from "@aws-sdk/client-s3";
declare class AwsS3 {
    accessKeyId: string | undefined;
    secretAccessKey: string | undefined;
    region: string | undefined;
    clientS3: S3Client;
    uploadFile(file: any, fileName: string): Promise<PutObjectCommandOutput>;
    getFile(fileName: string): Promise<any>;
}
declare const _default: AwsS3;
export default _default;
