import { APIGatewayProxyEvent } from "aws-lambda";

export function assembleEventBody(verb: string, path: string, contentType: string, fileName: string | undefined = undefined, bodyData: | any | null = null): APIGatewayProxyEvent {
    return {
        resource: path,
        path: path,
        httpMethod: verb,
        headers: {
            'Content-Type': contentType,
        },
        multiValueHeaders: {},
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        pathParameters: { fileName },
        stageVariables: null,
        requestContext: {
            resourceId: 'resourceId',
            resourcePath: path,
            httpMethod: verb,
            requestId: 'requestId',
            accountId: 'accountId',
            stage: 'stage',
            path: path,
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