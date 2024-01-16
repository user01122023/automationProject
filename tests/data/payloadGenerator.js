const { faker } = require('@faker-js/faker');

function postRegisterUserPayload () {
  return {
    customer_group_id: faker.string.uuid(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    telephone: faker.phone.imei(),
    password: "1234566789",
    confirm: "1234566789",
    newsletter: 0,
    agree: 1
  }
};

function postNewVaucherPayload () {
  return {
    from_name: postRegisterUserPayload().firstname,
    from_email: postRegisterUserPayload().email,
    to_name: faker.person.firstName(),
    to_email: faker.internet.email(),
    amount:'100',
    code:'VOU-7177',
  }
};

function postShippingAddress() {
  return {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      address_1: faker.location.streetAddress(),
      city: faker.location.city(),
      country: 'United States',
      zone_id: 223,
  }
};


module.exports = {
  postRegisterUserPayload,
  postNewVaucherPayload,
  postShippingAddress
};