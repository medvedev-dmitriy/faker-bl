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

//for (var i = 0; i < n; i++) {
//    var randomName = faker.name.findName();
//    var city = faker.address.city();
//    var street = faker.address.streetAddress();
//    var phoneNumber = faker.phone.phoneNumber();
//    show(randomName, city, street, phoneNumber);
//}


//function show(name, city, street, phone){
//    console.log(
//        name + " ; " +
//        city + " " +
//        street + " ; " +
//        phone + " "
//    );
//}


var parts = [];
partition(n * errors);

for (var i = 0; i < parts.length; i++){
    console.log(parts[i]);
}
function partition(arg) {
    var sum = [];

    function print_terms(left, min, i) {
        if (left < 0 || min == n * errors ) {
            return;
        }
        sum[i] = min;
        if (min != 0) {
            print_terms(left - min, min, i + 1);
        }
        print_terms(left - 1, min + 1, i);
        if (left == 0 && i < n) {
            var part = [], flag = true;
            for (j = 0; j <= i; ++j) {
                if (sum[0] != errors || sum[i] > errors * 1.3) {
                    flag = false;
                    break;
                } else {
                    part.push(sum[j]);
                }
            }
            if(flag) parts.push(part);
        }

    }

    print_terms(arg, 0, 0);
}

//
//function getRandomInt(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//
/////дублирование буквы
//var dblLetter = function (word) {
//    var a = getRandomInt(0, word.length-1);
//    var b = a < word.length - 1 ? a + 1 : a - 1;
//    return word.replace(word[a],word[b]);
//};
//
/////перестановка соседних букв или цифр
//var swap = function (word) {
//    var a = getRandomInt(0, word.length-2);
//    var b = a + 1;
//    return word.substring(0,a) + word[b] + word[a] + word.substring(b+1, word.length);
//};
//
/////замена цифры на другую
//var replaceDigit = function (number) {
//    if(isNaN(number)) return number;
//    var a = getRandomInt(0, number.length - 1);
//    var sing = number[a] == 1 ? getRandomInt(2,9) : 1;
//    return number.substring(0,a) + sing + number.substring(a+1,number.length);
//};
//
/////удаление буквы
//var deleteLetter = function (word) {
//    var a = getRandomInt(0, word.length - 1);
//    return word.substring(0,a) + word.substring(a+1,word.length);
//};
//
/////вставка буквы.
//var insertLetter = function (word) {
//    var a = getRandomInt(0,word.length - 1);
//    return word.substring(0,a) + String.fromCharCode(getRandomInt(lang.first,lang.last)) + word.substring(a+1,word.length);
//};
//
