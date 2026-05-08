const fatorial = (n, acc = 1) => {
  if (n === 0) return acc;
  return fatorial(n - 1, n * acc);
};

const trampoline = fn => (...args) => {
    let result = fn(...args);
    // Enquanto o resultado for uma função (thunk), execute-a
    while (typeof result === 'function') {
        result = result();
    }
    return result;
};
console.log(trampoline(fatorial)(5)); // 120