// script.js
import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
    vus: 10, // virtual users
    duration: '30s',
};

export default function () {
    // const myVariable = __ENV.DOMAIN;
    const myVariable = 'http://yves.de.spryker.local/en/new';
    http.get(myVariable);
    sleep(1);
}
