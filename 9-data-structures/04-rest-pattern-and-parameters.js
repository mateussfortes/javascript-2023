// spread, because on right side of
const arr = [1, 2, ...[3, 4]];

// rest, because on left side of
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

