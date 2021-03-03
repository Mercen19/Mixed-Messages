const message = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

const randomNumber = num => Math.floor(Math.random() * num);

let finalMessage = []

for (let item in message) {
    let index = randomNumber(message[item].length);

    switch (item) {
        case 'signInfo':
            finalMessage.push(`Your sign right now is a "${message[item][index]}".`);
            break;
        case 'fortuneOutput':
            finalMessage.push(`You are having: "${message[item][index]}".`);
            break;
        case 'advice':
            finalMessage.push(`You should: "${message[item][index]}".`);
            break;
        default:
            finalMessage.push('There is not enough info.');
    }
}