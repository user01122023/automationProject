import { test } from '@playwright/test';
const { expect } = require('chai');
const chai = require('chai');
require('dotenv').config();
const {APIutils} = require('./utils/APIutils');
const {login_payload} = require('../data/login');
chai.use(require('chai-json-schema-ajv'));
const {shoppingcart_schema} = require('../schemas/shoppingcart_schema');

let token;
let api_request;
let apiUtils;

test.beforeAll('Should get token', async ({playwright, baseURL}) => {
    
    api_request = await playwright.request.newContext();
    apiUtils = new APIutils(api_request, login_payload, `${baseURL}`);
    token = await apiUtils.getToken();

});

test('Should add an item to a cart', async () => {
    const product_payload = {
        product_id: '40',
        quantity: 1
    };
    const add_item_response = await apiUtils.add_item_to_cart(token, product_payload);
    
    expect(add_item_response).to.include({'success': 'Success: You have modified your shopping cart!'});
    console.log(add_item_response);
  

})

test('Should edit the cart', async () => {
    const product_payload = {
        key: '10',
        quantity: 3
    };
    const edit_item_response = await apiUtils.edit_cart(token, product_payload)

    expect(edit_item_response).to.include({"success": "Success: You have modified your shopping cart!"})
    console.log(edit_item_response);

})

test('Should remove an item from the cart', async () => {
    const product_payload = {
        key: '10'
    };
    const remove_item_response = await apiUtils.remove_item_from_cart(token, product_payload);

    expect(remove_item_response).to.include({"success": "Success: You have modified your shopping cart!"})

})

test('Should show the cart content after adding a product', async () => {
    const product_payload = {
        product_id: '40',
        quantity: 1
    };

    await apiUtils.add_item_to_cart(token, product_payload)
    const cart_content_response = await apiUtils.getCartContent(token);

    expect(cart_content_response.products[0].product_id).to.equal(product_payload.product_id)
    expect(cart_content_response).to.be.jsonSchema(shoppingcart_schema);

})

test('Should show the empty cart content after removing a product that was previously added', async () =>{
    const product_payload = {
        product_id: '40',
        quantity: 1
    };
    await apiUtils.add_item_to_cart(token, product_payload);
    const add_item_response = await apiUtils.getCartContent(token);
    const cart_id = add_item_response.products[0].cart_id
    await apiUtils.remove_item_from_cart(token, {key: cart_id});
    const cart_content_response = await apiUtils.getCartContent(token);

    expect(cart_content_response.products).to.be.empty;
    expect(cart_content_response).to.be.jsonSchema(shoppingcart_schema);

})

