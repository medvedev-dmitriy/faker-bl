// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;

if(process.argv[2] == 'EN'){
    faker.locale = 'en';
    lang = {"first": 65 ,"last":91};
} else if(process.argv[2] == 'RU'){
    faker.locale = 'ru';
    lang = {"first": 1034 , "last" :1113};
} else if (process.argv[2] == 'BL'){
    faker.locale = 'uk';
    lang = {"first": 1034 , "last" :1113};
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
    show(randomName, city, street, phoneNumber,errors);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function dblLetter(word) {
    var a = getRandomInt(0, word.length-1);
    var b = a < word.length - 1 ? a + 1 : a - 1;
    return word.replace(word[a],word[b]);
};

function swap(word) {
    var a = getRandomInt(0, word.length-2);
    var b = a + 1;
    return word.substring(0,a) + word[b] + word[a] + word.substring(b+1, word.length);
};

function replaceDigit(number) {
    if(isNaN(number)) return number;
    var a = getRandomInt(0, number.length - 1);
    var sing = number[a] == 1 ? getRandomInt(2,9) : 1;
    return number.substring(0,a) + sing + number.substring(a+1,number.length);
};

function deleteLetter(word) {
    var a = getRandomInt(0, word.length - 1);
    return word.substring(0,a) + word.substring(a+1,word.length);
};

function insertLetter(word) {
    var a = getRandomInt(0,word.length - 1);
    return word.substring(0,a) + String.fromCharCode(getRandomInt(lang.first,lang.last)) + word.substring(a+1,word.length);
};



function show(name, city, street, phone, err){
    var countError = parseInt(err) + getRandomInt(-1,1);
    for (var i = 0; i < countError; i++ ){
        switch (getRandomInt(0,7)) {
            case 0 :
                name = dblLetter(name);
                i++;
                break;
            case 1 :
                name = swap(name);
                i++;
                break;
            case 2 :
                phone = swap(phone);
                i++;
                break;
            case 3 :
                city = swap(city);
                i++;
                break;
            case 4 :
                phone = replaceDigit(phone);
                i++;
                break;
            case 5 :
                name = deleteLetter(name);
                i++;
                break;
            case 6 :
                street = deleteLetter(street);
                i++;
                break;
            case 7 :
                street = insertLetter(street);
                i++;
                break;
        }
    }

    console.log(
        name + " ; " +
        city + " " +
        street + " ; " +
        phone// + " ce = " + countError
    );
}



