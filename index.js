function transformCaesarCipher(text, shiftValue, shiftDirection) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const lowerAlphabetArr = alphabets.split("");
    const upperAlphabetArr = alphabets.toUpperCase().split("");
    let transformedText = "";
    for (let i=0; i<text.length; i++) {
        const ch = text[i];
        const asciiCode = text[i].charCodeAt(0);
        if (asciiCode >= 65 && asciiCode <= 90) {
            const position = getEncryptedChar(upperAlphabetArr, ch, shiftValue, shiftDirection);
            transformedText += upperAlphabetArr[position];
        } else if (asciiCode >= 97 && asciiCode <= 122) {
            const position = getEncryptedChar(lowerAlphabetArr, ch, shiftValue, shiftDirection);
            transformedText += lowerAlphabetArr[position];
        } else {
            transformedText += ch;
        }
    }
    return transformedText;
}

function getEncryptedChar(charArr, char, shiftValue, shiftDirection) {
    const index = charArr.indexOf(char);
    if (shiftDirection === "left") {
        let positionVal = index - shiftValue;
        if (positionVal < 0) {
            positionVal += 26;
        }
       return positionVal % 26;
    }
    return  (index + shiftValue) % 26;
}


module.exports = transformCaesarCipher;