import { test, expect } from '@playwright/test';
const payload = {
    username : 'Main',
    key: 'NhRaDDo3i0x7BsuZFv1vQn32PX3UpqJkxvEQzjzbfjnCMzIwdBLZIg72Pz6ynsimG7f02zaDlKjtG1tnOaKe168dnQvZWn3us0hCrWnRg3CSOiyG3rhjqZf5QtfIwzG8dfg3202WdVDetuiQWPTdJNDf1kmhGWaBrr83TRf6wyEYRcy7IOk1vrr0ey4tzLpskZ7sd9uNdohMnzU7dxrdtGpSzLYGik1LJHtm6r4V5rPowAdxjo3fFVXcuSJoj7g7'   
}
let token;

test.beforeAll('Should get token', async ({request, baseURL}) => {

    const response = await request.post(`${baseURL}`, {
        multipart: payload,
        params: {
            route: 'api/login'
        }
    });

    const login_response = await response.json()
    token = login_response.api_token

    expect(response).toBeTruthy();
    expect(response.status('200'));
    expect(token).toBeDefined()
    console.log(login_response);
    console.log(token)

});

test('Should change currency', async ({request, baseURL}) => {

    const response = await request.post(`${baseURL}`, {
        multipart: {currency: 'USD'},
        params: {
            route: 'api/currency',
            api_token: token
        }
    });

    const currency_response = await response.json();

    expect(response).toBeTruthy();
    expect(response.status('200'));
    expect(currency_response).toMatchObject({"success": "Success: Your currency has been changed!"})
});

test('Should add an item to a cart', async ({request, baseURL}) => {
    
    const response = await request.post(`${baseURL}`, {
        multipart: {
            product_id: '40',
            quantity: 1
        },
        params: {
            route: 'api/cart/add',
            api_token: token
        }
    });

    const add_item_response = await response.json();

    expect(response).toBeTruthy();
    expect(response.status('200'));
    expect(add_item_response).toMatchObject({"success": "Success: You have modified your shopping cart!"})

})

