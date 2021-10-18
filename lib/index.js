"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (uma, options = {}) => {
    return async (ctx, next) => {
        const { origin = ctx.request.headers.origin || '*', method = 'OPTIONS, GET, PUT, POST, DELETE', maxAge = 300, headers = ['x-requested-with', 'accept', 'origin', 'content-type'], expose = ['X-My-Custom-Header', 'X-Another-Custom-Header'], Credentials = true, } = options;
        ctx.set('Access-Control-Allow-Origin', origin);
        ctx.set('Access-Control-Allow-Methods', method);
        ctx.set('Access-Control-Allow-Headers', headers.join(','));
        ctx.set('Access-Control-Allow-Credentials', `${Credentials}`);
        ctx.set('Access-Control-Max-Age', `${maxAge}`);
        ctx.set('Access-Control-Expose-Headers', expose.join(','));
        if (ctx.method === 'OPTIONS') {
            ctx.status = 204;
        }
        else {
            await next();
        }
    };
};
