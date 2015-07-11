// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;

if(process.argv[2] == 'EN'){
    faker.locale = 'en';
} else if(process.argv[2] == 'RU'){
    faker.locale = 'ru';
} else if (process.argv[2] == 'BL'){
    faker.locale = 'uk';
} else {
    console.log("invalid params");
    return;
}

if (!isNaN(process.argv[3]) && !isNaN(process.argv[4])){
    var n = process.argv[3];
    var errors = process.argv[4];
} else {
    console.log("invalid params");
    return;
}

for (var i = 0; i < n; i++) {
    var randomName = faker.name.findName();
    var city = faker.address.city();
    var street = faker.address.streetAddress();
    var phoneNumber = faker.phone.phoneNumber();
    show(randomName, city, street, phoneNumber);
}


function show(name, city, street, phone){
    console.log(
        name + " ; " +
        city + " " +
        street + " ; " +
        phone + " "
    );
}