// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;

faker.locale = 'uk';
var randomName = faker.name.findName();
var phoneNumber = faker.phone.phoneNumber();
var city = faker.address.city();
var street = faker.address.streetAddress();
console.log(
    randomName + " ; " +
    city + " " +
    street + " ; " +
    phoneNumber + " "

);