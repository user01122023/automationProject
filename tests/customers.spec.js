import { test } from '@playwright/test';
const { expect } = require('chai');
const chai = require('chai');
require('dotenv').config();
const {APIutils} = require('./utils/APIutils');
const {login_payload} = require('./data/login');
chai.use(require('chai-json-schema-ajv'));
const {shoppingcart_schema} = require('./schemas/shoppingcart_schema');

let token;
let api_request;
let apiUtils;

const success_customer_responce = {'success': 'You have successfully modified customers'}

test.beforeAll('Should get token', async ({playwright, baseURL}) => {
    
    api_request = await playwright.request.newContext();
    apiUtils = new APIutils(api_request, login_payload, `${baseURL}`);
    token = await apiUtils.getToken();

});

test('Should create a customer', async () => {
    const customer_payload = {
        firstname: 'test',
        lastname: 'test',
        email: 'test' + Math.floor(Math.random() * 1000) + '@test.com',
        telephone: '123456789',
    }

    const customer_response = await apiUtils.addCustomer(token, customer_payload)

    expect(customer_response).to.include(success_customer_responce)
    console.log(customer_response);
})

