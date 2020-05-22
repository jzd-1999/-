const sum = (...args) => {
    let total = 0;
    args.forEach(value => total += value)
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9,10));
console.log(sum(99999,99999,99999,99999,99999,99999,99999))