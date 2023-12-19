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

  

  test.only('account/login', async ({ request }) =>{

    const response = await request.post(`${baseUrl}`, {
      params:{
        "route" : "account/login",
        
      },
      multipart:{
        
        "email":"nikon@gmail.com",
        "password":"nikon"
      }
    })
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    //console.log(await response.json())
  })

})
  
