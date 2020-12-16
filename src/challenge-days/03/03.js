//import { INPUT } from './input.js';
import { INPUT } from './testInput.js';

export function run(element){
    let input = INPUT.split("\n").map(parseInputLine);
    element.children[1].textContent = problem1(input);
    element.children[3].textContent = problem2(input);
}

const problem1 = (input) => {
    return;
};

const problem2 = (input) => {
    return;
};