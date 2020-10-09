const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let temp = expr.match(/.{1,10}/g);
    let i = 0;
    let result = temp.map(element => {
        return element.
        replace(/10/g, '.').
        replace(/11/g, '-').
        replace(/00/g, '').
        replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
    })
    while(i < result.length) {
        for(key in MORSE_TABLE) {
            if(result[i] === key) {
                result[i] = MORSE_TABLE[key]
            }
        }
        i++;
    }
    return result.join('');
}

module.exports = {
    decode
}
