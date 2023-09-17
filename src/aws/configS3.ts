import { S3Client, PutObjectCommand, GetObjectCommand, PutObjectCommandOutput } from "@aws-sdk/client-s3"
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import * as dotenv from 'dotenv'
import { ParamsAWS } from "./interfaces/aws-send-params.interface";
dotenv.config();


class AwsS3 {
  accessKeyId = process.env.AWS_ACCESS_KEY_ID
  secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
  region = process.env.AWS_REGION

  clientS3 = new S3Client({
    region: this.region,
    credentials: {
      accessKeyId: this.accessKeyId!,
      secretAccessKey: this.secretAccessKey!,
    },
  });

  async uploadFile(file: Blob | Buffer, fileName: string): Promise<PutObjectCommandOutput> {
    const params: ParamsAWS = {
      Bucket: 'serveless-project',
      Key: fileName,
      Body: file,
      ContentType: 'image/jpeg'
    };
    const command = new PutObjectCommand(params)
    const data = await this.clientS3.send(command)

    return data
  }

  async getFile(fileName: string): Promise<string> {
    const params: ParamsAWS = {
      Bucket: 'serveless-project',
      Key: fileName,
    }
    const command = new GetObjectCommand(params)
    const signedUrl = await getSignedUrl(this.clientS3, command, { expiresIn: 3600 })

    return signedUrl
  }
}

export default new AwsS3();
