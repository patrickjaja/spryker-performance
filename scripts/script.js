import { check } from "k6";
import http from 'k6/http';

export const options = {
    discardResponseBodies: true,
    scenarios: {
        sprykerLocalImprint: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                // { duration: '40s', target: 1000 },
                // { duration: '30s', target: 100 },
                { duration: '20s', target: 50 },
                { duration: '10s', target: 0 },
            ],
            gracefulRampDown: '0s',
            exec: 'sprykerLocalImprint',
            tags: {
                "expected_response": "true",
                "group": "",
                "method": "GET",
                "name": "http://yves.de.spryker.local/en/imprint",
                "scenario": "default",
                "status": "200",
                "url": "http://yves.de.spryker.local/en/imprint"
            }
        },
        sprykerHostedImprint: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                // { duration: '40s', target: 1000 },
                // { duration: '30s', target: 100 },
                { duration: '20s', target: 50 },
                { duration: '10s', target: 0 },
            ],
            gracefulRampDown: '0s',
            exec: 'sprykerHostedImprint',
            tags: {
                "expected_response": "true",
                "group": "",
                "method": "GET",
                "name": "https://www.de.b2c.demo-spryker.com/en/imprint",
                "scenario": "default",
                "status": "200",
                "url": "https://www.de.b2c.demo-spryker.com/en/imprint"
            }
        },
    },
};

export function sprykerLocalImprint() {
    let res = http.get('http://yves.de.spryker.local/en/imprint');
    check(res, {
        "is status 200": (r) => r.status === 200
    });
}

export function sprykerHostedImprint() {
    let res = http.get('https://www.de.b2c.demo-spryker.com/en/imprint');
    check(res, {
        "is status 200": (r) => r.status === 200
    });
}
