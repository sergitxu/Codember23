(function () {

    const ToCompile = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

    let counting = 0;
    let result = '';

    for (let i = 0; i <= ToCompile.length; i++) {
        switch (ToCompile.substring(i, i + 1)) {
            case '#':
                counting++;
                break;
            case '@':
                counting--;
                break;
            case '*':
                counting = counting * counting;
                break;
            case '&':
                result += counting;
                break;
        }
    }
    console.log(result);
}());
