import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');
const mysql = require('mysql2/promise');

test('API Test - Account Register and Database Verification', async ({ request }) => {
    const baseUrl = 'https://eurosmeta.com/index.php';

    // Step 1: Make an API request
    const requestData = {
        customer_group_id: 1,
        firstname: "AnastasiaTest20",
        lastname: "Test20",
        email: "test20@test.com",
        telephone: "98765643432",
        password: "12345",
        confirm: "12345",
        newsletter: 0,
        agree: 1
    };

    const apiResponse = await request.post(`${baseUrl}`, {
        params: {
            "route": "account/register"
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
            'SELECT firstname, lastname, email, telephone FROM oc_customer WHERE email = ?',
            [requestData.email]
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
        expect(dbData.telephone).toEqual(requestData.telephone);
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