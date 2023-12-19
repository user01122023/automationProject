// GET, POST, PUT, DELETE for https://reqres.in/

// @ts-check
import { test, expect } from '@playwright/test'

test.describe.parallel('API testing', () => {
  const baseUrl = 'https://reqres.in/api'
  test('Simple API Test - Assert Response Status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users?page=2`)
    expect(response.status()).toBe(200)

    const responseBody = JSON.parse(await response.text())
    //console.log(responseBody)
  })

  test('Simple API Test - Assert Invalid endpoint', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/nonexistingendpoint`)
    expect(response.status()).toBe(404)
  })

  test('GET Request - Get User Details', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users?page=1`)
    const responseBody = JSON.parse(await response.text())

    expect(response.status()).toBe(200)
    expect(responseBody.data.id).toBe(1)
    expect(responseBody.data.first_name).toBe('George')
    expect(responseBody.support.text).toBe('To keep ReqRes free, contributions towards server costs are appreciated!')
    expect(responseBody.data.email).toBeTruthy()  //false, zero,'', underfined ,null = test fail
    //console.log(responseBody)
  })

  test('POST Request -Create New User', async ({ request }) => {
    const response = await request.post(`${baseUrl}/user`, {
      data: {
        id: 1000,
      },
    })
    const responseBody = JSON.parse(await response.text())
    expect(responseBody.id).toBe(1000)
    expect(responseBody.createdAt).toBeTruthy()
    //console.log(responseBody)  
  })

  test('Post Request - Login', async ({ request }) =>{
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(200)
    expect(responseBody.token).toBeTruthy()
    expect(response).toBeJson();
    expect(response.responseTime).toBeLessThan(400)
    expect(response.headers()).toHaveProperty("Content-Type")
    expect(response.headers().get("Content-Type")).toBe("application/json")
    expect(response.headers()).toHaveProperty("Connection")
    expect(response.headers().get("Connection")).toBe("keep-alive")

    const jsonData = response.json();
    expect(jsonData.success).toBe("Success: You have modified your shopping cart!");
  }
  )
})









