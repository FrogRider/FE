function* fibonacciGenerator() {
  let a = 0;
  let b = 1;
  let res = [];
  while (true) {
    res.push(a);
    yield res[res.length - 1];
    a = b;
    b = res[res.length-1] + b;
  }
  
}

let repeat = (f, times) => {
  for (var i = 1; i <= times; i++) {
    console.log(f.next().value);
  };

}

let fib = fibonacciGenerator();

repeat(fib, 10)
console.log('-------------');
repeat(fib, 2)