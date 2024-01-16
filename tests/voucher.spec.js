import { test } from '@playwright/test';
const { expect } = require('chai');
const chai = require('chai');
require('dotenv').config();
const {APIutils} = require('./utils/APIutils');
const {login_payload} = require('./data/login');
const{postNewVaucherPayload} = require('./data/payloadGenerator');
const { faker } = require('@faker-js/faker');

let token;
let api_request;
let apiUtils;

const success_voucher_responce = {
    "success": "Success: Your gift voucher discount has been applied!"
};
const error_invalid_voucher_responce = {
        error: 'Warning: Gift Voucher is either invalid or the balance has been used up!'
};

const success_new_voucher_responce = {
    "success": "Success: You have modified your shopping cart!"
};

const invalid_voucher_payload = {error: {
    from_name: 'Your Name must be between 1 and 64 characters!',
    from_email: 'E-Mail Address does not appear to be valid!',
    to_name: "Recipient's Name must be between 1 and 64 characters!",
    to_email: 'E-Mail Address does not appear to be valid!',
    amount: 'Amount must be between $1.00 and $1,000.00!'
  }
}
test.beforeAll('Should get token', async ({playwright, baseURL}) => {
    
    api_request = await playwright.request.newContext();
    apiUtils = new APIutils(api_request, login_payload, `${baseURL}`);
    token = await apiUtils.getToken();

});

test('Should apply a voucher', async () => {
    const voucher_payload = {
        voucher: 'V-111'
    };
    const voucher_response = await apiUtils.applyVoucher(token, voucher_payload);

    expect(voucher_response).to.include(success_voucher_responce);
    console.log(voucher_response);
});

test('Should not apply a voucher with invalid code', async () => {
    const voucher_payload = {
        voucher: 'V-1112'
    };
    const voucher_response = await apiUtils.applyVoucher(token, voucher_payload);

    expect(voucher_response).to.include(error_invalid_voucher_responce);
    console.log(voucher_response);
});

test('Should add a new voucher', async () => {
    const voucher_payload = postNewVaucherPayload();
    const voucher_response = await apiUtils.addVoucher(token, voucher_payload);
    
    expect(voucher_response).to.include(success_new_voucher_responce);
    console.log(voucher_response);
});

test('Should not add a new voucher with invalid payload', async () => {
    const voucher_payload = {
        from_name: '',
        from_email: "invalid",
        to_name: '',
        to_email: "invalid",
        amount: "invalid",
        code: 5678
    };
    const voucher_response = await apiUtils.addVoucher(token, voucher_payload);
    
    expect(voucher_response.error).to.include(invalid_voucher_payload.error);
    console.log(voucher_response);
})


test('Should not add a new voucher with invalid amount payload', async () => {
    const voucher_payload = {
        amount: 12200
    };
    const voucher_response = await apiUtils.addVoucher(token, voucher_payload);
    
    expect(voucher_response.error.amount).to.include(invalid_voucher_payload.error.amount);
    console.log(voucher_response);
});

