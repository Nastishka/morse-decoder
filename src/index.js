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

const BINARY_CODES_MAP = {
    '10' : '.',
    '11' : '-'
}

const SPACE = '**********';

const EMPTY_BYNARY_CODE = '00';

function decode(expr) {
    let decodedStr = [];
    let words = expr.split(SPACE);
    words.forEach(word => {
        let letters = word.match(/.{1,10}/g);
        letters.forEach(letter => {
            let binaryCodes = letter.match(/.{1,2}/g).filter(item => item !== EMPTY_BYNARY_CODE);
            let morzeSigns = Array.from(binaryCodes, code => BINARY_CODES_MAP[code]).join('');
            decodedStr.push(MORSE_TABLE[morzeSigns])
        });
        decodedStr.push(' ');
    });
    return decodedStr.join('').trim();
}

module.exports = {
    decode
}