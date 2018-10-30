import {
    add,
    substract,
    multiply,
    divide
} from './calculating-module'

export function calculate(operation, first, second, result) {
    switch (operation) {
        case '+':
            result = add(parseFloat(second), parseFloat(first));
            break;
        case '-':
            result = substract(parseFloat(second), parseFloat(first));
            break;
        case '*':
            result = multiply(parseFloat(second), parseFloat(first));
            break;
        case '/':
            result = divide(parseFloat(second), parseFloat(first));
            break;
        default:
            break;
    }

    return parseFloat(result).toFixed(2)
}