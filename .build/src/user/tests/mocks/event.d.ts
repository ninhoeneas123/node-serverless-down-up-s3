import { APIGatewayProxyEvent } from "aws-lambda";
export declare function assembleEventBody(verb: string, path: string, fileName?: string | undefined, bodyData?: any | null): APIGatewayProxyEvent;
