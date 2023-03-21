function digitalRoot(n) {
    const arr = Array.from(String(n), (num) => Number(num));
    return arr.reduce((acc, curr) => {
        const sum = acc + curr;
        if (sum >= 10) {
            return digitalRoot(sum);
        }
        return sum;
    }, 0)
}

console.log(digitalRoot(5)) // 5
console.log(digitalRoot(16)) // 7
console.log(digitalRoot(942)) // 6
console.log(digitalRoot(132189)) // 6