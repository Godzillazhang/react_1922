let a = 'hello'

export function add(a, b) {
    return a + b;
}

export function sum(m, n) {
    let total = 0;
    for (let i = m; i <= n; i++) {
        total += i;
    }
    return total;
}