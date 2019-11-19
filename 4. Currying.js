const ContohCurrying = (function1) => (function2) => (function3) => {
    return `${function1} ${function2} ${function3}`;
};

console.log(ContohCurrying("Nama")("Panggilan")("Momo"));