import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');
const mysql = require('mysql2/promise');

test('API Test - Account login', async ({ request }) => {
    const baseUrl = 'https://eurosmeta.com/index.php';

    // Step 1: Make an API request
    const requestData = {
        
        email: "test20@test.com",
        password: "12345",
        
    };
    
    const apiResponse = await request.post(`${baseUrl}`, {
        params: {
            "route": "account/login"
        },
        multipart: requestData
    });

    // Step 2: Verify the API request
        expect(apiResponse.status()).toBe(200);
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.headers()["content-type"]).toBe("text/html; charset=utf-8");
        expect(apiResponse.headers()["connection"]).toBe("close");

});