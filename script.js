// Mixed Messages project

// Arrays of strings:
const adjectives = ['angry', 'rambunctious', 'hungry', 'happy', 'ridiculous', 'brainy', 'charming', 'evil', 'naughty', 'creepy', 'lovely', 'smelly', 'dizzy', 'droll', 'sexy', 'grotty'];

const nounsOne = ['dwarves', 'children', 'OAPs', 'VIPs', 'turtles', 'swingers', 'ravers', 'Tories', 'chavs', 'Scotsman', 'bloke', 'mice', 'vagrants', 'players', 'darts champion', 'conspiracy theorist'];

const verbs = ['marched', 'trotted', 'grooved', 'shimmied', 'flounced', 'tip-toed', 'stomped', 'crashed', 'meandered', 'swam', 'cycled', 'zoomed', 'skipped', 'moonwalked', 'crawled', 'slithered'];

const adverbs = ['merrily', 'hungrily', 'angrily', 'morosely', 'happily', 'abnormally', 'selfishly', 'vainly', 'briskly', 'frenetically', 'reluctantly', 'recklessly', 'hauntedly', 'surreptitiously', 'easily', 'breezily'];

const nounsTwo = ['laboratory', 'Pret a Manger', 'sewers', 'ends of the Earth', 'funny farm', 'county courts', 'Bolivian embassy', 'factory floor', 'Labour party conference', 'weather station', 'dark side of town', 'cobblers', 'pie shop', 'pier', 'squat', 'circus'];


const mixedMessage = () => {
    const randomNum = array => {
        return Math.floor(Math.random() * array.length);
    }

    let selectAdj = adjectives[randomNum(adjectives)];
    let selectNounsOne = nounsOne[randomNum(nounsOne)];
    let selectVerbs = verbs[randomNum(verbs)];
    let selectAdverbs = adverbs[randomNum(adverbs)];
    let selectNounsTwo = nounsTwo[randomNum(nounsTwo)];

    let message = console.log(`The ${selectAdj} ${selectNounsOne} ${selectVerbs} ${selectAdverbs} to the ${selectNounsTwo}.`);
}

mixedMessage();