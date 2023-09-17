interface APIGatewayResponse {
    body: string;
    headers: Record<string, string>;
    statusCode: number;
}
declare const _default: {
    isApiGatewayResponse: (response: any) => response is APIGatewayResponse;
    isCorrectHeaders: (headers: Record<string, string>) => boolean;
};
export default _default;
