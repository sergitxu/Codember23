const fs = require('fs');

const position = 33;

fs.readFile('files_quarantine.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const files = data.split('\n');
    let valid_files = [];
    let calculatedChecksum = '';

    files.forEach(fileToCheck => {
        fileToCheck.toString();
        let first_part = fileToCheck.substring(0, fileToCheck.indexOf("-"));
        let second_part = fileToCheck.substring(fileToCheck.indexOf("-") + 1, fileToCheck.length - 1);
        calculatedChecksum = checksumCalc(first_part);
        if (calculatedChecksum === second_part) {
            valid_files.push(calculatedChecksum);
        }
    });
    console.log(valid_files[position - 1]);
});

function checksumCalc(fileName) {

    let checksum = fileName.charAt(0);;

    let repeated_character = '';
    for (let i = 1; i < fileName.length; i++) {
        if (checksum.includes(fileName.charAt(i))) {
            repeated_character = fileName.charAt(i);
        } else {
            checksum += fileName.charAt(i);
        }
        checksum = checksum.replace(repeated_character, "");
    }
    return checksum;
}
