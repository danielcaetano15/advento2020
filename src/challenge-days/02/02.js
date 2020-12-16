import { INPUT } from './input.js';
//import { INPUT } from './testInput.js';

export function run(element){
    let input = INPUT.split("\n").map(parseInputLine);
    element.children[1].textContent = problem1(input);
    element.children[3].textContent = problem2(input);
}

const parseInputLine = (line) => {
    const splittedLine = line.split(' ');
    const minMaxValues = splittedLine[0].split('-');
    const passwordKey = splittedLine[1][0];
    const password = splittedLine[2];
    return {
        min: minMaxValues[0],
        max: minMaxValues[1],
        key: passwordKey,
        password: password,
    };
};

const problem1 = (input) => {
    return input.reduce((acc, currentValue) => {
        const regExp = new RegExp(currentValue.key, 'g');
        const entriesCount = (currentValue.password.match(regExp) || []).length;
        if(entriesCount >= currentValue.min && entriesCount <= currentValue.max){
            acc++;
        }
        return acc;
        }, 0);
};

const problem2 = (input) => {
    return input.reduce((acc, currentValue)=> {
        const isFirstLetterCorrect = currentValue.password[currentValue.min-1] === currentValue.key;
        const isLastLetterCorrect = currentValue.password[currentValue.max-1] === currentValue.key;
        if((isFirstLetterCorrect || isLastLetterCorrect) && !(isFirstLetterCorrect && isLastLetterCorrect)){
            acc++;
        }
        return acc;
    }, 0);
};