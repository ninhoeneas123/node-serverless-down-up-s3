export interface ResponseModel {
  statusCode: number;
  body: string ;
  headers?: {
    'Content-Type': string;
    [key: string]: string;
  };
}