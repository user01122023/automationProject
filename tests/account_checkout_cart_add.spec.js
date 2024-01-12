import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');
const mysql = require('mysql2/promise');

test('API Test - Account login', async ({ request }) => {
    const baseUrl = 'https://eurosmeta.com/index.php';

    // Step 1: Make an API request
    const requestData1 = {
        
        email: "test20@test.com",
        password: "12345",
        
    };
    
    const apiResponse = await request.post(`${baseUrl}`, {
        params: {
            "route": "account/login"
        },
        multipart: requestData1
    });

    // Step 2: Verify the API request
        expect(apiResponse.status()).toBe(200);
        
});

test('API Test - Add to cart and Database Verification', async ({ request }) => {
    const baseUrl = 'https://eurosmeta.com/index.php';

    // Step 1: Make an API request
    const requestData = {
        
        product_id: "43",
        quantity: "1",
         
    };

    const apiResponse = await request.post(`${baseUrl}`, {
        params: {
            "route": "checkout/cart/add"
        },
        multipart: requestData
    });

    // Step 2: Connect to the database
    const connection = await mysql.createConnection({
        host: '37.140.192.134',
        user: 'u0237203_admin',
        password: 'admin12345',
        database: 'u0237203_openstore'
    });

    try {
        // Step 3: Retrieve data from the database
        const [rows, fields] = await connection.execute(
            'SELECT firstname, lastname, email FROM oc_customer WHERE email = ?',
            [requestData1.email]
        );

        // Compare the retrieved data with the data sent in the API request
        expect(rows.length).toBe(1);
        const dbData = rows[0];
        console.log(requestData);
        console.log(dbData);
        console.log(apiResponse.headers());
        expect(dbData.firstname).toEqual(requestData.firstname);
        expect(dbData.lastname).toEqual(requestData.lastname);
        expect(dbData.email).toEqual(requestData.email);
        expect(dbData.cart).toEqual(requestData.cart);
        // Step 4: Verify the API request
        expect(apiResponse.status()).toBe(200);
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.headers()["content-type"]).toBe("text/html; charset=utf-8");
        expect(apiResponse.headers()["connection"]).toBe("close");

    } catch (error) {
        console.error('Error retrieving or comparing data from the database:', error);
        throw error;
    } finally {
        // Step 5: Close the database connection
        await connection.end();
    }

    
});