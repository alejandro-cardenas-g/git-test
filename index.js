export const sumArgs = (...args) => {
    let sum = 0;
    for(const arg of args) sum = sum + arg;
    return sum;
}

export const subtractArgs = (...args) => {
    let subtract = 0;
    for(const arg of args) sum = sum - arg;
    return subtract;
}