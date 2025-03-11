import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config";

// init arcjet
export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // sheild protects your app from common attacks e.g. SQL injection, XSS, CSRF attacks
        shield({
            mode: "LIVE",
        }),
        detectBot({
            mode: "LIVE",
            allow: [
                "CATEGORY:SEARCH_ENGINE"
            ],
        }),
        // rate limiting
        tokenBucket({
            mode: "LIVE",
            refillRate: 30, // amount of token that will be refilled
            interval: 5, // seconds after it will refill
            capacity: 20, // no. of tokens
        })
    ]
});





