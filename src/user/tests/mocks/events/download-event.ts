import { APIGatewayProxyEvent } from "aws-lambda";

export function assembleEventBody(verb: string, path: string, fileName: string | undefined = undefined, bodyData: string | null = null): APIGatewayProxyEvent {
    return {
        resource: path,
        path: path,
        httpMethod: verb,
        headers: {
            'Content-Type': 'multipart/form-data; boundary=--------------------------348617315008494581489624', // Adicione o boundary
        },
        multiValueHeaders: {},
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        pathParameters: { fileName },
        stageVariables: null,
        requestContext: {
            resourceId: 'resourceId',
            resourcePath: '/download-file/',
            httpMethod: 'POST',
            requestId: 'requestId',
            accountId: 'accountId',
            stage: 'stage',
            path: '/upload-file',
            requestTimeEpoch: 1234567890,
            identity: {
                apiKey: null,
                apiKeyId: null,
                clientCert: null,
                cognitoIdentityPoolId: null,
                accountId: null,
                cognitoIdentityId: null,
                caller: null,
                sourceIp: '127.0.0.1',
                principalOrgId: null,
                accessKey: null,
                cognitoAuthenticationType: null,
                cognitoAuthenticationProvider: null,
                userArn: null,
                userAgent: 'Custom User Agent String',
                user: null
            },
            authorizer: { principalId: 'user' },
            protocol: 'HTTP/1.1',
            domainName: 'localhost',
            apiId: 'apiId'
        },
        body: bodyData,
        isBase64Encoded: false
    };







}