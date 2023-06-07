const getFib = (depth) => {
    let m = [];
    let f1 = 0,
        f2 = 1;

    while (f1 + f2 <= depth) {
        m.push(f1 + f2);
        [f1, f2] = [f2, f1 + f2];
    }

    return m;
};

console.log(
    getFib(4000000)
        .filter((x) => x % 2 === 0)
        .reduce((p, c) => p + c)
);
