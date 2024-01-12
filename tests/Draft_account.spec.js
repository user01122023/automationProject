//account/register
//account/login
//account/edit
//account/password
//account/address
//checkout/cart/add

import { test, expect } from '@playwright/test'


  
    test('account/register', async ({ request }) =>{
    const baseUrl = 'https://eurosmeta.com/index.php'
    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "account/register"
      },
      multipart:{
        "customer_group_id": 1,
        "firstname": "AnastasiaTest10",
        "lastname": "Test10",
        "email": "test10@test.com",
        "telephone": "98765643432",
        "password": "12345",
        "confirm": "12345",
        "newsletter": 0,
        "agree": 1
      }
    })
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    //console.log(await response.json())
  })
  



/* 
test('account/login', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "account/login"
      },
      multipart:{
        "email": "test1@test.com",
        "password": "12345",
      
      }
    })
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    //console.log(await response.json())
  })
  test('account/edit', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "account/edit"
      },
      multipart:{
        "firstname": "AnastasiaTest3",
        "lastname": "Test1",
        "email": "test1@test.com",
        "telephone": "98765643432"
            
      }
    })
    
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    console.log(response.json())
  })
  test('account/password', async ({ request }) => {
    const response = await request.post(`${baseUrl}`, {
      params: {
        "route": "account/password",
      },
      multipart: {
        "password": "12345",
        "confirm": "12345",
      },
    });
    console.log(response.json());
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
      
  })
  test('checkout/cart/add', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "checkout/cart/add"
      },
      multipart:{
        "product_id": "43",
        "quantity": "1"       
      }
    })
    
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    console.log(await response.json())
    
  })
*/
