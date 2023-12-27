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
    return cart_content_response
}

async addCustomer(token, customer_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: customer_payload,
        params: {
            route: 'api/customer',
            api_token: token
        }
    });
    const add_customer_response = await response.json();
    return add_customer_response
}

async addCoupon(token, coupon_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: coupon_payload,
        params: {
            route: 'api/coupon',
            api_token: token
        }
    });
    const add_coupon_response = await response.json();
    return add_coupon_response
}

async applyVoucher(token, voucher_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: voucher_payload,
        params: {
            route: 'api/voucher',
            api_token: token
        }
    });
    const add_voucher_response = await response.json();
    return add_voucher_response
}


async addVoucher(token, voucher_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: voucher_payload,
        params: {
            route: 'api/voucher',
            api_token: token
        }
    });
    const add_voucher_response = await response.json();
    return add_voucher_response
}

async setShippingAddress(token, address_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: address_payload,
        params: {
            route: 'api/address',
            api_token: token
        }
    });
    const add_address_response = await response.json();
    return add_address_response
}


async getShippingMethods(token) {
    const response = await this.api_request.get(this.baseURL, {
        params: {
            route: 'api/shipping',
            api_token: token
        }
    });
    const shipping_methods_response = await response.json();
    return shipping_methods_response
}

async getOrderById(token, order_id) {
    const response = await this.api_request.get(this.baseURL, {
        params: {
            route: 'api/order/info',
            api_token: token,
            order_id: order_id
        }
    });
    const order_response = await response.json();
    return order_response
}

async createOrder(token, order_payload) {
    const response = await this.api_request.post(this.baseURL, {
        multipart: order_payload,
        params: {
            route: 'api/order/add',
            api_token: token
        }
    });
    const order_response = await response.json();
    return order_response
}


}

module.exports = {
    APIutils
}