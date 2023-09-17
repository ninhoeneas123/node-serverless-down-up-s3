import { APIGatewayProxyEvent } from 'aws-lambda';
import UserController from './controller/user.controller'


export const test = async () => { //Uma function que não recebe nada e não retorna nada só para testar o deploy
  console.log('Testing')
}

export const uploadFile = async (event: APIGatewayProxyEvent) => {
  const fileName = Math.floor(Math.random() * 100000).toString()
  return await UserController.uploadFile(event, fileName);
}

export const downloadFile = async (event: APIGatewayProxyEvent) => {
  return await UserController.getFile(event);
}
