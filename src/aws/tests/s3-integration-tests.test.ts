import { S3Client, DeleteObjectCommand, PutObjectCommand, DeleteObjectCommandInput, PutObjectCommandInput } from '@aws-sdk/client-s3';
import * as dotenv from 'dotenv';
dotenv.config();

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

const clientS3 = new S3Client({
    region: region!,
    credentials: {
        accessKeyId: accessKeyId!,
        secretAccessKey: secretAccessKey!,
    },
});
const bucketName = process.env.AWS_BUCKET_NAME!
const key = 'test-file.txt'

describe('S3 Conection test', () => {
    jest.setTimeout(2000)
    it('must connect to S3 and send a file', async () => {
        const params: PutObjectCommandInput = {
            Bucket: bucketName,
            Key: key,
            Body: 'test-file.txt',
        };
        const command = new PutObjectCommand(params)
        const result = await clientS3.send(command);

        expect(result).toBeDefined();
        expect(typeof result).toBe('object');
    })

    it('must delete the file used in the test', async () => {
        const params: DeleteObjectCommandInput = {
            Bucket: bucketName,
            Key: key,
        };
        const command = new DeleteObjectCommand(params)
        const result = await clientS3.send(command);

        expect(result).toBeDefined();
        expect(typeof result).toBe('object');
    })

})