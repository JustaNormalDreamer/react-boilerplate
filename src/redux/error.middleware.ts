import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

export const errorMiddleware: Middleware = (api: MiddlewareAPI) => next => action => {
    if(isRejectedWithValue(action)) {
        const rejectedStatus = action.meta.baseQueryMeta.response.status;

        switch(rejectedStatus) {
            case 404:
                console.log("Resource not found.");
                break;

            case 403:
                console.log("Forbidden");
                break;

            default:
                console.log("Something went wrong.");
                break;
        }
    }
    
    return next(action);
}