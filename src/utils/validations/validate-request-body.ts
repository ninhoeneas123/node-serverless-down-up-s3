import { EventBody } from "../../user/interface/event-body.interface";
import { ResponseModel } from "../../user/interface/response-model.interface";

export default function validateBody(event: EventBody, allowedKeys: Array<string>): ResponseModel | null {

    const invalidKeys = Object.keys(event).filter(key => !allowedKeys.includes(key));

    if (invalidKeys.length > 0) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: `Invalid keys: ${invalidKeys.join(', ')}` }),
        };
    }
    return null
}