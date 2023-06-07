let N = 1000,
    count = 0;
for (let i = 3; i < N; i++) {
    (i % 3 === 0 || i % 5 === 0) && (count += i);
}
console.log(count);
