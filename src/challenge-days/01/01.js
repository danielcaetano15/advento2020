import inputValues from "./input.txt";
export function run(element){
    let input = inputValues.split("\n").map(x=>parseInt(x, 10));
    let problem1 = resolveProblem1(input, 2020, 0);
    let problem2 = resolveProblem2(input);
    element.children[1].textContent = problem1;
    element.children[3].textContent = problem2;
}

function resolveProblem1(values, target, startIndex){
    const valuesSet = new Set();
    for (let i = startIndex; i < values.length; i++) {
        const pairValue = target - values[i];
        if (valuesSet.has(pairValue)) {
            return pairValue * values[i];
        }
        valuesSet.add(values[i]);
    }
}

function resolveProblem2(values){
    for (let i = 0; i < values.length; i++) {
        const target = 2020 - values[i];
        const result = resolveProblem1(values, target, i + 1);
        if (result) {
          return values[i] * result;
        }
      }
}