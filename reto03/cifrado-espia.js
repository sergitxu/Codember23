const POLICIES = require('./encryption-policies');
let codes = POLICIES.keys;

let invalidKeys = [];

function filterInvalid(source) {

    source.forEach((el) => {
        let key = Object.keys(el);
        key = key.toString();
        let min = key.split('-')[0];
        let max = key.split('-')[1].split(' ')[0];
        let letter = key.split(' ')[1];

        let counting = 0;
        el[key].split('').forEach((l) => {
            if (l === letter) {
                counting++;
            }
        });
        if (counting < min || counting > max) {
            invalidKeys.push(el[key]);
        }

    });

    return (invalidKeys.length);

};

function getInvalidCodeAt(position) {
    return invalidKeys[position - 1];
}

console.log(`Number of invalid codes: ${filterInvalid(codes)}`);
console.log(`position 42: ${getInvalidCodeAt(42)}`);
console.log(`Position 13 error: ${getInvalidCodeAt(13)}`);

