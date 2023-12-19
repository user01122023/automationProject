import { test } from '@playwright/test';
const { expect } = require('chai');
const chai = require('chai');
require('dotenv').config();
const {APIutils} = require('./utils/APIutils');
const {login_payload} = require('../data/login');


let token;
let api_request;
let apiUtils;

test.beforeAll('Should get token', async ({playwright, baseURL}) => {
    
    api_request = await playwright.request.newContext();
    apiUtils = new APIutils(api_request, login_payload, `${baseURL}`);
    token = await apiUtils.getToken();

});

test('Should be able to change currency', async () => {
    const currency_payload = {
        currency: 'USD'
    };

    const currency_response = await apiUtils.getCurrency(token,currency_payload)
    
    expect(currency_response).to.include({"success": "Success: Your currency has been changed!"})
    console.log(currency_response);
    
});

test( 'Should not change currency with invalid code', async () => {
    const currency_payload = {
        currency: 'USD1'
    }
    const currency_response = await apiUtils.getCurrency(token,currency_payload)
    
    expect(currency_response).to.include({"error": "Warning: Currency code is invalid!"})
    console.log(currency_response);
})

test("Should not change currency with empty code", async () => {
    const currency_payload = {
        currency: ' '
    }
    const currency_response = await apiUtils.getCurrency(token,currency_payload)
    
    expect(currency_response).to.include({"error": "Warning: Currency code is invalid!"})
    console.log(currency_response);
})

test('Should not change currency with invalid token', async () => {
    const currency_payload = {
        currency: 'USD'
    }
    const currency_response = await apiUtils.getCurrency('invalid token',currency_payload)
    
    expect(currency_response).to.include({ "error": "Warning: You do not have permission to access the API!"})
    console.log(currency_response);
})

