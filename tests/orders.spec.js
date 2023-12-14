import { test } from '@playwright/test';
import { order_info_schema } from '../schemas/order_info_schema';
const { expect } = require('chai');
const chai = require('chai');
require('dotenv').config();
const {APIutils} = require('./utils/APIutils');
const {login_payload} = require('../data/login');
chai.use(require('chai-json-schema-ajv'));


let token;
let api_request;
let apiUtils;

test.beforeAll('Should get token', async ({playwright, baseURL}) => {
    
    api_request = await playwright.request.newContext();
    apiUtils = new APIutils(api_request, login_payload, `${baseURL}`);
    token = await apiUtils.getToken();

});

test('Schould get order by id', async () => {

    const order_id = 1;
    const order_response = await apiUtils.getOrderById(token, order_id);

    expect(order_response.order.order_id).to.include(order_id);
    expect(order_response).to.be.jsonSchema(order_info_schema);
    console.log(order_response);
})

test('Should create the order', async () => {

    // const order_payload = {
    //     customer_id: 1,
    //     products: [
    //         { product_id: '28', quantity: '2' },
    //         { product_id: '31', quantity: '1' },
    //       ],
    //       payment_method: 'cod', // Cash On Delivery
    //       shipping_method: 'flat.flat', // Flat Shipping Rate
    //       total: '100.00',
    //       comment: 'This is a test order',
    //       currency: 'EUR'
    //     }

    const order_payload = {
        cart_id: 85
    }

    const order_response = await apiUtils.createOrder(token, order_payload);

    console.log(order_response);
})
