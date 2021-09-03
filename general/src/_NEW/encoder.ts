let toAscii85 = function(input: string) {
    let pad = '\0';
    let counter = 0;
    let output = '';
    let total = 0;
    while (input.length % 4 !== 0) {
        input += pad;
        counter++;
    }
    for (let i = 0; i < input.length; i += 4) {
        let e = '';
        let temp = input.substr(i, 4);
        for (let j = 0; j < 4; j++) {
            let t = temp[j].charCodeAt(0).toString(2)
            while (t.length !== 8)
                t = '0' + t;
            e += t;
        }
        total = parseInt(e, 2);
        let encode = [];
        for (let j = 0; j < 5; j++)
            encode.push(0);
        for (let j = 4; j >= 0; j--) {
            encode[j] = total % 85;
            total = Math.floor(total / 85);
        }
        for (let j = 0; j < 5; j++)
            output += String.fromCharCode(encode[j] + 33);
    }
    output = output.substr(0, output.length - counter);
    let result = '';

    for (let i = 0; i < output.length; i += 5)
        result += output.substr(i, Math.min(5, output.length - i)) === '!!!!!' ? 'z' : output.substr(i, Math.min(5, output.length - i));
    return '<~' + result + '~>';
}

let fromAscii85 = function(input: string) {
    let pad = 'u',
        counter = 0,
        s = input.substring(2, input.length - 2).replace(/\s/g, ''),
        string = '',
        output = '';
    for (let i = 0; i < s.length; i++)
        string += s[i] === 'z' ? '!!!!!' : s[i];
    while (string.length % 5 !== 0) {
        string += pad;
        counter++;
    }
    for (let i = 0; i < string.length; i += 5) {
        let temp = string.substr(i, 5),
            decode = [],
            sum = 0,
            sum2str = '';
        for (let j = 0; j < 5; j++) {
            let t = temp[j].charCodeAt(0) - 33;
            decode.push(t);
        }
        for (let i = 4; i >= 0; i--)
            sum += decode[i] * Math.pow(85, 4 - i);
        sum2str = sum.toString(2);
        while (sum2str.length % 32 !== 0)
            sum2str = '0' + sum2str;
        for (let i = 0; i < sum2str.length; i += 8) {
            let temp = parseInt(sum2str.substr(i, 8), 2);
            output += String.fromCharCode(temp);
        }
    }
    output = output.substr(0, output.length - counter);
    return output;
}


