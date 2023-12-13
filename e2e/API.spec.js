// @ts-check
import { test, expect } from '@playwright/test'

test.describe('API testing', () => {
  const baseUrl = 'http://localhost/opencart31/upload/index.php'
  
   

  test('Post Request - Login', async ({ request }) =>{
    const response = await request.post(`${baseUrl}`, {
      multipart: {
        "username": 'Default',
        "key": '2yiZaG7QEQaHNvmJJbHrluqeX0u3YsCuL1lEssKr05Jvl3zUHVkSIJ16ajZXIrBNcPVB6P2Tkn2PFC2ABHqBTlLADD6TsFu2YytngyynjLpEr6kzbsTjmRJM4kUoMmslm4D6okv7ylxKxrzBNe216O3dMaBZ1S1yBdajD08fF6yQzMQHT3vCoOJ6baPLBFrzoQqwnZuhacRQQFa1LbpOKOKAKtxZoI4XLNcucnBOu5aOXdBHhUJ2VatArE6MLiZi'

      }, params:{
        "route" : "api/login"
      }
      
    })
    //const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    console.log(await response.json())
    
 
  })

  test('customer', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "api/customer",
        "api_token": "3d6d55c0b42fb7ca43e5683bff"
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
    //await response.body()
    //await response.text()

  })

  test('currency', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "api/currency",
        "api_token": "3d6d55c0b42fb7ca43e5683bff"
      },
      multipart:{
        "currency": "USD"        
      }
    })
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    //console.log(typeof await response.body()) // Should print 'object'
    //console.log(await response.body()) // Should print the object
    console.log(await response.json())
    //console.log(response.json()) // Should print the object
    //expect(response.body).toEqual({"success": "Success: Your currency has been changed!" });
       
   })

  test('add Product', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "api/cart/add",
        "api_token": "3d6d55c0b42fb7ca43e5683bff"
      },
      data:{
        "product_id": 30,
        "quantity": 1
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
        "api_token": "3d6d55c0b42fb7ca43e5683bff"
      }
    })

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    console.log(await response.json())
    await response.body()
  })
})
  
