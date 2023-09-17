import AwsS3 from '../../aws/configS3';
import { APIGatewayProxyEvent } from 'aws-lambda';
import axios from 'axios';
import * as parser from 'lambda-multipart-parser'
import { responseModel } from '../../utils/responses/response-model'
import validateFiles from '../../utils/validations/validate-files';
import { responseModelDownloadfile } from '../../utils/responses/response-getfile';
import { ResponseModel } from '../interface/response-model.interface';
import validateBody from '../../utils/validations/validate-request-body';
import { EventBody } from '../interface/event-body.interface';
// import validateBody from '../../utils/validations/validate-request-body';

class UserController {

  async uploadFile(event: APIGatewayProxyEvent, fileName: string): Promise<ResponseModel> {
    try {
      const eventBody: EventBody = await parser.parse(event);
      const isBodyValid = await validateBody(eventBody, ['files'])
      
      if (isBodyValid) {
        return isBodyValid
      }
      if (eventBody.files.length > 1) {
        return responseModel({ message: 'Please upload one file at a time.', fileName }, 400);
      }

      const isFileValid = validateFiles(eventBody.files[0]);

      if (isFileValid === false) {
        return responseModel({ message: 'Only JPG or JPEG files are allowed.' }, 400);
      }
      await AwsS3.uploadFile(eventBody.files[0].content, fileName);

      return responseModel({ message: 'Upload done successfully.', fileName }, 200)

    } catch (error) {
      console.error('Error:', error);

      return responseModel(error, 500)
    }
  }

  async getFile(event: APIGatewayProxyEvent) {
    try {
      const fileName = event.pathParameters?.fileName
      if (!fileName) {
        return responseModel({ message: 'File name is required.' }, 400);
      }
      const url = await AwsS3.getFile(fileName);
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      console.log(typeof response.data)

      return responseModelDownloadfile(response.data, 200)

    } catch (error) {
      return responseModel(error, 500)
    }
  }

}

export default new UserController