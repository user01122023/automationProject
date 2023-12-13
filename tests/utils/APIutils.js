class APIutils {
    

constructor(api_request,payload, baseURL) {
    this.api_request = api_request;
    this.payload = payload;
    this.baseURL = baseURL;
}

async getToken () {
    const response = await this.api_request.post(this.baseURL, {
        multipart: this.payload,
        params: {
            route: 'api/login'
        }
    });

    const login_response = await response.json()
    const token = login_response.api_token

    return token
}

async getCurrency(token, currency_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: currency_payload,
        params: {
            route: 'api/currency',
            api_token: token
        }
    });
    const currencyResponse = await response.json();
    return currencyResponse

};

async add_item_to_cart(token,product_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: product_payload,
        params: {
            route: 'api/cart/add',
            api_token: token
        }
    });
    const add_item_response = await response.json();
    return add_item_response
};

async edit_cart(token,product_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: product_payload,
        params: {
            route: 'api/cart/edit',
            api_token: token
        }
    });
    const edit_item_response = await response.json();
    return edit_item_response
};

async remove_item_from_cart(token,product_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: product_payload,
        params: {
            route: 'api/cart/remove',
            api_token: token
        }
    });
    const remove_item_response = await response.json();
    return remove_item_response
}

async getCartContent(token) {
    const response = await this.api_request.get(this.baseURL, {
        params: {
            route: 'api/cart/products',
            api_token: token
        }
    });
    const cart_content_response = await response.json();
    console.log(cart_content_response);
    return cart_content_response
}

}

module.exports = {
    APIutils
}