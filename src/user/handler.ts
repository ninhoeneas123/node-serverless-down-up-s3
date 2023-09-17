import { APIGatewayProxyEvent } from 'aws-lambda';
import UserController from './controller/user.controller'
import { ResponseModel } from './interface/response-model.interface';


export const test = async () => { //Uma function que não recebe nada e não retorna nada só para testar o deploy
  console.log('Testing')
}

export const uploadFile = async (event: APIGatewayProxyEvent): Promise<ResponseModel> => {
  const fileName = Math.floor(Math.random() * 100000).toString()
  return await UserController.uploadImage(event, fileName);
}

export const downloadFile = async (event: APIGatewayProxyEvent): Promise<ResponseModel> => {
  return await UserController.downloadImage(event);
}
