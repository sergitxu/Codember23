const QUARENTINE = require('./files-quarentine');
let files = QUARENTINE.files;

function checkValidFiles(position) {

    let valid_files = [];
    let invalid_files = [];

    files.forEach(file => {
        let first_part = file.substring(0, file.indexOf("-"));
        let second_part = file.substring(file.indexOf("-") + 1, file.length);
        let checksum = '';

        checksum = first_part.charAt(0);
        let repeated_character = '';
        for (let i = 1; i < first_part.length; i++) {
            if (checksum.includes(first_part.charAt(i))) {
                repeated_character = first_part.charAt(i);
            } else {
                checksum += first_part.charAt(i);
            }
            checksum = checksum.replace(repeated_character, "");
        }
        if (checksum === second_part) {
            valid_files.push(checksum);
        } else {
            invalid_files.push(second_part, checksum);
        }

    });
    return valid_files[position - 1];
}

console.log(checkValidFiles(33));