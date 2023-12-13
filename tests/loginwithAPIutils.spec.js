import { test, expect } from '@playwright/test';
const {APIutils} = require('./utils/APIutils');
const {login_payload} = require('./utils/LoginPage');

let token;
let api_request;
let apiUtils;

test.beforeAll('Should get token', async ({playwright, baseURL}) => {
    
    api_request = await playwright.request.newContext();
    apiUtils = new APIutils(api_request, login_payload, `${baseURL}`);
    token = await apiUtils.getToken();
   
});

test('Should change currency', async () => {
    const currency_payload = {
        currency: 'USD'
    }
    const currency_response = await apiUtils.getCurrency(token,currency_payload)
    
    expect(currency_response).toBeTruthy();
    expect(currency_response).toMatchObject({"success": "Success: Your currency has been changed!"})
    console.log(currency_response);
    
});

test('Should add an item to a cart', async () => {
    const product_payload = {
        product_id: '40',
        quantity: 1
    };
    const add_item_response = await apiUtils.add_item_to_cart(token, product_payload)

    expect(add_item_response).toBeTruthy();
    expect(add_item_response).toMatchObject({"success": "Success: You have modified your shopping cart!"})
    console.log(add_item_response);

})

test('Should edit the cart', async () => {
    const product_payload = {
        key: '10',
        quantity: 3
    };
    const edit_item_response = await apiUtils.edit_cart(token, product_payload)

    expect(edit_item_response).toBeTruthy();
    expect(edit_item_response).toMatchObject({"success": "Success: You have modified your shopping cart!"})
    console.log(edit_item_response);

})

test('Should remove an item from the cart', async () => {
    const product_payload = {
        key: '10'
    };
    const remove_item_response = await apiUtils.remove_item_from_cart(token, product_payload);

    expect(remove_item_response).toBeTruthy();
    expect(remove_item_response).toMatchObject({"success": "Success: You have modified your shopping cart!"})

})

test('Should show the cart content', async () => {
    const cart_content_response = await apiUtils.getCartContent(token);

    expect(cart_content_response).toBeTruthy();
    expect(cart_content_response).toHaveProperty('products')

})




