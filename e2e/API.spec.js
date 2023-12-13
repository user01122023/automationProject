// @ts-check
import { test, expect } from '@playwright/test'

test.describe('API testing', () => {
  const baseUrl = 'http://localhost/opencart31/upload/index.php'
  
   

  test.skip('Post Request - Login', async ({ request }) =>{
    const response = await request.post(`${baseUrl}`, {
      multipart: {
        "username": 'Default',
        "key": 'kmNE2uxZVHxbVLBIVR5AYDXe4XOQbNoiSl3s0eip8hPrgMFCLlbQptlX13u2SdTpFXzfPlSfOh0EwDfWMWH6xXAJU7fANwABqQSyvXliPlOg8n1Ix8YM5dtlou8CZCiZtmaQm0jmNMfqfvrFDpxrGLo05f6ydpsEl6BYydMJhVFCBzUASW8VKwpT7kflwbcEAxjVkLEN4T3P5eVoIpDbTfhhLKrmUDbGqricxMTuVe3cspQQvOF20ClxmM76LK5M'

      }, params:{
        "route" : "api/login"
      }
      
    })
    
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    console.log(await response.json())
    
 
  })

  test('customer', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "api/customer",
        "api_token": "f2f11f1c9878e1a20df0bd2945"
      },
      multipart:{
        "firstname":"Dear",
        "lastname":"Customer",
        "email":"customer@example.com",
        "telephone":"+18792548022"
      }
    })
    expect(response.status()).toBe(200)
    console.log(await response.json())
    expect(response.ok()).toBeTruthy()
  })

  

  test('currency', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "api/currency",
        "api_token": "f2f11f1c9878e1a20df0bd2945"
      },
      multipart:{
        "currency": "USD"        
      }
    })
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    console.log(await response.json())
    //console.log(response.json()) // Should print the object
    
   })

  test('Cart add Product', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "api/cart/add",
        "api_token": "f2f11f1c9878e1a20df0bd2945"
      },
      multipart:{
        "product_id": 30,
        "quantity": 1
      }
    })
    expect(response.status()).toBe(200)
    console.log(await response.json())
    await response.body()
    await response.text()

  })

  test('Cart edit', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "api/cart/edit",
        "api_token": "f2f11f1c9878e1a20df0bd2945"
      },
      multipart:{
        "key": 10,
        "quantity": 2
      }
    })
    expect(response.status()).toBe(200)
    console.log(await response.json())
    await response.body()
    await response.text()

  })

  test('Cart remove', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "api/cart/remove",
        "api_token": "f2f11f1c9878e1a20df0bd2945"
      },
      multipart:{
        "key": 10
        
      }
    })
    expect(response.status()).toBe(200)
    console.log(await response.json())
    await response.body()
    await response.text()

  })

  test('Products', async ({ request }) =>{

    const response = await request.get(`${baseUrl}`, {
      params:{
        "route" : "api/cart/products",
        "api_token": "f2f11f1c9878e1a20df0bd2945"
      }
    })

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    console.log(await response.json())
    await response.body()
  })
})
  
