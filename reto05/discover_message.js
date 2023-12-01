const fs = require('fs');

fs.readFile('./database_attacked.csv', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
})

const csv = require('csv-parser')
const results = []
fs.createReadStream('./database_attacked.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // results contains an array of objects
        // console.log(results);
        detectInvalid(results);
    })

let invalidData = [];
function detectInvalid(data) {
    data.forEach(element => {
        if (!element.Id
            || !checkAlphanumeric(element.Id)
            || !element.Username
            || !checkAlphanumeric(element.Username)
        ) {
            invalidData.push(element);
        } else if (!element.Email || !checkValidEmail(element.Email)) {
            invalidData.push(element);
        }
        else
            if (element.Age && isNaN(element.Age)) {
                invalidData.push(element);
            }
            else if (element.Location && !isNaN(element.Location)) {
                invalidData.push(element);
            }
    });
    decipherMessage(invalidData);
}
function checkAlphanumeric(el) {
    let regexAlphaNum = new RegExp(/^[a-z0-9]+$/i);
    return regexAlphaNum.test(el);
}

function checkValidEmail(email) {
    let regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return regexEmail.test(email);
};

function decipherMessage(data) {
    let message = "Hidden message: ";
    data.forEach(element => {
        message += element.Username.substring(0, 1);
    });
    console.log(message);
}