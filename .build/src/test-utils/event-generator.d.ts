interface APIGatewayRequestProps {
    body?: Record<string, any>;
    method: string;
    path?: string;
    queryStringObject?: Record<string, any>;
    pathParametersObject?: Record<string, any>;
    stageVariables?: Record<string, any> | null;
}
interface Identity {
    accessKey: string;
    accountId: string;
    apiKey: string;
    apiKeyId: string;
    caller: string;
    cognitoAuthenticationProvider: string;
    cognitoAuthenticationType: string;
    cognitoIdentityId: string;
    cognitoIdentityPoolId: string;
    principalOrgId: string;
    sourceIp: string;
    user: string;
    userAgent: string;
    userArn: string;
}
interface RequestContext {
    accountId: string;
    apiId: string;
    httpMethod: string;
    identity: Identity;
    path: string;
    stage: string;
    requestId: string;
    requestTimeEpoch: number;
    resourceId: string;
    resourcePath: string;
}
interface APIGatewayRequest {
    body: string | null;
    headers: Record<string, string>;
    multiValueHeaders: Record<string, string[]>;
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: Record<string, any> | null;
    queryStringParameters: Record<string, any> | null;
    multiValueQueryStringParameters: null;
    stageVariables: Record<string, any> | null;
    requestContext: RequestContext;
    resource: string;
}
declare const APIGatewayRequest: ({ body, method, path, queryStringObject, pathParametersObject, stageVariables, }: APIGatewayRequestProps) => APIGatewayRequest;
export default APIGatewayRequest;
