export function responseModel(body: object | unknown, statusCode: number) {
    return {
        statusCode: statusCode,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    }
}