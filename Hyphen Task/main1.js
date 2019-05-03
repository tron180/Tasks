function hyphen(str) {
    var arrComma = str.split(",");
    var arrHyphen = arrComma.map(hyphenSplit);
    var mainStr = position(arrHyphen);

    console.log(mainStr);
    document.write(mainStr);

    return mainStr;
}

function hyphenSplit(str) {
    return str.split("-");
}

function position(arrays) {
    var newString = [];
    arrays.forEach(array => {
        var string = array[0];
        for (var i = 1; i < array.length; i++) {
            newString[array[i]] = string;
        }
    });
    return newString.join("");
}



hyphen("ABCD-0-2,HIJKL-1")